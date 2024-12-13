import { Metadata } from "next"
import { MasonryGrid } from "@/components/ui/masonry-grid"

export const metadata: Metadata = {
  title: "Masonry Grid",
  description: "A responsive masonry layout component for displaying items in a dynamic grid.",
}

const sampleItems = [
  {
    id: 1,
    height: 200,
    content: "Short item",
  },
  {
    id: 2,
    height: 300,
    content: "Medium item with more content",
  },
  {
    id: 3,
    height: 250,
    content: "Another item",
  },
  {
    id: 4,
    height: 400,
    content: "Tall item with lots of content here",
  },
  {
    id: 5,
    height: 180,
    content: "Short item again",
  },
]

export default function MasonryGridDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Masonry Grid</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Masonry Grid component creates a dynamic grid layout that places items optimally based on available vertical space, similar to Pinterest's layout.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Masonry Grid</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <MasonryGrid columns={3} gap={4}>
            {sampleItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
                style={{ height: item.height }}
              >
                {item.content}
              </div>
            ))}
          </MasonryGrid>
        </div>
        <div className="usage">
          ```tsx
          import { MasonryGrid } from "@/components/ui/masonry-grid"

          export function BasicMasonryGrid() {
            const items = [
              { id: 1, height: 200, content: "Short item" },
              { id: 2, height: 300, content: "Medium item" },
              // More items...
            ]

            return (
              <MasonryGrid columns={3} gap={4}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
                    style={{ height: item.height }}
                  >
                    {item.content}
                  </div>
                ))}
              </MasonryGrid>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Responsive Masonry</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <MasonryGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            gap={{ base: 2, md: 4 }}
          >
            {sampleItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
                style={{ height: item.height }}
              >
                {item.content}
              </div>
            ))}
          </MasonryGrid>
        </div>
        <div className="usage">
          ```tsx
          export function ResponsiveMasonryGrid() {
            return (
              <MasonryGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                gap={{ base: 2, md: 4 }}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
                    style={{ height: item.height }}
                  >
                    {item.content}
                  </div>
                ))}
              </MasonryGrid>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Loading State</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <MasonryGrid columns={3} gap={4} loading>
            {sampleItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
                style={{ height: item.height }}
              >
                {item.content}
              </div>
            ))}
          </MasonryGrid>
        </div>
        <div className="usage">
          ```tsx
          export function LoadingMasonryGrid() {
            return (
              <MasonryGrid columns={3} gap={4} loading>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
                    style={{ height: item.height }}
                  >
                    {item.content}
                  </div>
                ))}
              </MasonryGrid>
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
                <td className="p-2 border">columns</td>
                <td className="p-2 border">number | ResponsiveValue</td>
                <td className="p-2 border">3</td>
                <td className="p-2 border">Number of columns in the grid</td>
              </tr>
              <tr>
                <td className="p-2 border">gap</td>
                <td className="p-2 border">number | ResponsiveValue</td>
                <td className="p-2 border">4</td>
                <td className="p-2 border">Gap between grid items</td>
              </tr>
              <tr>
                <td className="p-2 border">loading</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether to show loading state</td>
              </tr>
              <tr>
                <td className="p-2 border">children</td>
                <td className="p-2 border">ReactNode</td>
                <td className="p-2 border">required</td>
                <td className="p-2 border">Grid items to display</td>
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
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Use for content with varying heights</li>
            <li>Implement responsive columns for different screen sizes</li>
            <li>Consider loading states for dynamic content</li>
            <li>Optimize images to prevent layout shifts</li>
            <li>Use appropriate gap sizes for visual hierarchy</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 