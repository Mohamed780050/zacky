"use client";
import { ConversationActionState } from "@/interfaces/interfaces";
import { useActionState } from "react";
import { ImageSubmit } from "../actions/ImagesActions";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { FormStyles, SubmitButtonStyles } from "@/data/static";

function ImageForm() {
  const initialState: ConversationActionState = {
    errors: {},
    message: null,
  };
  const [state, formAction, isPending] = useActionState(
    ImageSubmit,
    initialState,
  );
  return (
    <form
      action={formAction}
      className={FormStyles}
    >
      <Textarea
        id="prompt"
        name="prompt"
        disabled={isPending}
        required
        placeholder="Describe the image you want to generate..."
      />
      <Button
        type="submit"
        disabled={isPending}
        className={SubmitButtonStyles}
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
export default ImageForm;
