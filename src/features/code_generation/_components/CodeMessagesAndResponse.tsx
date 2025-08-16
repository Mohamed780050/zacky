import { MessageInterfaces } from "@/interfaces/interfaces";
import Message from "../../../components/Message";
import Response from "../../../components/Response";

function CodeMessagesAndResponse({
  messages,
}: {
  messages: MessageInterfaces[];
}) {
  return (
    <ul className="pb-32">
      {messages.map((item, index) => (
        <li key={index} className="flex flex-col">
          <Message message={item.message} />
          <Response response={item.response} />
        </li>
      ))}
    </ul>
  );
}
export default CodeMessagesAndResponse;
