"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Bell } from "lucide-react"

export default function TogglePage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Toggle</h1>
          <p className="text-xl text-muted-foreground">
            A two-state button that can be either on or off.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Examples</h2>
            <div className="flex flex-wrap gap-4">
              <Toggle>
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle>
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle>
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Text</h2>
            <div className="flex flex-wrap gap-4">
              <Toggle>
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Toggle>
              <Toggle>
                <Bold className="mr-2 h-4 w-4" />
                Bold
              </Toggle>
              <Toggle>
                <Italic className="mr-2 h-4 w-4" />
                Italic
              </Toggle>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Toggle variant="default">
                <Bold className="mr-2 h-4 w-4" />
                Default
              </Toggle>
              <Toggle variant="outline">
                <Italic className="mr-2 h-4 w-4" />
                Outline
              </Toggle>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Sizes</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Toggle size="sm">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="default">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled</h2>
            <div className="flex flex-wrap gap-4">
              <Toggle disabled>
                <Bold className="mr-2 h-4 w-4" />
                Disabled
              </Toggle>
              <Toggle disabled pressed>
                <Italic className="mr-2 h-4 w-4" />
                Disabled Pressed
              </Toggle>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Toggle Group Example</h2>
            <div className="flex flex-wrap gap-2 rounded-lg border p-1">
              <Toggle aria-label="Toggle left align">
                <AlignLeft className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle center align">
                <AlignCenter className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle right align">
                <AlignRight className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

// Basic toggle
<Toggle>
  <Bold className="h-4 w-4" />
</Toggle>

// Toggle with text
<Toggle>
  <Bold className="mr-2 h-4 w-4" />
  Bold
</Toggle>

// Toggle variants
<Toggle variant="default">Default</Toggle>
<Toggle variant="outline">Outline</Toggle>

// Toggle sizes
<Toggle size="sm">Small</Toggle>
<Toggle size="default">Default</Toggle>
<Toggle size="lg">Large</Toggle>

// Disabled toggle
<Toggle disabled>
  <Bold className="mr-2 h-4 w-4" />
  Disabled
</Toggle>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>pressed</code> - The controlled pressed state of the toggle</li>
                <li><code>defaultPressed</code> - The default pressed state when initially rendered</li>
                <li><code>onPressedChange</code> - Event handler called when the pressed state changes</li>
                <li><code>disabled</code> - When true, prevents the user from interacting with the toggle</li>
                <li><code>variant</code> - Visual variant (default, outline)</li>
                <li><code>size</code> - Size variant (sm, default, lg)</li>
                <li><code>asChild</code> - Change the default rendered element for the one passed as a child</li>
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
                    <li>Provide immediate visual feedback</li>
                    <li>Keep toggles consistent</li>
                    <li>Group related toggles</li>
                    <li>Use appropriate sizing</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Text formatting controls</li>
                    <li>Feature toggles</li>
                    <li>View options</li>
                    <li>Toolbar buttons</li>
                    <li>Filter controls</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Include ARIA labels</li>
                    <li>Support keyboard navigation</li>
                    <li>Provide clear focus states</li>
                    <li>Maintain sufficient contrast</li>
                  </ul>
                </li>
                <li>States:
                  <ul>
                    <li>Default (unpressed)</li>
                    <li>Pressed</li>
                    <li>Hover</li>
                    <li>Focus</li>
                    <li>Disabled</li>
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