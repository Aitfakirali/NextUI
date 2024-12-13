"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
          <p className="text-xl text-muted-foreground">
            Displays a form textarea or a component that looks like a textarea.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Textarea placeholder="Type your message here." />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Label</h2>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled State</h2>
            <Textarea placeholder="This textarea is disabled." disabled />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Button</h2>
            <div className="grid w-full gap-2">
              <Textarea placeholder="Type your message here." />
              <Button>Send message</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Character Count</h2>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-with-count">Your message</Label>
              <div className="relative">
                <Textarea
                  placeholder="Type your message here."
                  id="message-with-count"
                  maxLength={100}
                  className="pr-12"
                />
                <div className="absolute bottom-2 right-2 text-sm text-muted-foreground">
                  0/100
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Basic textarea
<Textarea placeholder="Type your message here." />

// With label
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>

// Disabled state
<Textarea placeholder="This textarea is disabled." disabled />

// With character count
<div className="relative">
  <Textarea
    placeholder="Type your message here."
    maxLength={100}
    className="pr-12"
  />
  <div className="absolute bottom-2 right-2 text-sm text-muted-foreground">
    0/100
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Textarea</h3>
              <ul>
                <li><code>placeholder</code> - The placeholder text</li>
                <li><code>disabled</code> - Whether the textarea is disabled</li>
                <li><code>maxLength</code> - Maximum number of characters allowed</li>
                <li><code>rows</code> - Number of visible text lines</li>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>...props</code> - All HTML textarea element props are supported</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Use clear placeholder text</li>
                    <li>Provide appropriate sizing</li>
                    <li>Consider character limits</li>
                    <li>Show validation states</li>
                    <li>Handle overflow gracefully</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Comment sections</li>
                    <li>Message composition</li>
                    <li>Bio/description fields</li>
                    <li>Feedback forms</li>
                    <li>Code input</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Label association</li>
                    <li>Error messages</li>
                    <li>Keyboard navigation</li>
                    <li>Screen reader support</li>
                    <li>Focus management</li>
                  </ul>
                </li>
                <li>Responsive design:
                  <ul>
                    <li>Flexible width</li>
                    <li>Mobile optimization</li>
                    <li>Touch targets</li>
                    <li>Viewport handling</li>
                    <li>Resize behavior</li>
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