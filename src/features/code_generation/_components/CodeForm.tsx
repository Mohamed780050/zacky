"use client";

import { useActionState, useRef } from "react";
import { PlusIcon, SendIcon } from "lucide-react";
import { Loader } from "@/components/ui/loader";

import { ConversationActionState } from "@/interfaces/interfaces";
import { CodeSubmit } from "../actions/CodeActions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormStyles, SubmitButtonStyles } from "@/data/static";
import { cn } from "@/lib/utils";

function CodeForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: ConversationActionState = {
    errors: {},
    message: null,
  };

  const [state, formAction, isPending] = useActionState<
    ConversationActionState,
    FormData
  >(CodeSubmit, initialState);

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
      className={cn(FormStyles, "flex items-center py-3 pr-2 pl-4")}
    >
      <button
        type="button"
        className="rounded-full p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
      >
        <PlusIcon className="h-5 w-5" />
      </button>

      <Textarea
        id="prompt"
        name="prompt"
        disabled={isPending}
        required
        onKeyDown={handleKeyDown}
        placeholder="Ask or type your code here..."
        className="min-h-[44px] py-3 pr-12 text-[15px] leading-relaxed"
      />

      <Button
        type="submit"
        disabled={isPending}
        className={cn(
          SubmitButtonStyles,
          "transition-all duration-300",
          !isPending && "bg-green-700 hover:bg-green-600 scale-100",
        )}
      >
        {isPending ? (
          <Loader className="p-0 text-current" size={20} />
        ) : (
          <SendIcon className="h-5 w-5" />
        )}
      </Button>

      {state.errors?.prompt && (
        <div className="absolute -top-10 left-0 w-full text-center text-xs text-red-500">
          {state.errors.prompt[0]}
        </div>
      )}
    </form>
  );
}

export default CodeForm;
