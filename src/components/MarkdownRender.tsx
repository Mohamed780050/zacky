import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import CodeBlock from "./CodeBlock";

function MarkdownRender({ md }: { md: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const language = match ? match[1] : "";
          const isInline = !className;

          if (!isInline && match) {
            return (
              <CodeBlock
                language={language}
                value={String(children).replace(/\n$/, "")}
              />
            );
          }

          return (
            <code
              className="bg-muted px-1.5 py-0.5 rounded-md font-mono text-sm"
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {md}
    </ReactMarkdown>
  );
}

export default MarkdownRender;
