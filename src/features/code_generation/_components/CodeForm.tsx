"use client";
import { ConversationActionState } from "@/interfaces/interfaces";
import { useActionState } from "react";
import { CodeSubmit } from "../actions/CodeActions";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { FormStyles, SubmitButtonStyles } from "@/data/static";
import { cn } from "@/lib/utils";

function CodeForm() {
  const initialState: ConversationActionState = {
    errors: {},
    message: null,
  };
  const [state, formAction, isPending] = useActionState<
    ConversationActionState,
    FormData
  >(CodeSubmit, initialState);
  return (
    <form
      action={formAction}
      className={cn(
        FormStyles,
        "border-green-700/20 focus-within:ring-green-700/20",
      )}
    >
      <Textarea
        id="prompt"
        name="prompt"
        disabled={isPending}
        required
        placeholder="Ask or type your code here..."
      />
      <Button
        type="submit"
        disabled={isPending}
        className={cn(SubmitButtonStyles, "bg-green-700/80 hover:bg-green-700")}
      >
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
export default CodeForm;
