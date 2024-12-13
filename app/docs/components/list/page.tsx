import { Metadata } from "next"

export const metadata: Metadata = {
  title: "List",
  description: "A versatile list component for displaying items in various formats.",
}

export default function ListDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">List</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The List component provides a flexible way to display items in various formats including ordered, unordered, and description lists with customizable styles and layouts.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic List</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <ul className="list-disc list-inside space-y-2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
        </div>
        <div className="usage">
          ```tsx
          <ul className="list-disc list-inside space-y-2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ordered List</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Download the package</li>
            <li>Install dependencies</li>
            <li>Run the application</li>
          </ol>
        </div>
        <div className="usage">
          ```tsx
          <ol className="list-decimal list-inside space-y-2">
            <li>Download the package</li>
            <li>Install dependencies</li>
            <li>Run the application</li>
          </ol>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Description List</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold">Term 1</dt>
              <dd className="text-gray-600 dark:text-gray-400 ml-4">Description for term 1</dd>
            </div>
            <div>
              <dt className="font-semibold">Term 2</dt>
              <dd className="text-gray-600 dark:text-gray-400 ml-4">Description for term 2</dd>
            </div>
          </dl>
        </div>
        <div className="usage">
          ```tsx
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold">Term 1</dt>
              <dd className="text-gray-600 dark:text-gray-400 ml-4">
                Description for term 1
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Term 2</dt>
              <dd className="text-gray-600 dark:text-gray-400 ml-4">
                Description for term 2
              </dd>
            </div>
          </dl>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Interactive List</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-2 rounded">
              <div className="flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                <span>Active Item</span>
              </div>
              <button className="text-sm text-blue-500 hover:text-blue-600">
                View
              </button>
            </li>
            <li className="py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-2 rounded">
              <div className="flex items-center">
                <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Pending Item</span>
              </div>
              <button className="text-sm text-blue-500 hover:text-blue-600">
                View
              </button>
            </li>
          </ul>
        </div>
        <div className="usage">
          ```tsx
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-2 rounded">
              <div className="flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                <span>Active Item</span>
              </div>
              <button className="text-sm text-blue-500 hover:text-blue-600">
                View
              </button>
            </li>
            {/* More items */}
          </ul>
          ```
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Styling Guidelines</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Lists can be styled using Tailwind CSS classes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><code>list-none</code> - Removes list markers</li>
            <li><code>list-disc</code> - Bullet points</li>
            <li><code>list-decimal</code> - Numbered list</li>
            <li><code>space-y-{n}</code> - Adds vertical spacing between items</li>
            <li><code>divide-y</code> - Adds dividers between items</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 