"use client"

import * as React from "react"
import { ColorPicker } from "@/components/ui/color-picker"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Label } from "@/components/ui/label"

export default function ColorPickerPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Color Picker</h1>
          <p className="text-xl text-muted-foreground">
            A color input component with a color wheel and RGB/HSL inputs.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <ColorPicker />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Label</h2>
            <div className="space-y-2">
              <Label>Brand color</Label>
              <ColorPicker />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Default Value</h2>
            <ColorPicker color="#6366F1" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Event Handler</h2>
            <ColorPicker
              onColorChange={(color) => {
                console.log("Selected color:", color)
              }}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { ColorPicker } from "@/components/ui/color-picker"
import { Label } from "@/components/ui/label"

// Basic color picker
<ColorPicker />

// With label
<div className="space-y-2">
  <Label>Brand color</Label>
  <ColorPicker />
</div>

// With default value
<ColorPicker color="#6366F1" />

// With onChange handler
<ColorPicker
  onColorChange={(color) => {
    console.log("Selected color:", color)
  }}
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>ColorPicker</h3>
              <ul>
                <li><code>color</code> - The default color value in hex format</li>
                <li><code>onColorChange</code> - Callback function when color changes</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Color selection:
                  <ul>
                    <li>Color wheel</li>
                    <li>Hex input</li>
                    <li>RGB values</li>
                    <li>HSL values</li>
                    <li>Eye dropper tool</li>
                  </ul>
                </li>
                <li>Interactions:
                  <ul>
                    <li>Click to open</li>
                    <li>Copy to clipboard</li>
                    <li>Color preview</li>
                    <li>Real-time updates</li>
                    <li>Format conversion</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>ARIA labels</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>High contrast mode</li>
                  </ul>
                </li>
                <li>Best practices:
                  <ul>
                    <li>Color validation</li>
                    <li>Format handling</li>
                    <li>Error prevention</li>
                    <li>Performance optimization</li>
                    <li>Browser compatibility</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Common use cases:
                  <ul>
                    <li>Theme customization</li>
                    <li>Brand color selection</li>
                    <li>Design tools</li>
                    <li>Style editors</li>
                    <li>Color palettes</li>
                  </ul>
                </li>
                <li>Implementation tips:
                  <ul>
                    <li>Provide clear labels</li>
                    <li>Show color preview</li>
                    <li>Support multiple formats</li>
                    <li>Include validation</li>
                    <li>Handle edge cases</li>
                  </ul>
                </li>
                <li>Considerations:
                  <ul>
                    <li>Color spaces</li>
                    <li>Browser support</li>
                    <li>Mobile interaction</li>
                    <li>Performance impact</li>
                    <li>Accessibility needs</li>
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