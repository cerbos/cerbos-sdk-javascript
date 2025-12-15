import { cancelBody, download } from "./fetch";
import type { WasmInstantiate, WasmSource } from "./options";

export async function load(
  source: WasmSource,
  imports: WebAssembly.Imports,
  userAgent: string,
): Promise<WebAssembly.Instance> {
  if (sourceIsInstantiate(source)) {
    return instantiated(await source(imports));
  }

  if (typeof source === "string" || source instanceof URL) {
    source = await download(source, userAgent);
  } else {
    source = await source;
  }

  if (source instanceof Response) {
    return await instantiateStreaming(source, imports);
  }

  return await instantiate(source, imports);
}

async function instantiateStreaming(
  response: Response,
  imports: WebAssembly.Imports,
): Promise<WebAssembly.Instance> {
  if (!response.ok) {
    cancelBody(response);

    throw new Error(
      `Failed to download from ${response.url}: HTTP ${response.status}`,
    );
  }

  return instantiated(
    await WebAssembly.instantiateStreaming(response, imports),
  );
}

async function instantiate(
  source: ArrayBufferView<ArrayBuffer> | ArrayBuffer | WebAssembly.Module,
  imports: WebAssembly.Imports,
): Promise<WebAssembly.Instance> {
  return instantiated(await WebAssembly.instantiate(source, imports));
}

function instantiated(
  instantiated:
    | WebAssembly.Instance
    | WebAssembly.WebAssemblyInstantiatedSource,
): WebAssembly.Instance {
  return instantiated instanceof WebAssembly.Instance
    ? instantiated
    : instantiated.instance;
}

function sourceIsInstantiate(source: WasmSource): source is WasmInstantiate {
  return typeof source === "function";
}
