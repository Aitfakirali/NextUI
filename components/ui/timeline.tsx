"use client"

import * as React from "react"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: React.ReactNode
  time?: React.ReactNode
  active?: boolean
  last?: boolean
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, icon, title, time, active, last, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative pb-8", last && "pb-0", className)}
        {...props}
      >
        <div className="relative flex items-start space-x-3">
          <div className="relative">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground/20 bg-background"
              )}
            >
              {icon || <Circle className="h-4 w-4" />}
            </div>
            {!last && (
              <div
                className={cn(
                  "absolute left-4 top-8 -bottom-8 w-px",
                  active
                    ? "bg-primary"
                    : "bg-muted-foreground/20"
                )}
              />
            )}
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between space-x-4">
              <div
                className={cn(
                  "text-sm font-medium",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {title}
              </div>
              {time && (
                <div
                  className={cn(
                    "text-sm",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {time}
                </div>
              )}
            </div>
            {children && (
              <div
                className={cn(
                  "text-sm",
                  active
                    ? "text-muted-foreground"
                    : "text-muted-foreground/60"
                )}
              >
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItemProps[]
  activeItem?: number
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, items, activeItem, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            active={activeItem !== undefined ? index <= activeItem : undefined}
            last={index === items.length - 1}
          />
        ))}
      </div>
    )
  }
)
Timeline.displayName = "Timeline"

export { Timeline, TimelineItem } 