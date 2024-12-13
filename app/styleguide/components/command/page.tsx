"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function CommandPage() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
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
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Command</h1>
          <p className="text-xl text-muted-foreground">
            A command palette for quick keyboard-driven navigation and actions.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Dialog Example</h2>
            <p className="text-sm text-muted-foreground">
              Press <kbd className="rounded-md border px-2 py-1">⌘K</kbd> to open the command menu
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>View Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Edit Profile</span>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Open Settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

// Basic command palette
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// Command dialog with keyboard shortcut
const [open, setOpen] = React.useState(false)

React.useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>View Calendar</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Command</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>children</code> - Command components to render</li>
              </ul>

              <h3>CommandDialog</h3>
              <ul>
                <li><code>open</code> - Controls the open state</li>
                <li><code>onOpenChange</code> - Called when open state changes</li>
              </ul>

              <h3>CommandInput</h3>
              <ul>
                <li><code>placeholder</code> - Input placeholder text</li>
                <li><code>value</code> - Controlled input value</li>
                <li><code>onValueChange</code> - Called when value changes</li>
              </ul>

              <h3>CommandItem</h3>
              <ul>
                <li><code>value</code> - Value used for filtering</li>
                <li><code>onSelect</code> - Called when item is selected</li>
                <li><code>disabled</code> - Whether the item is disabled</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Use clear and descriptive labels</li>
                    <li>Group related commands</li>
                    <li>Provide keyboard shortcuts</li>
                    <li>Include search functionality</li>
                    <li>Show empty states</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Application navigation</li>
                    <li>Quick actions</li>
                    <li>Search interfaces</li>
                    <li>Settings access</li>
                    <li>Feature discovery</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>ARIA labels</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>Clear feedback</li>
                  </ul>
                </li>
                <li>Performance:
                  <ul>
                    <li>Efficient filtering</li>
                    <li>Debounced search</li>
                    <li>Lazy loading</li>
                    <li>Optimized rendering</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 