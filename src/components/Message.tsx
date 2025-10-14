function Message({ message }: { message: string }) {
  return (
    <div
      className={
        "mb-2 max-w-[calc(100%-30px)] self-end rounded border bg-gray-100/30 p-2 text-wrap break-words sm:max-w-[calc(80%-20px)]"
      }
    >
      {message}
    </div>
  );
}
export default Message;
