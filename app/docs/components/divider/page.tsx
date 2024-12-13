import { Metadata } from "next"
import { Divider } from "@/components/ui/divider"

export const metadata: Metadata = {
  title: "Divider",
  description: "A horizontal or vertical line to separate content.",
}

export default function DividerDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Divider</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Divider component is used to visually separate content in a list or group.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Horizontal Divider</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
          </div>
        </div>
        <div className="usage">
          ```tsx
          <div className="space-y-4">
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
          </div>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Vertical Divider</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="flex items-center space-x-4">
            <span>Left</span>
            <Divider orientation="vertical" className="h-6" />
            <span>Right</span>
          </div>
        </div>
        <div className="usage">
          ```tsx
          <div className="flex items-center space-x-4">
            <span>Left</span>
            <Divider orientation="vertical" className="h-6" />
            <span>Right</span>
          </div>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Label</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <p>Content above</p>
            <Divider>
              <span className="px-2 text-gray-500">OR</span>
            </Divider>
            <p>Content below</p>
          </div>
        </div>
        <div className="usage">
          ```tsx
          <div className="space-y-4">
            <p>Content above</p>
            <Divider>
              <span className="px-2 text-gray-500">OR</span>
            </Divider>
            <p>Content below</p>
          </div>
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
                <td className="p-2 border">orientation</td>
                <td className="p-2 border">"horizontal" | "vertical"</td>
                <td className="p-2 border">"horizontal"</td>
                <td className="p-2 border">The orientation of the divider</td>
              </tr>
              <tr>
                <td className="p-2 border">className</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="p-2 border">children</td>
                <td className="p-2 border">ReactNode</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Optional content to display in the center of the divider</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 