"use client"

import * as React from "react"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  ListTodo,
} from "lucide-react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function ToggleGroupPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Toggle Group</h1>
          <p className="text-xl text-muted-foreground">
            A set of two-state buttons that can be toggled on or off.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Text Formatting Example</h2>
            <ToggleGroup type="multiple" variant="outline">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Text Alignment Example</h2>
            <ToggleGroup type="single" defaultValue="left" variant="outline">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Align justify">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">List Type Example</h2>
            <ToggleGroup type="single" defaultValue="bullet" variant="outline">
              <ToggleGroupItem value="bullet" aria-label="Bullet list">
                <List className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="number" aria-label="Numbered list">
                <ListOrdered className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="todo" aria-label="Todo list">
                <ListTodo className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Text Labels</h2>
            <ToggleGroup type="single" defaultValue="list" variant="outline">
              <ToggleGroupItem value="list" aria-label="List view">
                <List className="mr-2 h-4 w-4" />
                List
              </ToggleGroupItem>
              <ToggleGroupItem value="board" aria-label="Board view">
                <ListOrdered className="mr-2 h-4 w-4" />
                Board
              </ToggleGroupItem>
              <ToggleGroupItem value="calendar" aria-label="Calendar view">
                <ListTodo className="mr-2 h-4 w-4" />
                Calendar
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

// Multiple selection
<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>

// Single selection
<ToggleGroup type="single" defaultValue="list" variant="outline">
  <ToggleGroupItem value="list" aria-label="List view">
    <List className="mr-2 h-4 w-4" />
    List
  </ToggleGroupItem>
  <ToggleGroupItem value="board" aria-label="Board view">
    <ListOrdered className="mr-2 h-4 w-4" />
    Board
  </ToggleGroupItem>
</ToggleGroup>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>ToggleGroup</h3>
              <ul>
                <li><code>type</code> - The type of selection ("single" | "multiple")</li>
                <li><code>defaultValue</code> - The value of the item to select by default</li>
                <li><code>value</code> - The controlled value of the item to select</li>
                <li><code>onValueChange</code> - Event handler called when the value changes</li>
                <li><code>disabled</code> - When true, prevents the user from interacting with the toggle group</li>
              </ul>

              <h3>ToggleGroupItem</h3>
              <ul>
                <li><code>value</code> - A unique value for the item</li>
                <li><code>disabled</code> - When true, prevents the user from interacting with the item</li>
                <li><code>aria-label</code> - The accessible label for the item</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Use clear icons or labels</li>
                    <li>Group related options</li>
                    <li>Consider selection type</li>
                    <li>Provide visual feedback</li>
                    <li>Maintain consistent styling</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Text formatting</li>
                    <li>View switching</li>
                    <li>Filter controls</li>
                    <li>Option selection</li>
                    <li>Tool palettes</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>ARIA labels</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>Clear visual states</li>
                  </ul>
                </li>
                <li>Responsive design:
                  <ul>
                    <li>Mobile-friendly sizing</li>
                    <li>Touch targets</li>
                    <li>Viewport handling</li>
                    <li>Breakpoint adaptation</li>
                    <li>Layout flexibility</li>
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