import { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Container",
  description: "A centered container component with responsive max-width.",
}

export default function ContainerDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Container</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Container component centers content horizontally and provides a responsive max-width.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Default Container</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Container>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <p>This content is centered with a max-width</p>
            </div>
          </Container>
        </div>
        <div className="usage">
          ```tsx
          <Container>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <p>This content is centered with a max-width</p>
            </div>
          </Container>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Container Sizes</h2>
        <div className="preview border rounded-lg p-6 mb-4 space-y-4">
          <Container size="sm">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <p>Small container</p>
            </div>
          </Container>
          <Container size="md">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <p>Medium container (default)</p>
            </div>
          </Container>
          <Container size="lg">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <p>Large container</p>
            </div>
          </Container>
        </div>
        <div className="usage">
          ```tsx
          <Container size="sm">
            <div>Small container</div>
          </Container>

          <Container size="md">
            <div>Medium container (default)</div>
          </Container>

          <Container size="lg">
            <div>Large container</div>
          </Container>
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
                <td className="p-2 border">size</td>
                <td className="p-2 border">"sm" | "md" | "lg"</td>
                <td className="p-2 border">"md"</td>
                <td className="p-2 border">Sets the max-width of the container</td>
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
                <td className="p-2 border">required</td>
                <td className="p-2 border">Container content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 