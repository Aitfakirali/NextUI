import { Metadata } from "next"
import { Timeline } from "@/components/ui/timeline"
import { Circle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Timeline",
  description: "A vertical timeline component for displaying chronological events or steps.",
}

const sampleEvents = [
  {
    id: "1",
    title: "Project Started",
    description: "Initial project setup and planning",
    date: "2023-01-01",
    icon: <Circle className="h-4 w-4" />,
    status: "completed",
  },
  {
    id: "2",
    title: "Design Phase",
    description: "UI/UX design and prototyping",
    date: "2023-02-15",
    icon: <Circle className="h-4 w-4" />,
    status: "completed",
  },
  {
    id: "3",
    title: "Development",
    description: "Implementation of core features",
    date: "2023-03-30",
    icon: <Circle className="h-4 w-4" />,
    status: "in-progress",
  },
]

export default function TimelineDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Timeline</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Timeline component displays a vertical list of events or steps in chronological order, perfect for project histories, user activity logs, or step-by-step guides.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Timeline</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Timeline events={sampleEvents} />
        </div>
        <div className="usage">
          ```tsx
          import { Timeline } from "@/components/ui/timeline"
          import { Circle } from "lucide-react"

          const events = [
            {
              id: "1",
              title: "Project Started",
              description: "Initial project setup and planning",
              date: "2023-01-01",
              icon: <Circle className="h-4 w-4" />,
              status: "completed",
            },
            // More events...
          ]

          export function BasicTimeline() {
            return <Timeline events={events} />
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Custom Icons</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Timeline
            events={sampleEvents}
            icons={{
              completed: <CheckCircle className="h-4 w-4 text-green-500" />,
              "in-progress": <Circle className="h-4 w-4 text-blue-500" />,
            }}
          />
        </div>
        <div className="usage">
          ```tsx
          import { Timeline } from "@/components/ui/timeline"
          import { CheckCircle, Circle } from "lucide-react"

          export function CustomIconsTimeline() {
            return (
              <Timeline
                events={events}
                icons={{
                  completed: <CheckCircle className="h-4 w-4 text-green-500" />,
                  "in-progress": <Circle className="h-4 w-4 text-blue-500" />,
                }}
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Interactive Timeline</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Timeline
            events={sampleEvents}
            interactive
            onEventClick={(event) => console.log("Clicked:", event)}
          />
        </div>
        <div className="usage">
          ```tsx
          export function InteractiveTimeline() {
            return (
              <Timeline
                events={events}
                interactive
                onEventClick={(event) => console.log("Clicked:", event)}
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
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
                <td className="p-2 border">events</td>
                <td className="p-2 border">TimelineEvent[]</td>
                <td className="p-2 border">[]</td>
                <td className="p-2 border">Array of timeline events</td>
              </tr>
              <tr>
                <td className="p-2 border">icons</td>
                <td className="p-2 border">Record<string, ReactNode></td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Custom icons for different event statuses</td>
              </tr>
              <tr>
                <td className="p-2 border">interactive</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether events are clickable</td>
              </tr>
              <tr>
                <td className="p-2 border">onEventClick</td>
                <td className="p-2 border">(event: TimelineEvent) => void</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Callback when an event is clicked</td>
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

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The Timeline component can be customized using:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Custom event icons</li>
            <li>Custom event rendering</li>
            <li>Different line styles and colors</li>
            <li>Custom date formatting</li>
            <li>Interactive event handling</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 