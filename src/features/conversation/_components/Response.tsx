function Response({ response }: { response: string }) {
  return (
    <div className="max-w-1/2 self-start rounded border bg-gray-100/30 p-2 text-wrap break-words">
      {response}
    </div>
  );
}
export default Response;
