declare namespace WebAssembly {
  interface Module {
    // https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/2172
    [Symbol.toStringTag]: "WebAssembly.Module";
  }

  // https://github.com/microsoft/TypeScript/issues/17471
  function instantiate(
    source: BufferSource | Module,
    importObject?: Imports,
  ): Promise<WebAssemblyInstantiatedSource | Instance>;
}
