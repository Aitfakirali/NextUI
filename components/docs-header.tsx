"use client"

import { MobileNav } from "@/components/mobile-nav"
import { DocsSearch } from "@/components/docs-search"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <MobileNav />
          <a href="/" className="hidden items-center space-x-2 md:flex">
            <span className="hidden font-bold sm:inline-block">
              NexUI
            </span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a
              href="/docs"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Documentation
            </a>
            <a
              href="/components"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </a>
            <a
              href="/themes"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Themes
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 md:flex-none">
            <DocsSearch />
          </div>
          <nav className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              asChild
            >
              <a
                href="https://github.com/yourusername/nexui"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 