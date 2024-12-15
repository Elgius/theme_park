import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Enhanced button variants using Tailwind CSS for improved UI
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-lg hover:bg-blue-500 active:bg-blue-700 focus-visible:ring-blue-500",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-500 active:bg-red-700 focus-visible:ring-red-500",
        outline:
          "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-400",
        secondary:
          "bg-gray-100 text-gray-800 shadow hover:bg-gray-200 active:bg-gray-300 focus-visible:ring-gray-300",
        ghost: "text-gray-700 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-200",
        link: "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-sm",
        lg: "h-12 rounded-lg px-6 text-base",
        icon: "h-10 w-10 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
