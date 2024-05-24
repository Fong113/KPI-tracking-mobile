import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex bg-[#FAFAFA] font-normal text-text-default h-12 w-full border border-border-input border-solid rounded-[8px] px-4 py-2 text-[16px] ring-offset-background file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none s disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{
          border: '1px solid rgba(0, 0, 0, 0.40)'
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

