"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import * as Icons from "lucide-react"

const iconCategories = {
  "User Interface": [
    "Home",
    "Search",
    "Menu",
    "Settings",
    "User",
    "Bell",
    "Mail",
    "Calendar",
    "Filter",
    "Plus",
    "Minus",
    "X",
    "Check",
  ],
  "Arrows & Navigation": [
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
    "ChevronUp",
    "ChevronRight",
    "ChevronDown",
    "ChevronLeft",
    "ChevronsUp",
    "ChevronsRight",
    "ChevronsDown",
    "ChevronsLeft",
  ],
  "Files & Folders": [
    "File",
    "FileText",
    "Folder",
    "FolderOpen",
    "Image",
    "Video",
    "Music",
    "Download",
    "Upload",
    "Save",
  ],
  "Communication": [
    "MessageCircle",
    "MessageSquare",
    "Send",
    "Share",
    "Link",
    "Phone",
    "Video",
    "Mic",
  ],
  "Media Controls": [
    "Play",
    "Pause",
    "Stop",
    "SkipBack",
    "SkipForward",
    "Volume",
    "Volume1",
    "Volume2",
    "VolumeX",
  ],
}

function IconGrid({ category, icons }: { category: string; icons: string[] }) {
  const copyToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} />`)
  }

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-2xl font-bold">{category}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {icons.map((iconName) => {
          const Icon = (Icons as any)[iconName]
          if (!Icon) return null

          return (
            <div
              key={iconName}
              className="flex items-center justify-between rounded-lg border bg-card p-4 hover:bg-accent hover:text-accent-foreground"
              onClick={() => copyToClipboard(iconName)}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{iconName}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation()
                  copyToClipboard(iconName)
                }}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default function IconsPage() {
  return (
    <div className="space-y-12">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Icons</h1>
          <p className="text-xl text-muted-foreground">
            A collection of icons powered by Lucide React. Click any icon to copy
            its component code.
          </p>
        </div>
      </AnimatedComponent>

      <div className="space-y-8">
        {Object.entries(iconCategories).map(([category, icons], index) => (
          <AnimatedComponent
            key={category}
            animation="fadeIn"
            delay={index * 0.1}
          >
            <IconGrid category={category} icons={icons} />
          </AnimatedComponent>
        ))}
      </div>

      <AnimatedComponent animation="slideUp" delay={0.4}>
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Usage</h2>
          <div className="prose prose-gray dark:prose-invert">
            <p>
              Our icon system uses Lucide React, which provides a comprehensive set
              of icons that are easy to use and customize.
            </p>
            <h3>Installation</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>npm install lucide-react</code>
            </pre>
            <h3>Basic Usage</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`import { Home, Search, Settings } from 'lucide-react'

// In your component
<Home className="h-6 w-6" />
<Search className="h-6 w-6" />
<Settings className="h-6 w-6" />`}</code>
            </pre>
            <h3>Customization</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`// Size
<Home className="h-4 w-4" /> // Small
<Home className="h-6 w-6" /> // Default
<Home className="h-8 w-8" /> // Large

// Color
<Home className="text-blue-500" />
<Home className="text-primary" />
<Home className="text-muted-foreground" />

// Stroke Width
<Home strokeWidth={1} /> // Thin
<Home strokeWidth={2} /> // Default
<Home strokeWidth={3} /> // Bold`}</code>
            </pre>
          </div>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 