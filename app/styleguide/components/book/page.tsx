"use client"

import * as React from "react"
import { Book } from "@/components/ui/book"
import { AnimatedComponent } from "@/components/ui/animated-component"

const demoPages = [
  {
    title: "Introduction",
    content: (
      <div className="prose prose-gray dark:prose-invert">
        <h1>Welcome to the Book Component</h1>
        <p>
          This is a demonstration of the Book component, which allows you to create
          paginated content with a beautiful interface. Perfect for tutorials,
          stories, or any content that needs to be broken down into digestible
          chunks.
        </p>
      </div>
    ),
  },
  {
    title: "Features",
    content: (
      <div className="prose prose-gray dark:prose-invert">
        <h2>Key Features</h2>
        <ul>
          <li>Smooth page transitions</li>
          <li>Page tracking and navigation</li>
          <li>Customizable content</li>
          <li>Responsive design</li>
          <li>Keyboard navigation support</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Usage Example",
    content: (
      <div className="prose prose-gray dark:prose-invert">
        <h2>How to Use</h2>
        <pre className="rounded-lg bg-muted p-4">
          <code>{`import { Book } from "@/components/ui/book"

const pages = [
  { title: "Page 1", content: <div>Content 1</div> },
  { title: "Page 2", content: <div>Content 2</div> },
]

export default function Demo() {
  return <Book pages={pages} />
}`}</code>
        </pre>
      </div>
    ),
  },
]

export default function BookPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Book</h1>
          <p className="text-lg text-muted-foreground">
            A paginated content display component with navigation controls.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Example</h2>
            <Book pages={demoPages} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Book } from "@/components/ui/book"

const pages = [
  {
    title: "Introduction",
    content: <div>Welcome to the Book component...</div>,
  },
  {
    title: "Features",
    content: <div>Key features of the component...</div>,
  },
  {
    title: "Usage",
    content: <div>How to use the component...</div>,
  },
]

export default function Demo() {
  return <Book pages={pages} />
}`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>
                  <code>pages</code> - Array of page objects with title and content
                </li>
                <li>
                  <code>defaultValue</code> - Initial page index (optional)
                </li>
                <li>
                  <code>onPageChange</code> - Callback function when page changes
                  (optional)
                </li>
                <li>
                  <code>className</code> - Additional CSS classes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 