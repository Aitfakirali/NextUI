import { Metadata } from "next"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export const metadata: Metadata = {
  title: "Progress",
  description: "Displays an indicator showing the completion progress of a task.",
}

export default function ProgressDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Progress</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Progress component displays a progress bar to show the completion status of a task.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Progress</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Progress value={60} />
        </div>
        <div className="usage">
          ```tsx
          <Progress value={60} />
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Animated Progress</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <ProgressDemo />
        </div>
        <div className="usage">
          ```tsx
          export function ProgressDemo() {
            const [progress, setProgress] = useState(0)
          
            useEffect(() => {
              const timer = setTimeout(() => {
                setProgress(66)
              }, 500)
              return () => clearTimeout(timer)
            }, [])
          
            return <Progress value={progress} />
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Progress Sizes</h2>
        <div className="preview border rounded-lg p-6 mb-4 space-y-4">
          <div>
            <span className="text-sm text-muted-foreground">Small</span>
            <Progress value={40} className="h-2" />
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Default</span>
            <Progress value={60} className="h-4" />
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Large</span>
            <Progress value={80} className="h-6" />
          </div>
        </div>
        <div className="usage">
          ```tsx
          <Progress value={40} className="h-2" />
          <Progress value={60} className="h-4" />
          <Progress value={80} className="h-6" />
          ```
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border">Prop</th>
                <th className="text-left p-2 border">Type</th>
                <th className="text-left p-2 border">Default</th>
                <th className="text-left p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">value</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">The progress value (0-100)</td>
              </tr>
              <tr>
                <td className="p-2 border">max</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">100</td>
                <td className="p-2 border">The maximum value</td>
              </tr>
              <tr>
                <td className="p-2 border">className</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function ProgressDemo() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} />
} 