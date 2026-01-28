"use client";

import { useActionState, useRef } from "react";
import { PlusIcon, SendIcon } from "lucide-react";
import { Loader } from "@/components/ui/loader";

import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSubmit } from "../actions/conversationActions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormStyles, SubmitButtonStyles } from "@/data/static";
import { useProModal } from "@/hooks/useProModal";
import { cn } from "@/lib/utils";

function ConversationForm() {
  const proModel = useProModal();
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn(FormStyles, "flex items-end py-3 pr-2 pl-4")}
    >
      <div className="flex w-full items-end gap-2">
        <button
          type="button"
          className="mb-1 rounded-full p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          <PlusIcon className="h-5 w-5" />
        </button>

        <Textarea
          id="prompt"
          name="prompt"
          disabled={isPending}
          required
          onKeyDown={handleKeyDown}
          placeholder="Start your conversation here..."
          className="min-h-[44px] py-3 text-[15px] leading-relaxed"
        />

        <Button
          type="submit"
          disabled={isPending}
          className={cn(
            SubmitButtonStyles,
            "static top-auto right-auto translate-x-0 translate-y-0 transition-all duration-300",
            !isPending && "bg-primary hover:shadow-glow-primary scale-100",
          )}
        >
          {isPending ? (
            <Loader className="p-0 text-current" size={20} />
          ) : (
            <SendIcon className="h-5 w-5" />
          )}
        </Button>
      </div>

      {state.errors?.prompt && (
        <div className="absolute -top-10 left-0 w-full text-center text-xs text-red-500">
          {state.errors.prompt[0]}
        </div>
      )}
    </form>
  );
}

export default ConversationForm;
