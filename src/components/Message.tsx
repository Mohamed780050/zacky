function Message({ message }: { message: string }) {
  return (
    <div
      className={
        "max-w-1/2 self-end rounded border bg-gray-100/30 p-2 text-wrap break-words"
      }
    >
      {message}
    </div>
  );
}
export default Message;
