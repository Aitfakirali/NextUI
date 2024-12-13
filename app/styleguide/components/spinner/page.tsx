"use client"

import * as React from "react"
import { Spinner } from "@/components/ui/spinner"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function SpinnerPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Spinner</h1>
          <p className="text-xl text-muted-foreground">
            A loading spinner component for indicating content is being loaded.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Sizes</h2>
            <div className="flex items-center gap-4">
              <Spinner className="h-4 w-4" />
              <Spinner className="h-6 w-6" />
              <Spinner className="h-8 w-8" />
              <Spinner className="h-12 w-12" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Text</h2>
            <div className="flex items-center gap-2">
              <Spinner className="h-4 w-4" />
              <span>Loading...</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Custom Colors</h2>
            <div className="flex items-center gap-4">
              <Spinner className="h-6 w-6 text-primary" />
              <Spinner className="h-6 w-6 text-secondary" />
              <Spinner className="h-6 w-6 text-destructive" />
              <Spinner className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Spinner } from "@/components/ui/spinner"

// Basic spinner
<Spinner />

// Different sizes
<Spinner className="h-4 w-4" />
<Spinner className="h-8 w-8" />
<Spinner className="h-12 w-12" />

// With text
<div className="flex items-center gap-2">
  <Spinner className="h-4 w-4" />
  <span>Loading...</span>
</div>

// Custom colors
<Spinner className="text-primary" />
<Spinner className="text-secondary" />
<Spinner className="text-destructive" />`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>className</code> - Additional CSS classes for customizing size, color, etc.</li>
                <li><code>aria-label</code> - Accessible label for screen readers</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use spinners to indicate:
                  <ul>
                    <li>Content is being loaded</li>
                    <li>A process is in progress</li>
                    <li>An action is being performed</li>
                  </ul>
                </li>
                <li>Best practices:
                  <ul>
                    <li>Use appropriate sizes for the context</li>
                    <li>Consider adding text for clarity</li>
                    <li>Use consistent colors within your application</li>
                    <li>Show spinners only for operations that take longer than ~300ms</li>
                    <li>Consider using skeleton loaders for content</li>
                  </ul>
                </li>
                <li>Common patterns:
                  <ul>
                    <li>Button loading state</li>
                    <li>Page loading indicator</li>
                    <li>Form submission feedback</li>
                    <li>Data fetching indicator</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Include proper ARIA labels</li>
                    <li>Ensure sufficient color contrast</li>
                    <li>Communicate loading state to screen readers</li>
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