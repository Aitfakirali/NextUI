"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface TagInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tags: string[]
  setTags: (tags: string[]) => void
  placeholder?: string
  maxTags?: number
  minLength?: number
  maxLength?: number
  validate?: (tag: string) => boolean
  onTagAdd?: (tag: string) => void
  onTagRemove?: (tag: string) => void
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  ({
    className,
    tags,
    setTags,
    placeholder = "Add tag...",
    maxTags,
    minLength = 1,
    maxLength = 20,
    validate,
    onTagAdd,
    onTagRemove,
    disabled,
    ...props
  }, ref) => {
    const [inputValue, setInputValue] = React.useState("")
    const inputRef = React.useRef<HTMLInputElement>(null)

    const addTag = (tag: string) => {
      tag = tag.trim()

      if (
        tag.length >= minLength &&
        tag.length <= maxLength &&
        !tags.includes(tag) &&
        (!maxTags || tags.length < maxTags) &&
        (!validate || validate(tag))
      ) {
        const newTags = [...tags, tag]
        setTags(newTags)
        onTagAdd?.(tag)
        setInputValue("")
      }
    }

    const removeTag = (tagToRemove: string) => {
      const newTags = tags.filter((tag) => tag !== tagToRemove)
      setTags(newTags)
      onTagRemove?.(tagToRemove)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return

      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault()
        addTag(inputValue)
      } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
        removeTag(tags[tags.length - 1])
      }
    }

    const handleBlur = () => {
      if (inputValue) {
        addTag(inputValue)
      }
    }

    return (
      <div
        className={cn(
          "flex min-h-10 w-full flex-wrap items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className={cn(
              "gap-1 pr-1",
              !disabled && "hover:bg-secondary/80"
            )}
          >
            {tag}
            {!disabled && (
              <button
                type="button"
                className="rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={(e) => {
                  e.stopPropagation()
                  removeTag(tag)
                }}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove tag</span>
              </button>
            )}
          </Badge>
        ))}
        <input
          ref={ref || inputRef}
          type="text"
          placeholder={maxTags && tags.length >= maxTags ? "" : placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
          disabled={disabled || (maxTags ? tags.length >= maxTags : false)}
          {...props}
        />
      </div>
    )
  }
)
TagInput.displayName = "TagInput"

export { TagInput } 