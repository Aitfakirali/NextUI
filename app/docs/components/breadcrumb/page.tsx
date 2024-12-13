import { Metadata } from "next"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Breadcrumb",
  description: "A navigation component that helps users keep track of their location.",
}

export default function BreadcrumbDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Breadcrumb</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Breadcrumb component helps users understand their current location within a website's hierarchy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Breadcrumb</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Breadcrumb
            segments={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb", href: "/components/breadcrumb" },
            ]}
          />
        </div>
        <div className="usage">
          ```tsx
          <Breadcrumb
            segments={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb", href: "/components/breadcrumb" },
            ]}
          />
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Truncated Breadcrumb</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Breadcrumb
            segments={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Navigation", href: "/components/navigation" },
              { label: "Interface", href: "/components/navigation/interface" },
              { label: "Breadcrumb", href: "/components/navigation/interface/breadcrumb" },
            ]}
            truncate
          />
        </div>
        <div className="usage">
          ```tsx
          <Breadcrumb
            segments={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Navigation", href: "/components/navigation" },
              { label: "Interface", href: "/components/navigation/interface" },
              { label: "Breadcrumb", href: "/components/navigation/interface/breadcrumb" },
            ]}
            truncate
          />
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Custom Separator</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Breadcrumb
            segments={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb", href: "/components/breadcrumb" },
            ]}
            separator=">"
          />
        </div>
        <div className="usage">
          ```tsx
          <Breadcrumb
            segments={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb", href: "/components/breadcrumb" },
            ]}
            separator=">"
          />
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
                <td className="p-2 border">segments</td>
                <td className="p-2 border">{ label: string; href: string; }[]</td>
                <td className="p-2 border">required</td>
                <td className="p-2 border">Array of breadcrumb segments</td>
              </tr>
              <tr>
                <td className="p-2 border">separator</td>
                <td className="p-2 border">ReactNode</td>
                <td className="p-2 border">/</td>
                <td className="p-2 border">Custom separator between segments</td>
              </tr>
              <tr>
                <td className="p-2 border">truncate</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether to truncate long paths</td>
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