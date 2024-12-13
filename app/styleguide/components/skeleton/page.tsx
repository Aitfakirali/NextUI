"use client"

import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function SkeletonPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Skeleton</h1>
          <p className="text-xl text-muted-foreground">
            Use to show a loading state while content is being fetched.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Card Example</h2>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Complex Example</h2>
            <div className="space-y-8">
              {/* Article skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-6 w-2/3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[80%]" />
                </div>
              </div>

              {/* Profile skeleton */}
              <div className="flex items-start space-x-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-3 flex-1">
                  <Skeleton className="h-5 w-[30%]" />
                  <Skeleton className="h-4 w-[60%]" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-[95%]" />
                    <Skeleton className="h-3 w-[90%]" />
                  </div>
                </div>
              </div>

              {/* Grid skeleton */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Skeleton } from "@/components/ui/skeleton"

// Basic skeleton
<Skeleton className="h-4 w-[250px]" />

// Card skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>

// Complex article skeleton
<div className="space-y-4">
  <Skeleton className="h-6 w-2/3" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-[90%]" />
    <Skeleton className="h-4 w-[80%]" />
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Skeleton</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes for styling</li>
                <li><code>...props</code> - All HTML div element props are supported</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Match skeleton dimensions to actual content</li>
                    <li>Use appropriate spacing and layout</li>
                    <li>Keep animations subtle</li>
                    <li>Maintain visual hierarchy</li>
                    <li>Consider loading states</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Content loading states</li>
                    <li>Data fetching</li>
                    <li>Image placeholders</li>
                    <li>List items</li>
                    <li>Card layouts</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Use ARIA live regions</li>
                    <li>Provide loading indicators</li>
                    <li>Consider reduced motion</li>
                    <li>Screen reader support</li>
                    <li>Loading state announcements</li>
                  </ul>
                </li>
                <li>Performance:
                  <ul>
                    <li>Optimize animations</li>
                    <li>Minimize reflows</li>
                    <li>Use CSS transforms</li>
                    <li>Consider bundle size</li>
                    <li>Lazy loading</li>
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