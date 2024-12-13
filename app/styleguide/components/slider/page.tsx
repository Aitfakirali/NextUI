"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function SliderPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Slider</h1>
          <p className="text-xl text-muted-foreground">
            An input component that allows users to select a value from a range.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="w-[60%]">
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Range Selection</h2>
            <div className="w-[60%]">
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Steps</h2>
            <div className="w-[60%]">
              <Slider defaultValue={[0]} max={5} step={1} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled State</h2>
            <div className="w-[60%]">
              <Slider defaultValue={[50]} max={100} step={1} disabled />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Slider } from "@/components/ui/slider"

// Basic slider
<Slider defaultValue={[50]} max={100} step={1} />

// Range slider
<Slider defaultValue={[25, 75]} max={100} step={1} />

// With steps
<Slider defaultValue={[0]} max={5} step={1} />

// Disabled state
<Slider defaultValue={[50]} max={100} step={1} disabled />`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>defaultValue</code> - The default value(s) of the slider</li>
                <li><code>value</code> - The controlled value(s) of the slider</li>
                <li><code>onValueChange</code> - Event handler called when the value changes</li>
                <li><code>min</code> - The minimum value of the slider</li>
                <li><code>max</code> - The maximum value of the slider</li>
                <li><code>step</code> - The stepping interval</li>
                <li><code>orientation</code> - The orientation of the slider ("horizontal" | "vertical")</li>
                <li><code>disabled</code> - When true, prevents user interaction</li>
                <li><code>name</code> - The name of the slider</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use sliders for selecting values from a continuous range</li>
                <li>Consider the following use cases:
                  <ul>
                    <li>Volume controls</li>
                    <li>Price range selection</li>
                    <li>Image filters</li>
                    <li>Rating inputs</li>
                  </ul>
                </li>
                <li>Choose appropriate step values:
                  <ul>
                    <li>Continuous for fine-grained control</li>
                    <li>Stepped for discrete values</li>
                  </ul>
                </li>
                <li>Consider the following best practices:
                  <ul>
                    <li>Show current value when relevant</li>
                    <li>Use appropriate track length</li>
                    <li>Consider touch targets for mobile</li>
                    <li>Provide visual feedback on interaction</li>
                    <li>Support keyboard navigation</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Ensure keyboard navigation</li>
                    <li>Provide ARIA labels</li>
                    <li>Support screen readers</li>
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