"use client"

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

// Simplified and flattened navigation items for better search
const searchableItems = [
  {
    section: "Getting Started",
    items: [
      { title: "Home", href: "/" },
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
    ]
  },
  {
    section: "Components",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Alert", href: "/components/alerts" },
      { title: "Animation", href: "/components/animation" },
      { title: "Badge", href: "/components/badges" },
      { title: "Button", href: "/components/buttons" },
      { title: "Card", href: "/components/card" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Command", href: "/components/command" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Hover Card", href: "/components/hover-card" },
      { title: "Input", href: "/components/input" },
      { title: "Navigation Menu", href: "/components/navigation-menu" },
      { title: "Progress", href: "/components/progress" },
      { title: "Select", href: "/components/select" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Slider", href: "/components/slider" },
      { title: "Switch", href: "/components/switch" },
      { title: "Table", href: "/components/table" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Toast", href: "/components/toast" },
    ]
  },
  {
    section: "Theming",
    items: [
      { title: "Colors", href: "/theming/colors" },
      { title: "Typography", href: "/theming/typography" },
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="w-64 flex-shrink-0">
      {/* Fixed header */}
      <div className="fixed top-0 z-20 w-64 border-r bg-background">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <svg 
              className="h-8 w-8 text-red-500" 
              viewBox="0 0 1024 1024" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fill="currentColor"
                d="M896 128v768H128V128h768zM192 192v640h640V192H192z m544 448v64h-192v-64h192z m-381.44-310.624L537.12 512l-182.624 182.624-45.248-45.248L446.656 512l-137.376-137.376 45.248-45.248z" 
              />
            </svg>
            <span className="text-2xl font-bold">NexUI</span>
          </div>
          <ThemeToggle />
        </div>

        {/* Search */}
        <div className="px-6 pb-4">
          <Button
            variant="outline"
            className="relative w-full justify-start text-sm text-muted-foreground"
            onClick={() => setOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            Search components...
            <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">{navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</span>K
            </kbd>
          </Button>
        </div>
      </div>

      {/* Scrollable navigation */}
      <div className="fixed top-[144px] bottom-0 w-64 overflow-y-auto border-r bg-background">
        <nav className="space-y-8 p-6">
          {searchableItems.map((section) => (
            <div key={section.section}>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {section.section}
              </h2>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-2 py-1 text-sm rounded-md transition-colors",
                      pathname === item.href
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchableItems.map((section) => (
            <CommandGroup key={section.section} heading={section.section}>
              {section.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => {
                    router.push(item.href)
                    setOpen(false)
                  }}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
} 