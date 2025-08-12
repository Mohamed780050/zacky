import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // allow inline HTML in MD (optional)
import rehypeSanitize from "rehype-sanitize";

function MarkdownRender({ md }: { md: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      // If you expect HTML in the MD, include rehypeRaw BUT then sanitize it.
      // If you never expect HTML, remove rehypeRaw and rehypeSanitize.
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
    >
      {md}
    </ReactMarkdown>
  );
}
export default MarkdownRender;
