import { Metadata } from "next"
import { TreeView } from "@/components/ui/tree-view"
import { ChevronRight, ChevronDown, Folder, File } from "lucide-react"

export const metadata: Metadata = {
  title: "Tree View",
  description: "A hierarchical tree structure component for displaying nested data.",
}

const sampleData = [
  {
    id: "1",
    name: "Documents",
    icon: <Folder className="h-4 w-4" />,
    children: [
      {
        id: "2",
        name: "Work",
        icon: <Folder className="h-4 w-4" />,
        children: [
          {
            id: "3",
            name: "report.pdf",
            icon: <File className="h-4 w-4" />,
          },
          {
            id: "4",
            name: "presentation.pptx",
            icon: <File className="h-4 w-4" />,
          },
        ],
      },
      {
        id: "5",
        name: "Personal",
        icon: <Folder className="h-4 w-4" />,
        children: [
          {
            id: "6",
            name: "photos",
            icon: <Folder className="h-4 w-4" />,
          },
        ],
      },
    ],
  },
]

export default function TreeViewDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Tree View</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Tree View component displays hierarchical data in a collapsible tree structure, perfect for file systems, organization charts, or any nested data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Tree View</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <TreeView
            data={sampleData}
            defaultExpanded={["1"]}
            className="w-64"
          />
        </div>
        <div className="usage">
          ```tsx
          import { TreeView } from "@/components/ui/tree-view"
          import { Folder, File } from "lucide-react"

          const data = [
            {
              id: "1",
              name: "Documents",
              icon: <Folder className="h-4 w-4" />,
              children: [
                {
                  id: "2",
                  name: "Work",
                  icon: <Folder className="h-4 w-4" />,
                  children: [
                    {
                      id: "3",
                      name: "report.pdf",
                      icon: <File className="h-4 w-4" />,
                    },
                  ],
                },
              ],
            },
          ]

          export function BasicTreeView() {
            return (
              <TreeView
                data={data}
                defaultExpanded={["1"]}
                className="w-64"
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Custom Icons</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <TreeView
            data={sampleData}
            defaultExpanded={["1"]}
            className="w-64"
            icons={{
              expanded: <ChevronDown className="h-4 w-4" />,
              collapsed: <ChevronRight className="h-4 w-4" />,
            }}
          />
        </div>
        <div className="usage">
          ```tsx
          import { TreeView } from "@/components/ui/tree-view"
          import { ChevronRight, ChevronDown } from "lucide-react"

          export function CustomIconsTreeView() {
            return (
              <TreeView
                data={data}
                defaultExpanded={["1"]}
                className="w-64"
                icons={{
                  expanded: <ChevronDown className="h-4 w-4" />,
                  collapsed: <ChevronRight className="h-4 w-4" />,
                }}
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Selection</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <TreeView
            data={sampleData}
            defaultExpanded={["1"]}
            className="w-64"
            selectable
            onSelect={(node) => console.log("Selected:", node)}
          />
        </div>
        <div className="usage">
          ```tsx
          export function SelectableTreeView() {
            return (
              <TreeView
                data={data}
                defaultExpanded={["1"]}
                className="w-64"
                selectable
                onSelect={(node) => console.log("Selected:", node)}
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
                <td className="p-2 border">data</td>
                <td className="p-2 border">TreeNode[]</td>
                <td className="p-2 border">[]</td>
                <td className="p-2 border">Array of tree nodes to display</td>
              </tr>
              <tr>
                <td className="p-2 border">defaultExpanded</td>
                <td className="p-2 border">string[]</td>
                <td className="p-2 border">[]</td>
                <td className="p-2 border">IDs of nodes that should be expanded by default</td>
              </tr>
              <tr>
                <td className="p-2 border">selectable</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether nodes can be selected</td>
              </tr>
              <tr>
                <td className="p-2 border">onSelect</td>
                <td className="p-2 border">(node: TreeNode) => void</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Callback when a node is selected</td>
              </tr>
              <tr>
                <td className="p-2 border">icons</td>
                <td className="p-2 border">{ expanded: ReactNode, collapsed: ReactNode }</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Custom icons for expanded/collapsed states</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The Tree View component can be customized using:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Custom expand/collapse icons</li>
            <li>Custom node icons</li>
            <li>Custom node rendering</li>
            <li>Selection styles</li>
            <li>Indentation and spacing</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 