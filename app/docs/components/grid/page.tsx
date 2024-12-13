import { Metadata } from "next"
import { Grid } from "@/components/ui/grid"

export const metadata: Metadata = {
  title: "Grid",
  description: "A responsive grid layout component.",
}

export default function GridDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Grid</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Grid component provides a flexible and responsive grid layout system using CSS Grid.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Grid</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Grid cols={3} gap={4}>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 1</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 2</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 3</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 4</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 5</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 6</div>
          </Grid>
        </div>
        <div className="usage">
          ```tsx
          <Grid cols={3} gap={4}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
          </Grid>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Responsive Grid</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Grid 
            cols={{
              base: 1,
              sm: 2,
              md: 3,
              lg: 4
            }} 
            gap={4}
          >
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 1</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 2</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 3</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Item 4</div>
          </Grid>
        </div>
        <div className="usage">
          ```tsx
          <Grid 
            cols={{
              base: 1,
              sm: 2,
              md: 3,
              lg: 4
            }} 
            gap={4}
          >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Grid>
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
                <td className="p-2 border">cols</td>
                <td className="p-2 border">number | ResponsiveValue</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">Number of columns in the grid</td>
              </tr>
              <tr>
                <td className="p-2 border">gap</td>
                <td className="p-2 border">number | ResponsiveValue</td>
                <td className="p-2 border">4</td>
                <td className="p-2 border">Gap between grid items</td>
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
                <td className="p-2 border">Grid items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 