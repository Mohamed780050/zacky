"use client";
import { ConversationActionState } from "@/interfaces/interfaces";
import { useActionState } from "react";
import { conversationSubmit } from "../actions/conversationActions";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { FormStyles, SubmitButtonStyles } from "@/data/static";
import { useProModal } from "@/hooks/useProModal";

function ConversationForm() {
  const proModel = useProModal();
  const initialState: ConversationActionState = {
    errors: {},
    message: null,
    status: undefined,
  };

  const [state, formAction, isPending] = useActionState<
    ConversationActionState,
    FormData
  >(conversationSubmit, initialState);
  if (state.status === 403) {
    proModel.onOpen();
    state.status = undefined;
  }
  return (
    <form action={formAction} className={FormStyles}>
      <Textarea
        id="prompt"
        name="prompt"
        disabled={isPending}
        required
        placeholder="Start your conversation here..."
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
export default ConversationForm;
