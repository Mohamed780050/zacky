import Message from "../../../components/Message";
import Response from "./Response";

function ConversationMessagesAndResponse({
  messages,
}: {
  messages: { message: string; response: string }[];
}) {
  return (
    <ul>
      {messages.map((item, index) => (
        <li key={index} className="flex flex-col">
          <Message message={item.message} />
          <Response response={item.response} />
        </li>
      ))}
    </ul>
  );
}
export default ConversationMessagesAndResponse;
