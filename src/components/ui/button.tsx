import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center py-[6px] justify-center whitespace-nowrap rounded-md text-2xl font-normal text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-solid border-[1px] border-[#CDC8C8] rounded-[16px]",
  {
    variants: {
      variant: {
        default: "text-base",
        destructive:
          "bg-accent-700 hover:opacity-90",
        submit: 
          "bg-primary-700 text-white"
      },
      size: {
        default: "w-[200px] h-[40px] px-4 py-2",
        sm: "w-[123px] h-[31px] rounded-[12px] px-3 text-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
