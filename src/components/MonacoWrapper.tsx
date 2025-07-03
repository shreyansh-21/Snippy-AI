// components/MonacoWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import Monaco Editor on the client only
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default MonacoEditor;
