"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const centerVariants = cva(
  "flex items-center justify-center",
  {
    variants: {
      inline: {
        true: "inline-flex",
        false: "flex",
      },
      direction: {
        row: "flex-row",
        column: "flex-col",
      },
      gap: {
        default: "gap-4",
        sm: "gap-2",
        lg: "gap-6",
      },
    },
    defaultVariants: {
      inline: false,
      direction: "row",
      gap: "default",
    },
  }
)

export interface CenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof centerVariants> {}

const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ className, inline, direction, gap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(centerVariants({ inline, direction, gap, className }))}
        {...props}
      />
    )
  }
)
Center.displayName = "Center"

export { Center, centerVariants } 