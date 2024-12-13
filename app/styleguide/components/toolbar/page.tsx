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
  Link,
  Image,
  Code,
} from "lucide-react"
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarLink,
} from "@/components/ui/toolbar"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function ToolbarPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Toolbar</h1>
          <p className="text-xl text-muted-foreground">
            A container for grouping a set of controls, such as buttons or checkboxes.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Text Editor Example</h2>
            <Toolbar aria-label="Text formatting">
              <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
                <ToolbarToggleItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
              <ToolbarSeparator />
              <ToolbarToggleGroup
                type="single"
                defaultValue="left"
                aria-label="Text alignment"
              >
                <ToolbarToggleItem value="left" aria-label="Align left">
                  <AlignLeft className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="center" aria-label="Align center">
                  <AlignCenter className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="right" aria-label="Align right">
                  <AlignRight className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="justify" aria-label="Align justify">
                  <AlignJustify className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
              <ToolbarSeparator />
              <ToolbarButton aria-label="Insert link">
                <Link className="h-4 w-4" />
              </ToolbarButton>
              <ToolbarButton aria-label="Insert image">
                <Image className="h-4 w-4" />
              </ToolbarButton>
              <ToolbarButton aria-label="Insert code">
                <Code className="h-4 w-4" />
              </ToolbarButton>
            </Toolbar>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Links Example</h2>
            <Toolbar aria-label="Navigation toolbar">
              <ToolbarLink href="#" className="px-2 py-1">
                Home
              </ToolbarLink>
              <ToolbarLink href="#" className="px-2 py-1">
                About
              </ToolbarLink>
              <ToolbarLink href="#" className="px-2 py-1">
                Blog
              </ToolbarLink>
              <ToolbarLink href="#" className="px-2 py-1">
                Contact
              </ToolbarLink>
            </Toolbar>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarLink,
} from "@/components/ui/toolbar"
import { Bold, Italic, Underline } from "lucide-react"

// Text editor toolbar
<Toolbar aria-label="Text formatting">
  <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
    <ToolbarToggleItem value="bold" aria-label="Bold">
      <Bold className="h-4 w-4" />
    </ToolbarToggleItem>
    <ToolbarToggleItem value="italic" aria-label="Italic">
      <Italic className="h-4 w-4" />
    </ToolbarToggleItem>
    <ToolbarToggleItem value="underline" aria-label="Underline">
      <Underline className="h-4 w-4" />
    </ToolbarToggleItem>
  </ToolbarToggleGroup>
  <ToolbarSeparator />
  <ToolbarButton aria-label="Insert link">
    <Link className="h-4 w-4" />
  </ToolbarButton>
</Toolbar>

// Navigation toolbar
<Toolbar aria-label="Navigation toolbar">
  <ToolbarLink href="#" className="px-2 py-1">
    Home
  </ToolbarLink>
  <ToolbarLink href="#" className="px-2 py-1">
    About
  </ToolbarLink>
</Toolbar>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Toolbar</h3>
              <ul>
                <li><code>aria-label</code> - The accessible label for the toolbar</li>
                <li><code>orientation</code> - The orientation of the toolbar ("horizontal" | "vertical")</li>
                <li><code>dir</code> - The reading direction of the toolbar ("ltr" | "rtl")</li>
                <li><code>loop</code> - Whether keyboard navigation should loop from last item to first, and vice versa</li>
              </ul>

              <h3>ToolbarToggleGroup</h3>
              <ul>
                <li><code>type</code> - The type of selection ("single" | "multiple")</li>
                <li><code>defaultValue</code> - The value of the items to select by default</li>
                <li><code>value</code> - The controlled value of the items to select</li>
                <li><code>onValueChange</code> - Event handler called when the value changes</li>
              </ul>

              <h3>ToolbarToggleItem</h3>
              <ul>
                <li><code>value</code> - A unique value for the item</li>
                <li><code>disabled</code> - When true, prevents the user from interacting with the item</li>
                <li><code>aria-label</code> - The accessible label for the item</li>
              </ul>

              <h3>ToolbarButton</h3>
              <ul>
                <li><code>disabled</code> - When true, prevents the user from interacting with the button</li>
                <li><code>aria-label</code> - The accessible label for the button</li>
              </ul>

              <h3>ToolbarLink</h3>
              <ul>
                <li><code>href</code> - The URL that the link points to</li>
                <li><code>disabled</code> - When true, prevents the user from interacting with the link</li>
                <li><code>aria-label</code> - The accessible label for the link</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Group related controls</li>
                    <li>Use clear icons or labels</li>
                    <li>Maintain consistent spacing</li>
                    <li>Consider keyboard navigation</li>
                    <li>Provide visual feedback</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Text editors</li>
                    <li>Drawing tools</li>
                    <li>Media controls</li>
                    <li>Navigation bars</li>
                    <li>Filter controls</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>ARIA labels</li>
                    <li>Keyboard navigation</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>Clear visual states</li>
                  </ul>
                </li>
                <li>Responsive design:
                  <ul>
                    <li>Mobile-friendly layout</li>
                    <li>Touch targets</li>
                    <li>Overflow handling</li>
                    <li>Breakpoint adaptation</li>
                    <li>Orientation support</li>
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