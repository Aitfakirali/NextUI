"use client"

import * as React from "react"
import { CodePreview } from "@/components/code-preview"
import { Progress } from "@/components/ui/progress"

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Progress</h1>
        <p className="text-xl text-muted-foreground">
          Displays an indicator showing the completion progress of a task.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <CodePreview
            preview={
              <Progress value={progress} className="w-[60%]" />
            }
            code={`const [progress, setProgress] = React.useState(13)

React.useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

<Progress value={progress} className="w-[60%]" />`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Progress States</h2>
          <CodePreview
            preview={
              <div className="w-[60%] space-y-4">
                <Progress value={0} />
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
                <Progress value={100} />
              </div>
            }
            code={`<div className="space-y-4">
  <Progress value={0} />
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Sizes</h2>
          <CodePreview
            preview={
              <div className="w-[60%] space-y-4">
                <Progress value={50} className="h-1" />
                <Progress value={50} className="h-2" />
                <Progress value={50} className="h-3" />
                <Progress value={50} className="h-4" />
              </div>
            }
            code={`<div className="space-y-4">
  <Progress value={50} className="h-1" />
  <Progress value={50} className="h-2" />
  <Progress value={50} className="h-3" />
  <Progress value={50} className="h-4" />
</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Labels</h2>
          <CodePreview
            preview={
              <div className="w-[60%] space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
              </div>
            }
            code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Processing...</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} />
</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <div className="rounded-lg border">
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="font-semibold">Prop</div>
                <div className="font-semibold">Type</div>
                <div className="font-semibold">Default</div>
                <div className="font-semibold">Description</div>
                
                <div className="font-mono">value</div>
                <div>number</div>
                <div>0</div>
                <div>The progress value between 0 and 100.</div>
                
                <div className="font-mono">className</div>
                <div>string</div>
                <div>undefined</div>
                <div>Additional CSS classes to style the progress bar.</div>
                
                <div className="font-mono">max</div>
                <div>number</div>
                <div>100</div>
                <div>The maximum value of the progress bar.</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Progress indicators should be used to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Show loading states for data or content</li>
              <li>Indicate the progress of a task or operation</li>
              <li>Display completion percentage of a form or process</li>
              <li>Show progress in file uploads or downloads</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
} 