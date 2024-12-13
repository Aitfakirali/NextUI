import { Metadata } from "next"
import { Spinner } from "@/components/ui/spinner"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "Loading States",
  description: "Components and patterns for displaying loading states in your application.",
}

export default function LoadingDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Loading States</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Loading states provide visual feedback to users while content or data is being loaded. This guide covers different loading patterns and components.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Spinner</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="flex gap-4">
            <Spinner />
            <Spinner size="lg" />
            <Spinner variant="secondary" />
          </div>
        </div>
        <div className="usage">
          ```tsx
          import { Spinner } from "@/components/ui/spinner"

          export function LoadingSpinner() {
            return (
              <div className="flex gap-4">
                <Spinner />
                <Spinner size="lg" />
                <Spinner variant="secondary" />
              </div>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skeleton Loading</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <Skeleton className="h-[200px] w-full rounded-lg" />
          </div>
        </div>
        <div className="usage">
          ```tsx
          import { Skeleton } from "@/components/ui/skeleton"

          export function SkeletonLoading() {
            return (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-[200px] w-full rounded-lg" />
              </div>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Loading Overlay</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="relative">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Content Card</h3>
              <p className="text-gray-600">Card content goes here...</p>
            </div>
            <div className="absolute inset-0 bg-white/80 dark:bg-gray-950/80 flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          </div>
        </div>
        <div className="usage">
          ```tsx
          export function LoadingOverlay() {
            return (
              <div className="relative">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Content Card</h3>
                  <p className="text-gray-600">Card content goes here...</p>
                </div>
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-950/80 flex items-center justify-center">
                  <Spinner size="lg" />
                </div>
              </div>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Spinner Props</h3>
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
                    <td className="p-2 border">"sm" | "default" | "lg"</td>
                    <td className="p-2 border">"default"</td>
                    <td className="p-2 border">Size of the spinner</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">variant</td>
                    <td className="p-2 border">"primary" | "secondary"</td>
                    <td className="p-2 border">"primary"</td>
                    <td className="p-2 border">Visual style variant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Skeleton Props</h3>
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
                    <td className="p-2 border">className</td>
                    <td className="p-2 border">string</td>
                    <td className="p-2 border">undefined</td>
                    <td className="p-2 border">Additional CSS classes</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">animate</td>
                    <td className="p-2 border">boolean</td>
                    <td className="p-2 border">true</td>
                    <td className="p-2 border">Whether to show animation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Use spinners for short loading times (< 3 seconds)</li>
            <li>Use skeleton screens for content that takes longer to load</li>
            <li>Provide loading feedback for any action that takes more than 300ms</li>
            <li>Keep loading states consistent throughout your application</li>
            <li>Consider using progressive loading for large data sets</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 