"use client";

import { useActionState, useRef } from "react";
import { PlusIcon } from "lucide-react";
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
      className={cn(
        FormStyles,
        "relative flex items-center border-green-700/20 py-3 pr-2 pl-4 focus-within:ring-green-700/20",
      )}
    >
      <div className="flex w-full items-center gap-2">
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
            "bg-green-700/80 transition-all duration-300 hover:bg-green-700",
            !isPending && "hover:shadow-glow-primary scale-100",
          )}
        >
          {isPending ? (
            <Loader className="p-0 text-current" size={20} />
          ) : (
            <PlusIcon className="h-5 w-5" />
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

export default CodeForm;
