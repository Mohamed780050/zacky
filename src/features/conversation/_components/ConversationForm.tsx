"use client";
import { ConversationActionState } from "@/interfaces/interfaces";
import { useActionState } from "react";
import { conversationSubmit } from "../actions/conversationActions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ConversationForm() {
  const initialState: ConversationActionState = {
    errors: {},
    message: null,
    response: null,
  };
  const [state, formAction, isPending] = useActionState(
    conversationSubmit,
    initialState,
  );
  console.log(initialState);
  return (
    <form
      action={formAction}
      className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-4"
    >
      <Input
        id="prompt"
        name="prompt"
        disabled={isPending}
        required
        className="col-span-12 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent lg:col-span-10"
        placeholder="Type your message here..."
      />
      <Button
        type="submit"
        disabled={isPending}
        className="col-span-12 w-full cursor-pointer lg:col-span-2"
      >
        {isPending ? "Generating..." : "Generate"}
      </Button>
      {state.errors?.prompt && (
        <div className="text-red-500">
          {state.errors.prompt.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      {state.response && (
        <div className="col-span-12 text-green-500">{state.response}</div>
      )}
    </form>
  );
}
export default ConversationForm;
