"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
          <p className="text-xl text-muted-foreground">
            A control that allows the user to toggle between checked and unchecked states.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Examples</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <label
                  htmlFor="disabled"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Disabled
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="checked" defaultChecked />
                <label
                  htmlFor="checked"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Default checked
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Text</h2>
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Checkbox } from "@/components/ui/checkbox"

// Basic checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">
    Accept terms and conditions
  </label>
</div>

// With description
<div className="items-top flex space-x-2">
  <Checkbox id="terms1" />
  <div className="grid gap-1.5 leading-none">
    <label htmlFor="terms1">
      Accept terms and conditions
    </label>
    <p className="text-sm text-muted-foreground">
      You agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>

// Disabled state
<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <label htmlFor="disabled">Disabled</label>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>checked</code> - The controlled checked state</li>
                <li><code>defaultChecked</code> - The default checked state</li>
                <li><code>onCheckedChange</code> - Event handler for checked state changes</li>
                <li><code>disabled</code> - Whether the checkbox is disabled</li>
                <li><code>required</code> - Whether the checkbox is required</li>
                <li><code>name</code> - The name of the checkbox</li>
                <li><code>value</code> - The value of the checkbox</li>
                <li><code>id</code> - The id of the checkbox (for label association)</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use checkboxes for binary choices or multiple selections</li>
                <li>Always provide a label that clearly describes the choice</li>
                <li>Use disabled state when the option is not available</li>
                <li>Consider using a description for additional context</li>
                <li>Group related checkboxes together</li>
                <li>Ensure proper spacing between checkbox groups</li>
                <li>Make checkboxes large enough to be easily clickable</li>
                <li>Use appropriate contrast for better visibility</li>
                <li>Consider keyboard navigation and focus states</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 