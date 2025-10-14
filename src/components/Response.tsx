import MarkdownRender from "./MarkdownRender";

function Response({ response }: { response: string }) {
  return (
    <div className="mb-2 max-w-[calc(100%-40px)] self-start overflow-x-auto rounded border bg-gray-100/30 p-2 text-pretty break-words sm:max-w-1/2">
      <MarkdownRender md={response} />
    </div>
  );
}
export default Response;
