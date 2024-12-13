"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: "complete" | "current" | "upcoming"
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ className, title, description, icon, status = "upcoming", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex min-h-[4rem]", className)}
        {...props}
      >
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium",
              status === "complete"
                ? "border-primary bg-primary text-primary-foreground"
                : status === "current"
                ? "border-primary text-primary"
                : "border-muted-foreground/20 text-muted-foreground"
            )}
          >
            {status === "complete" ? (
              <Check className="h-4 w-4" />
            ) : (
              icon || <span>{props["aria-label"]?.match(/\d+/)?.[0]}</span>
            )}
          </div>
          <div
            className={cn(
              "absolute mt-8 h-[calc(100%-2rem)] w-px",
              status === "complete"
                ? "bg-primary"
                : "bg-muted-foreground/20"
            )}
          />
        </div>
        <div className="ml-4 pb-8">
          <div
            className={cn(
              "text-sm font-medium",
              status === "complete" || status === "current"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {title}
          </div>
          {description && (
            <div
              className={cn(
                "mt-1 text-sm",
                status === "complete" || status === "current"
                  ? "text-muted-foreground"
                  : "text-muted-foreground/60"
              )}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    )
  }
)
Step.displayName = "Step"

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: StepProps[]
  currentStep?: number
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  ({ className, steps, currentStep = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-0", className)}
        {...props}
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            {...step}
            aria-label={`Step ${index + 1}`}
            status={
              index + 1 < currentStep
                ? "complete"
                : index + 1 === currentStep
                ? "current"
                : "upcoming"
            }
          />
        ))}
      </div>
    )
  }
)
Steps.displayName = "Steps"

export { Steps, Step } 