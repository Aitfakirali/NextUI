"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TreeViewContextValue {
  expanded: string[]
  onExpandedChange: (expanded: string[]) => void
}

const TreeViewContext = React.createContext<TreeViewContextValue>({
  expanded: [],
  onExpandedChange: () => {},
})

interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultExpanded?: string[]
  expanded?: string[]
  onExpandedChange?: (expanded: string[]) => void
}

const TreeView = React.forwardRef<HTMLDivElement, TreeViewProps>(
  ({ className, defaultExpanded = [], expanded, onExpandedChange, children, ...props }, ref) => {
    const [expandedInternal, setExpandedInternal] = React.useState<string[]>(defaultExpanded)

    const expandedValue = expanded ?? expandedInternal
    const onExpandedChangeValue = onExpandedChange ?? setExpandedInternal

    return (
      <TreeViewContext.Provider
        value={{
          expanded: expandedValue,
          onExpandedChange: onExpandedChangeValue,
        }}
      >
        <div
          ref={ref}
          className={cn("w-full", className)}
          {...props}
        >
          {children}
        </div>
      </TreeViewContext.Provider>
    )
  }
)
TreeView.displayName = "TreeView"

interface TreeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  disabled?: boolean
}

const TreeItem = React.forwardRef<HTMLDivElement, TreeItemProps>(
  ({ className, value, disabled, children, ...props }, ref) => {
    const { expanded } = React.useContext(TreeViewContext)
    const isExpanded = expanded.includes(value)

    return (
      <div
        ref={ref}
        className={cn(
          "relative select-none",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TreeItem.displayName = "TreeItem"

interface TreeItemTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

const TreeItemTrigger = React.forwardRef<HTMLDivElement, TreeItemTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { expanded, onExpandedChange } = React.useContext(TreeViewContext)
    const item = React.useContext(TreeItemContext)
    const isExpanded = expanded.includes(item.value)

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center rounded-lg px-2 py-1.5 hover:bg-accent hover:text-accent-foreground",
          className
        )}
        onClick={() => {
          const newExpanded = isExpanded
            ? expanded.filter((v) => v !== item.value)
            : [...expanded, item.value]
          onExpandedChange(newExpanded)
        }}
        {...props}
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isExpanded && "rotate-90"
          )}
        />
        {children}
      </div>
    )
  }
)
TreeItemTrigger.displayName = "TreeItemTrigger"

interface TreeItemContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const TreeItemContent = React.forwardRef<HTMLDivElement, TreeItemContentProps>(
  ({ className, children, ...props }, ref) => {
    const { expanded } = React.useContext(TreeViewContext)
    const item = React.useContext(TreeItemContext)
    const isExpanded = expanded.includes(item.value)

    if (!isExpanded) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn("pl-6 relative", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TreeItemContent.displayName = "TreeItemContent"

interface TreeItemContextValue {
  value: string
  disabled?: boolean
}

const TreeItemContext = React.createContext<TreeItemContextValue>({
  value: "",
})

export { TreeView, TreeItem, TreeItemTrigger, TreeItemContent } 