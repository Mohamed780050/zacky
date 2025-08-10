"use client";
import { ConversationActionState } from "@/interfaces/interfaces";
import { useActionState } from "react";
import { conversationSubmit } from "../actions/conversationActions";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { FormStyles, SubmitButtonStyles } from "@/data/static";

function MusicForm() {
  const initialState: ConversationActionState = {
    errors: {},
    message: null,
  };
  const [state, formAction, isPending] = useActionState(
    conversationSubmit,
    initialState,
  );
  return (
    <form action={formAction} className={FormStyles}>
      <Textarea
        id="prompt"
        name="prompt"
        disabled={isPending}
        required
        className="max-h-32 resize-none border-0 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent"
        placeholder="Type your message here..."
      />
      <Button type="submit" disabled={isPending} className={SubmitButtonStyles}>
        <SendIcon />
      </Button>
      {state.errors?.prompt && (
        <div className="text-red-500">
          {state.errors.prompt.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </form>
  );
}
export default MusicForm;
