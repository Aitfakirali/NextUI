"use client"

import * as React from "react"
import { Star, StarHalf } from "lucide-react"

import { cn } from "@/lib/utils"

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  allowHalf?: boolean
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  emptyIcon?: React.ReactNode
  halfIcon?: React.ReactNode
}

export function Rating({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  allowHalf = false,
  size = "md",
  icon,
  emptyIcon,
  halfIcon,
  className,
  ...props
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const StarIcon = icon || Star
  const EmptyStarIcon = emptyIcon || Star
  const HalfStarIcon = halfIcon || StarHalf

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (readOnly) return

    const { left, width } = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - left) / width

    if (allowHalf) {
      setHoverValue(index + (percent > 0.5 ? 1 : 0.5))
    } else {
      setHoverValue(index + 1)
    }
  }

  const handleClick = (value: number) => {
    if (readOnly) return
    onChange?.(value)
  }

  const renderStar = (index: number) => {
    const displayValue = hoverValue ?? value
    const isActive = index + 1 <= displayValue
    const isHalf = allowHalf && Math.ceil(displayValue) === index + 1 && displayValue % 1 !== 0

    return (
      <div
        key={index}
        className={cn(
          "relative cursor-pointer",
          readOnly && "cursor-default"
        )}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onClick={() => handleClick(index + 1)}
      >
        <div
          className={cn(
            "transition-colors",
            isActive ? "text-yellow-400" : "text-muted-foreground",
            readOnly && "cursor-default"
          )}
        >
          {isHalf ? (
            <div className="relative">
              <div className="absolute text-yellow-400">
                <HalfStarIcon className={sizeClasses[size]} />
              </div>
              <EmptyStarIcon className={sizeClasses[size]} />
            </div>
          ) : isActive ? (
            <StarIcon className={sizeClasses[size]} />
          ) : (
            <EmptyStarIcon className={sizeClasses[size]} />
          )}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "inline-flex gap-1",
        readOnly && "pointer-events-none",
        className
      )}
      onMouseLeave={() => !isDragging && setHoverValue(null)}
      {...props}
    >
      {Array.from({ length: max }, (_, i) => renderStar(i))}
    </div>
  )
} 