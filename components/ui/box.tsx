"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const boxVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-destructive",
        success: "border-green-500",
        warning: "border-yellow-500",
        info: "border-blue-500",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(boxVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Box.displayName = "Box"

export { Box, boxVariants } 