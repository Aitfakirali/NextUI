import { Metadata } from "next"
import { Pagination } from "@/components/ui/pagination"
import { useState } from "react"

export const metadata: Metadata = {
  title: "Pagination",
  description: "A component for navigating through multiple pages of content.",
}

export default function PaginationDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Pagination</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Pagination component helps users navigate through multiple pages of content.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Pagination</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <PaginationDemo />
        </div>
        <div className="usage">
          ```tsx
          export function PaginationDemo() {
            const [currentPage, setCurrentPage] = useState(1)
            const totalPages = 10

            return (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Content</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <PaginationWithContent />
        </div>
        <div className="usage">
          ```tsx
          export function PaginationWithContent() {
            const [currentPage, setCurrentPage] = useState(1)
            const totalPages = 5
            const items = [
              "Item 1", "Item 2", "Item 3", "Item 4", "Item 5"
            ]

            return (
              <div className="space-y-4">
                <div className="rounded border p-4">
                  <h3 className="font-medium">Page {currentPage}</h3>
                  <p>{items[currentPage - 1]}</p>
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )
          }
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
                <td className="p-2 border">currentPage</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">Current active page</td>
              </tr>
              <tr>
                <td className="p-2 border">totalPages</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">required</td>
                <td className="p-2 border">Total number of pages</td>
              </tr>
              <tr>
                <td className="p-2 border">onPageChange</td>
                <td className="p-2 border">(page: number) => void</td>
                <td className="p-2 border">required</td>
                <td className="p-2 border">Callback when page changes</td>
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

function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  )
}

function PaginationWithContent() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5
  const items = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5"
  ]

  return (
    <div className="space-y-4">
      <div className="rounded border p-4">
        <h3 className="font-medium">Page {currentPage}</h3>
        <p>{items[currentPage - 1]}</p>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
} 