"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function ToastPage() {
  const { toast } = useToast()

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Toast</h1>
          <p className="text-xl text-muted-foreground">
            A brief message that appears temporarily at the edge of the screen.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  toast({
                    title: "Success",
                    description: "Your changes have been saved.",
                  })
                }}
              >
                Show Toast
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                onClick={() => {
                  toast({
                    title: "Default Toast",
                    description: "This is a default toast message.",
                  })
                }}
              >
                Default
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Something went wrong.",
                  })
                }}
              >
                Destructive
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    title: "With Action",
                    description: "Click the action button.",
                    action: (
                      <Button variant="outline" size="sm">
                        Undo
                      </Button>
                    ),
                  })
                }}
              >
                With Action
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your changes have been saved.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

// Destructive variant
toast({
  variant: "destructive",
  title: "Error",
  description: "Something went wrong.",
})

// With action
toast({
  title: "With Action",
  description: "Click the action button.",
  action: (
    <Button variant="outline" size="sm">
      Undo
    </Button>
  ),
})`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Toast Function Options</h3>
              <ul>
                <li><code>title</code> - The title of the toast</li>
                <li><code>description</code> - The description of the toast</li>
                <li><code>variant</code> - The variant of the toast ("default" | "destructive")</li>
                <li><code>action</code> - Optional action button component</li>
                <li><code>duration</code> - Duration in milliseconds (default: 5000)</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>ToastProvider Props</h3>
              <ul>
                <li><code>duration</code> - Default duration for all toasts</li>
                <li><code>swipeDirection</code> - Direction to swipe to close ("up" | "right" | "down" | "left")</li>
                <li><code>position</code> - Position of toasts on the screen</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use toasts to show:
                  <ul>
                    <li>Success messages</li>
                    <li>Error notifications</li>
                    <li>Brief status updates</li>
                    <li>Action confirmations</li>
                  </ul>
                </li>
                <li>Best practices:
                  <ul>
                    <li>Keep messages concise and clear</li>
                    <li>Use appropriate variants for different message types</li>
                    <li>Consider adding actions for reversible operations</li>
                    <li>Position toasts consistently in your application</li>
                    <li>Use appropriate duration based on content length</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Ensure sufficient contrast for text</li>
                    <li>Make toasts dismissible</li>
                    <li>Support keyboard navigation</li>
                    <li>Use ARIA roles and labels</li>
                  </ul>
                </li>
                <li>Common patterns:
                  <ul>
                    <li>Form submission feedback</li>
                    <li>API operation results</li>
                    <li>System notifications</li>
                    <li>Undo/redo actions</li>
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