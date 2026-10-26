import { readFileSync } from "fs";
import type { SourceMapPayload, SourceOrigin } from "module";
import { SourceMap } from "module";
import { dirname, relative, resolve } from "path";

import { parse } from "node-html-parser";
import type {
  NormalizedPath,
  ProjectReflection,
  RepositoryManager,
  SourceReference,
} from "typedoc";
import {
  Application,
  Converter,
  DeclarationReflection,
  ReflectionKind,
  Renderer,
  SignatureReflection,
} from "typedoc";

import { repositoryPath } from "./utils/files.js";

export function load(app: Application): void {
  app.on(Application.EVENT_VALIDATE_PROJECT, (project) => {
    for (const reflection of project.getReflectionsByKind(
      ReflectionKind.Parameter,
    )) {
      if (reflection.name === "__namedParameters") {
        app.logger.warn(
          `${reflection.getFriendlyFullName()} should be given a friendly name using a @param tag`,
        );
      }
    }
  });

  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, ({ project }) => {
    for (const source of sources(project)) {
      resolveInternalSource(app.repositories, source);
      resolveExternalSource(source);
    }
  });

  app.renderer.on(Renderer.EVENT_END_PAGE, (page) => {
    if (page.contents) {
      for (const link of parse(page.contents).getElementsByTagName("a")) {
        if (/^@cerbos\/[a-z0-9-]+!/.test(link.innerText)) {
          let name = page.model.name;
          for (
            let model = page.model.parent;
            model?.parent !== undefined;
            model = model.parent
          ) {
            name = `${model.name}.${name}`;
          }

          app.logger.warn(
            `Link to ${link.innerText} in ${name} should be given custom text`,
          );
        }
      }
    }
  });
}

function* sources(
  project: ProjectReflection,
): Generator<SourceReference, void, undefined> {
  for (const reflection of Object.values(project.reflections)) {
    if (
      (reflection instanceof DeclarationReflection ||
        reflection instanceof SignatureReflection) &&
      reflection.sources
    ) {
      yield* reflection.sources;
    }
  }
}

const rootDir = repositoryPath();
const packagesDir = repositoryPath("packages/");
const declarationMaps = new Map<string, SourceMap>();

function resolveInternalSource(
  repositories: RepositoryManager | undefined,
  source: SourceReference,
): void {
  const path = source.fullFileName;

  if (source.url || !path.startsWith(packagesDir)) {
    return;
  }

  let declarationMap = declarationMaps.get(path);

  if (!declarationMap) {
    const payload = JSON.parse(
      readFileSync(`${path}.map`, { encoding: "utf8" }),
    ) as SourceMapPayload;

    declarationMap = new SourceMap(payload);
    declarationMaps.set(path, declarationMap);
  }

  const origin = declarationMap.findOrigin(
    source.line,
    source.character,
  ) as SourceOrigin;

  source.fullFileName = resolve(
    dirname(path),
    origin.fileName,
  ) as NormalizedPath;

  source.fileName = relative(rootDir, source.fullFileName) as NormalizedPath;
  source.line = origin.lineNumber;
  source.character = origin.columnNumber;

  const url = repositories?.getURL(source.fullFileName, source.line);
  if (url) {
    source.url = url;
  }
}

function resolveExternalSource(source: SourceReference): void {
  const match =
    /^node_modules\/\.pnpm\/@?[^@]+@(?<version>[^_]+)(?:_[^/]+)?\/node_modules\/(?<name>(?:@[^/]+\/)?[^/]+)\/(?<subpath>.+)$/.exec(
      source.fileName,
    );

  if (!match?.groups) {
    return;
  }

  const { name, version, subpath } = match.groups;
  source.fileName = `${name}@${version}/${subpath}` as NormalizedPath;
  source.url = `https://npmx.dev/package-code/${name}/v/${version}/${subpath}#L${source.line}`;
}
