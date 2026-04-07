"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as lightTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl border border-border bg-[#f8f9fa] shadow-md transition-all hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-[#eef0f2] px-4 py-2 text-xs font-semibold text-muted-foreground/90">
        <span className="uppercase tracking-wider">
          {language || "code"}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 gap-1.5 px-2 text-xs font-medium hover:bg-black/5 hover:text-black"
        >
          {isCopied ? (
            <>
              <Check className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-blue-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy code</span>
            </>
          )}
        </Button>
      </div>

      {/* Code Area */}
      <div className="relative overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={lightTheme}
          customStyle={{
            margin: 0,
            padding: "1.5rem 1rem",
            background: "transparent",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-mono)",
              background: "transparent",
            },
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
