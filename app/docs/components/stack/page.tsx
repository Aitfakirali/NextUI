import { Metadata } from "next"
import { Stack } from "@/components/ui/stack"

export const metadata: Metadata = {
  title: "Stack",
  description: "A layout component for stacking elements with consistent spacing.",
}

export default function StackDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Stack</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Stack component is a layout primitive that makes it easy to stack elements vertically or horizontally with consistent spacing.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Vertical Stack</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Stack spacing={4}>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 1</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 2</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 3</div>
          </Stack>
        </div>
        <div className="usage">
          ```tsx
          import { Stack } from "@/components/ui/stack"

          export function VerticalStack() {
            return (
              <Stack spacing={4}>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 1
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 2
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 3
                </div>
              </Stack>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Horizontal Stack</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Stack direction="row" spacing={4}>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 1</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 2</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 3</div>
          </Stack>
        </div>
        <div className="usage">
          ```tsx
          export function HorizontalStack() {
            return (
              <Stack direction="row" spacing={4}>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 1
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 2
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 3
                </div>
              </Stack>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Alignment</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Stack
            direction="row"
            spacing={4}
            align="center"
            justify="space-between"
          >
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">Small</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Medium</div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded">Large</div>
          </Stack>
        </div>
        <div className="usage">
          ```tsx
          export function AlignedStack() {
            return (
              <Stack
                direction="row"
                spacing={4}
                align="center"
                justify="space-between"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  Small
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Medium
                </div>
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded">
                  Large
                </div>
              </Stack>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Responsive Stack</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Stack
            direction={["column", "row"]}
            spacing={[2, 4]}
            align="stretch"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 1</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 2</div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Item 3</div>
          </Stack>
        </div>
        <div className="usage">
          ```tsx
          export function ResponsiveStack() {
            return (
              <Stack
                direction={["column", "row"]}
                spacing={[2, 4]}
                align="stretch"
              >
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 1
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 2
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                  Item 3
                </div>
              </Stack>
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
                <td className="p-2 border">direction</td>
                <td className="p-2 border">"row" | "column" | ResponsiveValue</td>
                <td className="p-2 border">"column"</td>
                <td className="p-2 border">The direction to stack elements</td>
              </tr>
              <tr>
                <td className="p-2 border">spacing</td>
                <td className="p-2 border">number | ResponsiveValue</td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">Space between elements</td>
              </tr>
              <tr>
                <td className="p-2 border">align</td>
                <td className="p-2 border">FlexAlign</td>
                <td className="p-2 border">"stretch"</td>
                <td className="p-2 border">Cross-axis alignment</td>
              </tr>
              <tr>
                <td className="p-2 border">justify</td>
                <td className="p-2 border">FlexJustify</td>
                <td className="p-2 border">"flex-start"</td>
                <td className="p-2 border">Main-axis alignment</td>
              </tr>
              <tr>
                <td className="p-2 border">wrap</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether to wrap items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Use Stack for consistent spacing between elements</li>
            <li>Consider responsive layouts with direction prop</li>
            <li>Combine with other layout components for complex layouts</li>
            <li>Use align and justify props for fine-tuned positioning</li>
            <li>Keep accessibility in mind when ordering elements</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 