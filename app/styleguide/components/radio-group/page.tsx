"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function RadioGroupPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Radio Group</h1>
          <p className="text-xl text-muted-foreground">
            A set of checkable buttons where only one can be checked at a time.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Option Three</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Descriptions</h2>
            <RadioGroup defaultValue="default">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="default" id="plan-default" />
                <div>
                  <Label className="font-normal" htmlFor="plan-default">
                    <span className="font-semibold">Free Plan</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Perfect for trying out our features
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="pro" id="plan-pro" />
                <div>
                  <Label className="font-normal" htmlFor="plan-pro">
                    <span className="font-semibold">Pro Plan</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    For professional developers and teams
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled State</h2>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="disabled-one" disabled />
                <Label htmlFor="disabled-one" className="opacity-50">Disabled Option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="disabled-two" />
                <Label htmlFor="disabled-two">Available Option</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Basic usage
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>

// With descriptions
<RadioGroup defaultValue="default">
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="default" id="plan-default" />
    <div>
      <Label className="font-normal" htmlFor="plan-default">
        <span className="font-semibold">Free Plan</span>
      </Label>
      <p className="text-sm text-muted-foreground">
        Perfect for trying out our features
      </p>
    </div>
  </div>
</RadioGroup>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>RadioGroup</h3>
              <ul>
                <li><code>value</code> - The controlled value of the radio group</li>
                <li><code>defaultValue</code> - The default value of the radio group</li>
                <li><code>onValueChange</code> - Event handler called when the value changes</li>
                <li><code>disabled</code> - When true, prevents user interaction</li>
                <li><code>name</code> - The name of the radio group</li>
                <li><code>required</code> - When true, indicates the user must select an option</li>
              </ul>

              <h3>RadioGroupItem</h3>
              <ul>
                <li><code>value</code> - The value of the radio item</li>
                <li><code>disabled</code> - When true, prevents user interaction</li>
                <li><code>required</code> - When true, indicates the user must select this option</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use radio groups when users need to select one option from a list</li>
                <li>Always provide clear labels for each option</li>
                <li>Consider adding descriptions for complex options</li>
                <li>Group related options together</li>
                <li>Use appropriate spacing between options</li>
                <li>Ensure proper keyboard navigation</li>
                <li>Consider the following patterns:
                  <ul>
                    <li>Simple options with single-line labels</li>
                    <li>Rich options with descriptions</li>
                    <li>Options with additional visual elements</li>
                  </ul>
                </li>
                <li>Use disabled state for unavailable options</li>
                <li>Consider default selection when appropriate</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 