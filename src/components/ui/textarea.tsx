import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "min-h-[180px] !bg-yellow-200 rounded-[20px] !text-black text-xl font-normal shadow border border-neutral-50 flex w-full !pt-[16px] !pl-[39px]  border-input px-3 py-2 ring-offset-background placeholder:text-[#1D2D35] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
