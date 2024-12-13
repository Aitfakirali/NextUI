"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Progress</h1>
          <p className="text-xl text-muted-foreground">
            Displays an indicator showing the completion progress of a task.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Progress value={33} className="w-[60%]" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Animated Progress</h2>
            <Progress value={progress} className="w-[60%]" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Indeterminate</h2>
            <Progress className="w-[60%]" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Progress } from "@/components/ui/progress"

// Basic progress
<Progress value={33} />

// Animated progress
const [progress, setProgress] = React.useState(13)

React.useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

<Progress value={progress} />

// Indeterminate progress
<Progress />`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>value</code> - The progress value (0-100)</li>
                <li><code>max</code> - The maximum value (default: 100)</li>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>asChild</code> - Change the underlying element</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use progress indicators to show:
                  <ul>
                    <li>File upload progress</li>
                    <li>Form completion status</li>
                    <li>Step progress in multi-step flows</li>
                    <li>Loading states</li>
                  </ul>
                </li>
                <li>Best practices:
                  <ul>
                    <li>Show determinate progress when the completion time is known</li>
                    <li>Use indeterminate progress for unknown completion times</li>
                    <li>Consider adding labels or percentages for clarity</li>
                    <li>Use appropriate width for the context</li>
                    <li>Provide smooth animations for value changes</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Include ARIA labels</li>
                    <li>Ensure proper role attributes</li>
                    <li>Communicate progress to screen readers</li>
                  </ul>
                </li>
                <li>Common patterns:
                  <ul>
                    <li>Linear progress bars</li>
                    <li>Progress with percentage</li>
                    <li>Progress with labels</li>
                    <li>Animated progress</li>
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