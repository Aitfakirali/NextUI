import { Metadata } from "next"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { Button } from "@/components/ui/button"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Image,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Rich Text Editor",
  description: "A feature-rich WYSIWYG editor component for content editing.",
}

export default function RichTextEditorDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Rich Text Editor</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Rich Text Editor component provides a WYSIWYG (What You See Is What You Get) interface for editing formatted text content with support for various text formatting options, lists, links, and media.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Editor</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <RichTextEditor
            defaultValue="<p>Start typing here...</p>"
            className="min-h-[200px]"
          />
        </div>
        <div className="usage">
          ```tsx
          import { RichTextEditor } from "@/components/ui/rich-text-editor"

          export function BasicEditor() {
            return (
              <RichTextEditor
                defaultValue="<p>Start typing here...</p>"
                className="min-h-[200px]"
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Custom Toolbar</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <RichTextEditor
            defaultValue="<p>Customize your content...</p>"
            className="min-h-[200px]"
            toolbar={
              <div className="flex items-center gap-2 p-2 border-b">
                <Button variant="ghost" size="sm">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Underline className="h-4 w-4" />
                </Button>
                <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ListOrdered className="h-4 w-4" />
                </Button>
                <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                <Button variant="ghost" size="sm">
                  <Link className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Image className="h-4 w-4" />
                </Button>
              </div>
            }
          />
        </div>
        <div className="usage">
          ```tsx
          import { Bold, Italic, Underline, List, ListOrdered, Link, Image } from "lucide-react"
          import { Button } from "@/components/ui/button"

          export function CustomToolbarEditor() {
            return (
              <RichTextEditor
                defaultValue="<p>Customize your content...</p>"
                className="min-h-[200px]"
                toolbar={
                  <div className="flex items-center gap-2 p-2 border-b">
                    <Button variant="ghost" size="sm">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Italic className="h-4 w-4" />
                    </Button>
                    {/* More toolbar buttons */}
                  </div>
                }
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Markdown Support</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <RichTextEditor
            defaultValue="# Heading\n\n**Bold text** and *italic text*"
            className="min-h-[200px]"
            markdown
          />
        </div>
        <div className="usage">
          ```tsx
          export function MarkdownEditor() {
            return (
              <RichTextEditor
                defaultValue="# Heading\n\n**Bold text** and *italic text*"
                className="min-h-[200px]"
                markdown
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
                <td className="p-2 border">defaultValue</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">""</td>
                <td className="p-2 border">Initial content of the editor</td>
              </tr>
              <tr>
                <td className="p-2 border">value</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Controlled value of the editor</td>
              </tr>
              <tr>
                <td className="p-2 border">onChange</td>
                <td className="p-2 border">(value: string) => void</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Change event handler</td>
              </tr>
              <tr>
                <td className="p-2 border">toolbar</td>
                <td className="p-2 border">ReactNode</td>
                <td className="p-2 border">DefaultToolbar</td>
                <td className="p-2 border">Custom toolbar component</td>
              </tr>
              <tr>
                <td className="p-2 border">markdown</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Enable markdown support</td>
              </tr>
              <tr>
                <td className="p-2 border">placeholder</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Placeholder text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Rich text formatting (bold, italic, underline)</li>
            <li>Lists (ordered and unordered)</li>
            <li>Links and images</li>
            <li>Markdown support</li>
            <li>Custom toolbar options</li>
            <li>Keyboard shortcuts</li>
            <li>Undo/redo functionality</li>
            <li>Copy and paste support</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 