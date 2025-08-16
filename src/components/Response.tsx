import MarkdownRender from "./MarkdownRender";

function Response({ response }: { response: string }) {
  return (
    <div className="max-w-1/2 self-start rounded border bg-gray-100/30 p-2 break-words text-pretty overflow-x-auto">
      <MarkdownRender md={response} />
    </div>
  );
}
export default Response;
