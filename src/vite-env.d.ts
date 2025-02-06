declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

  export default ReactComponent;
}
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_ML_CLIENT_ID: string;
  readonly VITE_ML_AUTHORITY_URL:string;
  // Add other environment variables here...
}
 
interface ImportMeta {
  readonly env: ImportMetaEnv;
}