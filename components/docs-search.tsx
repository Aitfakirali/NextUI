"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, Book, Component, Settings } from "lucide-react"
import { 
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { docsConfig } from "@/config/docs"

interface SearchResult {
  type: "doc" | "component" | "guide" | "api"
  title: string
  description?: string
  href: string
  category?: string
}

export function DocsSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

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

  const runSearch = useCallback((search: string) => {
    if (!search) {
      setSearchResults([])
      return
    }

    // Flatten and categorize the navigation items for searching
    const items = docsConfig.sidebarNav.flatMap(category => 
      category.items?.flatMap(section => {
        if (section.items) {
          return section.items.map(item => ({
            ...item,
            type: section.title?.toLowerCase().includes("component") ? "component" : "doc",
            category: section.title
          }))
        }
        return {
          ...section,
          type: "guide" as const,
          category: category.title
        }
      }) ?? []
    )

    // Enhanced search implementation
    const results = items.filter(item => 
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()) ||
      item.category?.toLowerCase().includes(search.toLowerCase())
    )

    setSearchResults(results)
  }, [])

  const getIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "component":
        return <Component className="h-4 w-4" />
      case "doc":
        return <FileText className="h-4 w-4" />
      case "guide":
        return <Book className="h-4 w-4" />
      case "api":
        return <Settings className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-64 lg:w-96"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type to search..."
          onValueChange={runSearch}
        />
        <CommandList>
          <CommandEmpty>
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <FileText className="h-10 w-10 text-muted-foreground/50" />
              <p className="mt-2 text-sm text-muted-foreground">
                No results found.
              </p>
            </div>
          </CommandEmpty>
          {searchResults.length > 0 && (
            <>
              <CommandGroup heading="Components">
                {searchResults
                  .filter(result => result.type === "component")
                  .map((result) => (
                    <CommandItem
                      key={result.href}
                      onSelect={() => {
                        router.push(result.href!)
                        setOpen(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2"
                    >
                      {getIcon(result.type)}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{result.title}</span>
                        {result.description && (
                          <span className="text-xs text-muted-foreground">
                            {result.description}
                          </span>
                        )}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Documentation">
                {searchResults
                  .filter(result => result.type === "doc" || result.type === "guide")
                  .map((result) => (
                    <CommandItem
                      key={result.href}
                      onSelect={() => {
                        router.push(result.href!)
                        setOpen(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2"
                    >
                      {getIcon(result.type)}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{result.title}</span>
                        {result.description && (
                          <span className="text-xs text-muted-foreground">
                            {result.description}
                          </span>
                        )}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
} 