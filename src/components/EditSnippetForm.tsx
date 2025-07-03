"use client";
import MonacoEditor from "./MonacoWrapper"; // ✅ use your dynamic version!
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEvenHandler = (value: string = "") => {
    setCode(value);
  };

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col gap-6 p-6 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg">
      <form action={saveSnippetAction} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="font-bold text-2xl text-white">Your Code Editor:</h1>
        <Button type="submit" className="w-full sm:w-auto">
          Save
        </Button>
      </form>

      <div className="rounded-lg overflow-hidden border border-zinc-700">
        <MonacoEditor
          height="70vh"
          theme="vs-dark"
          defaultLanguage="python"
          defaultValue={code}
          onChange={changeEvenHandler}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  );
};

export default EditSnippetForm;
