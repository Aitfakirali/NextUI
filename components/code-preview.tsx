"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CodePreviewProps {
  preview: React.ReactNode
  code: string
  className?: string
}

export function CodePreview({ preview, code, className }: CodePreviewProps) {
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">("preview")

  return (
    <div>
      <div className="inline-flex rounded-lg bg-zinc-900 p-1">
        <button
          className={cn(
            "px-4 py-1.5 text-sm font-medium rounded-md transition-colors",
            activeTab === "preview" 
              ? "text-white" 
              : "text-zinc-400 hover:text-zinc-100"
          )}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={cn(
            "px-4 py-1.5 text-sm font-medium rounded-md transition-colors",
            activeTab === "code" 
              ? "text-white" 
              : "text-zinc-400 hover:text-zinc-100"
          )}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>

      <div className={cn("mt-3 rounded-lg border bg-card", className)}>
        <div className="p-4">
          {activeTab === "preview" ? (
            <div className="preview">{preview}</div>
          ) : (
            <pre className="p-4 rounded-lg bg-zinc-900 overflow-x-auto">
              <code className="text-sm text-zinc-100">{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  )
} 