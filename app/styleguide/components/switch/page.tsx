"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Switch</h1>
          <p className="text-xl text-muted-foreground">
            A toggle switch component for switching between binary states.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Description</h2>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when someone mentions you.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled State</h2>
            <div className="flex items-center space-x-2">
              <Switch id="disabled" disabled />
              <Label htmlFor="disabled" className="opacity-50">
                Disabled Switch
              </Label>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Default Checked</h2>
            <div className="flex items-center space-x-2">
              <Switch id="default-checked" defaultChecked />
              <Label htmlFor="default-checked">Auto-Save</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Basic switch
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>

// With description
<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="notifications">Push Notifications</Label>
    <p className="text-sm text-muted-foreground">
      Receive notifications when someone mentions you.
    </p>
  </div>
</div>

// Disabled state
<div className="flex items-center space-x-2">
  <Switch id="disabled" disabled />
  <Label htmlFor="disabled">Disabled Switch</Label>
</div>

// Default checked
<div className="flex items-center space-x-2">
  <Switch id="default-checked" defaultChecked />
  <Label htmlFor="default-checked">Auto-Save</Label>
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
                <li><code>onCheckedChange</code> - Event handler called when the checked state changes</li>
                <li><code>disabled</code> - When true, prevents user interaction</li>
                <li><code>required</code> - When true, indicates the switch must be checked</li>
                <li><code>name</code> - The name of the switch</li>
                <li><code>value</code> - The value of the switch</li>
                <li><code>id</code> - The id of the switch (for label association)</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use switches for binary (on/off) settings</li>
                <li>Best practices:
                  <ul>
                    <li>Always provide a clear label</li>
                    <li>Use for immediate actions</li>
                    <li>Consider adding descriptions for complex options</li>
                    <li>Use meaningful default states</li>
                    <li>Provide visual feedback on interaction</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Feature toggles</li>
                    <li>Mode switches (e.g., dark/light mode)</li>
                    <li>Notification preferences</li>
                    <li>Privacy settings</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Ensure keyboard navigation</li>
                    <li>Use proper ARIA labels</li>
                    <li>Provide clear focus states</li>
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