"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
          <p className="text-xl text-muted-foreground">
            Displays a small badge or label to highlight status, count, or category.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="text-xs">Small</Badge>
              <Badge>Default</Badge>
              <Badge className="text-lg">Large</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Icons</h2>
            <div className="flex flex-wrap gap-4">
              <Badge>
                <span className="mr-1">●</span> Online
              </Badge>
              <Badge variant="secondary">
                <span className="mr-1">⭐</span> Featured
              </Badge>
              <Badge variant="outline">
                <span className="mr-1">⚡</span> Premium
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Badge } from "@/components/ui/badge"

// Basic badge
<Badge>Default</Badge>

// Variants
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

// With icon
<Badge>
  <span className="mr-1">●</span> Online
</Badge>

// Custom size
<Badge className="text-lg">Large</Badge>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>
                  <code>variant</code> - Badge style variant
                  <ul>
                    <li><code>"default"</code> - Primary colored badge</li>
                    <li><code>"secondary"</code> - Secondary colored badge</li>
                    <li><code>"outline"</code> - Outlined style badge</li>
                    <li><code>"destructive"</code> - Danger/error styled badge</li>
                  </ul>
                </li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use badges to highlight status, categories, or counts</li>
                <li>Keep badge text short and concise</li>
                <li>Use appropriate variants to convey meaning:
                  <ul>
                    <li>Default for general labels</li>
                    <li>Secondary for less emphasis</li>
                    <li>Outline for subtle indicators</li>
                    <li>Destructive for warnings or errors</li>
                  </ul>
                </li>
                <li>Consider using icons to enhance visual meaning</li>
                <li>Maintain consistent spacing when using multiple badges</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 