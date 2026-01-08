import { parse } from "node-html-parser";
import { Application, ReflectionKind, Renderer } from "typedoc";

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
