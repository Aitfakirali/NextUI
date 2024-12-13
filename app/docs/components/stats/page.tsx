import { Metadata } from "next"
import { Stats } from "@/components/ui/stats"
import { ArrowUp, ArrowDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react"

export const metadata: Metadata = {
  title: "Stats",
  description: "A collection of components for displaying statistics and metrics.",
}

const sampleStats = [
  {
    title: "Total Users",
    value: "10.5k",
    icon: <Users className="h-4 w-4" />,
    change: {
      value: "+12%",
      trend: "up",
      icon: <ArrowUp className="h-4 w-4" />,
    },
  },
  {
    title: "Revenue",
    value: "$45.2k",
    icon: <DollarSign className="h-4 w-4" />,
    change: {
      value: "+8%",
      trend: "up",
      icon: <ArrowUp className="h-4 w-4" />,
    },
  },
  {
    title: "Orders",
    value: "1,234",
    icon: <ShoppingCart className="h-4 w-4" />,
    change: {
      value: "-3%",
      trend: "down",
      icon: <ArrowDown className="h-4 w-4" />,
    },
  },
]

export default function StatsDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Stats</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Stats component provides a collection of components for displaying statistics, metrics, and key performance indicators (KPIs) in various formats.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Stats</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Stats items={sampleStats} />
        </div>
        <div className="usage">
          ```tsx
          import { Stats } from "@/components/ui/stats"
          import { Users, DollarSign, ArrowUp } from "lucide-react"

          const stats = [
            {
              title: "Total Users",
              value: "10.5k",
              icon: <Users className="h-4 w-4" />,
              change: {
                value: "+12%",
                trend: "up",
                icon: <ArrowUp className="h-4 w-4" />,
              },
            },
            // More stats...
          ]

          export function BasicStats() {
            return <Stats items={stats} />
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Sparklines</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Stats
            items={[
              {
                ...sampleStats[0],
                sparkline: {
                  data: [10, 15, 12, 18, 14, 16, 20],
                  color: "blue",
                },
              },
              {
                ...sampleStats[1],
                sparkline: {
                  data: [40, 35, 42, 38, 44, 46, 50],
                  color: "green",
                },
              },
              {
                ...sampleStats[2],
                sparkline: {
                  data: [30, 25, 22, 28, 24, 26, 20],
                  color: "red",
                },
              },
            ]}
            showSparklines
          />
        </div>
        <div className="usage">
          ```tsx
          export function SparklineStats() {
            return (
              <Stats
                items={stats.map(stat => ({
                  ...stat,
                  sparkline: {
                    data: [/* historical data points */],
                    color: "blue",
                  },
                }))}
                showSparklines
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Progress</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Stats
            items={[
              {
                title: "Progress",
                value: "75%",
                icon: <Activity className="h-4 w-4" />,
                progress: {
                  value: 75,
                  color: "blue",
                },
              },
            ]}
            showProgress
          />
        </div>
        <div className="usage">
          ```tsx
          export function ProgressStats() {
            return (
              <Stats
                items={[
                  {
                    title: "Progress",
                    value: "75%",
                    icon: <Activity className="h-4 w-4" />,
                    progress: {
                      value: 75,
                      color: "blue",
                    },
                  },
                ]}
                showProgress
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
                <td className="p-2 border">items</td>
                <td className="p-2 border">StatItem[]</td>
                <td className="p-2 border">[]</td>
                <td className="p-2 border">Array of stat items to display</td>
              </tr>
              <tr>
                <td className="p-2 border">showSparklines</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether to show sparkline charts</td>
              </tr>
              <tr>
                <td className="p-2 border">showProgress</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether to show progress bars</td>
              </tr>
              <tr>
                <td className="p-2 border">columns</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">3</td>
                <td className="p-2 border">Number of columns in the grid</td>
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
            The Stats component can be customized using:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Custom icons and colors</li>
            <li>Different layout configurations</li>
            <li>Sparkline charts</li>
            <li>Progress bars</li>
            <li>Custom trend indicators</li>
            <li>Responsive grid layouts</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 