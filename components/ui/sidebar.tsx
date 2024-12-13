"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navigation = {
  main: [
    { name: "Introduction", href: "/" },
    { name: "Getting Started", href: "/getting-started" },
    { name: "Installation", href: "/installation" },
    { name: "Theming", href: "/theming" },
    { name: "CLI", href: "/cli" },
    { name: "Typography", href: "/typography" },
  ],
  components: {
    "Data Display": [
      { name: "Avatar", href: "/docs/components/avatar" },
      { name: "Badge", href: "/docs/components/badge" },
      { name: "Card", href: "/docs/components/card" },
      { name: "Table", href: "/docs/components/table" },
      { name: "Timeline", href: "/docs/components/timeline" },
      { name: "Tree View", href: "/docs/components/tree-view" },
      { name: "Skeleton", href: "/docs/components/skeleton" },
    ],
    "Forms": [
      { name: "Button", href: "/docs/components/button" },
      { name: "Checkbox", href: "/docs/components/checkbox" },
      { name: "Color Picker", href: "/docs/components/color-picker" },
      { name: "Date Picker", href: "/docs/components/date-picker" },
      { name: "Form", href: "/docs/components/form" },
      { name: "Input", href: "/docs/components/input" },
      { name: "Label", href: "/docs/components/label" },
      { name: "Multi Select", href: "/docs/components/multi-select" },
      { name: "Radio Group", href: "/docs/components/radio-group" },
      { name: "Rating", href: "/docs/components/rating" },
      { name: "Select", href: "/docs/components/select" },
      { name: "Slider", href: "/docs/components/slider" },
      { name: "Switch", href: "/docs/components/switch" },
      { name: "Tag Input", href: "/docs/components/tag-input" },
      { name: "Textarea", href: "/docs/components/textarea" },
      { name: "Toggle", href: "/docs/components/toggle" },
      { name: "Toggle Group", href: "/docs/components/toggle-group" },
    ],
    "Layout": [
      { name: "Accordion", href: "/docs/components/accordion" },
      { name: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
      { name: "Box", href: "/docs/components/box" },
      { name: "Center", href: "/docs/components/center" },
      { name: "Container", href: "/docs/components/container" },
      { name: "Divider", href: "/docs/components/divider" },
      { name: "Grid", href: "/docs/components/grid" },
      { name: "Stack", href: "/docs/components/stack" },
      { name: "Tabs", href: "/docs/components/tabs" },
    ],
    "Navigation": [
      { name: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { name: "Command", href: "/docs/components/command" },
      { name: "Menubar", href: "/docs/components/menubar" },
      { name: "Navigation Menu", href: "/docs/components/navigation-menu" },
      { name: "Pagination", href: "/docs/components/pagination" },
      { name: "Sheet", href: "/docs/components/sheet" },
      { name: "Sidebar", href: "/docs/components/sidebar" },
      { name: "Steps", href: "/docs/components/steps" },
    ],
    "Feedback": [
      { name: "Alert", href: "/docs/components/alert" },
      { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { name: "Dialog", href: "/docs/components/dialog" },
      { name: "Progress", href: "/docs/components/progress" },
      { name: "Spinner", href: "/docs/components/spinner" },
      { name: "Toast", href: "/docs/components/toast" },
      { name: "Tooltip", href: "/docs/components/tooltip" },
    ],
    "Overlay": [
      { name: "Context Menu", href: "/docs/components/context-menu" },
      { name: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { name: "Hover Card", href: "/docs/components/hover-card" },
      { name: "Popover", href: "/docs/components/popover" },
    ],
    "Media": [
      { name: "Avatar", href: "/docs/components/avatar" },
      { name: "Carousel", href: "/docs/components/carousel" },
      { name: "Image", href: "/docs/components/image" },
      { name: "Video", href: "/docs/components/video" },
    ],
    "Advanced": [
      { name: "Card Gallery", href: "/docs/components/card-gallery" },
      { name: "Collapsible", href: "/docs/components/collapsible" },
      { name: "Portal", href: "/docs/components/portal" },
      { name: "Scroll Area", href: "/docs/components/scroll-area" },
      { name: "Upload", href: "/docs/components/upload" },
    ],
  }
}

function DocsSidebarNav() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
          Getting Started
        </h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 hover:underline",
                pathname === item.href
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
          Components
        </h4>
        {Object.entries(navigation.components).map(([section, items]) => (
          <div key={section} className="pb-4">
            <h5 className="mb-1 rounded-md px-2 py-1 text-sm font-medium text-muted-foreground">
              {section}
            </h5>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex w-full items-center rounded-md p-2 hover:underline",
                    pathname === item.href
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
      <div className="relative overflow-hidden py-6 pr-6 lg:py-8">
        <DocsSidebarNav />
      </div>
    </aside>
  )
} 