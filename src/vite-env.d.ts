/// <reference types="vite/client" />

declare module "*.json" {
  const value: unknown;
  export default value;
}

interface ImportMetaEnv {
  readonly VITE_PULSE_EXTENSIONS_ROOT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
