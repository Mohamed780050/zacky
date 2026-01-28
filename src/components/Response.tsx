import MarkdownRender from "./MarkdownRender";

function Response({ response }: { response: string }) {
  return (
    <div className="bg-muted/50 text-foreground mb-4 max-w-[calc(100%-40px)] self-start overflow-x-auto rounded-2xl rounded-tl-sm p-4 text-pretty break-words shadow-sm backdrop-blur-sm sm:max-w-1/2">
      <MarkdownRender md={response} />
    </div>
  );
}
export default Response;
