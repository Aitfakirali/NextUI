"use client"

import { CodePreview } from "@/components/code-preview"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">Skeleton</h1>
        <p className="text-xl text-muted-foreground">
          A placeholder loading state that mimics the shape of the content that will be loaded.
        </p>
      </div>

      {/* Usage Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Skeleton loaders are used to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Improve perceived performance</li>
            <li>Reduce layout shift when content loads</li>
            <li>Indicate loading states</li>
            <li>Maintain visual structure during data fetching</li>
          </ul>
        </div>
      </div>

      {/* Examples Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        <section>
          <h3 className="text-lg font-medium mb-4">Profile Card Skeleton</h3>
          <CodePreview
            preview={
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            }
            code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Content Card Skeleton</h3>
          <CodePreview
            preview={
              <div className="space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            }
            code={`<div className="space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">List Skeleton</h3>
          <CodePreview
            preview={
              <div className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                ))}
              </div>
            }
            code={`{Array.from({ length: 5 }, (_, i) => (
  <div key={i} className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
))}`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Table Skeleton</h3>
          <CodePreview
            preview={
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            }
            code={`<div className="space-y-3">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
</div>`}
          />
        </section>
      </div>

      {/* API Reference Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Props</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">className</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">string</td>
                  <td className="px-4 py-3 text-sm">undefined</td>
                  <td className="px-4 py-3 text-sm">Additional CSS classes to style the skeleton.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 