"use client"

import * as React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function AlertPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
          <p className="text-xl text-muted-foreground">
            Displays a callout for user attention, warnings, or errors.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Examples</h2>
            <div className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components and dependencies to your app using the cli.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>

              <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                  Your trial period will end in 7 days.
                </AlertDescription>
              </Alert>

              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Your storage is almost full. Please free up some space.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

// Default Alert
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>

// Destructive Alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Alert</h3>
              <ul>
                <li>
                  <code>variant</code> - The alert style variant
                  <ul>
                    <li><code>"default"</code> - Standard informational alert</li>
                    <li><code>"destructive"</code> - For errors and critical warnings</li>
                    <li><code>"info"</code> - For general information</li>
                    <li><code>"warning"</code> - For warnings and cautions</li>
                  </ul>
                </li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>AlertTitle</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>AlertDescription</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use alerts to communicate important messages to users</li>
                <li>Choose appropriate variants based on the message type:
                  <ul>
                    <li>Default for general information</li>
                    <li>Destructive for errors</li>
                    <li>Info for informational messages</li>
                    <li>Warning for cautionary messages</li>
                  </ul>
                </li>
                <li>Include clear and concise titles</li>
                <li>Provide helpful descriptions when needed</li>
                <li>Use appropriate icons to enhance visual meaning</li>
                <li>Position alerts where they will be noticed but not intrusive</li>
                <li>Consider using animations for alerts that appear dynamically</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 