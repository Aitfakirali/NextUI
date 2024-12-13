import { Metadata } from "next"
import { Upload, X, File, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "File Upload",
  description: "A versatile file upload component with drag and drop support.",
}

export default function FileUploadDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">File Upload</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The File Upload component provides an intuitive interface for uploading files with support for drag and drop, file previews, and progress tracking.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Upload</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Support for a single or bulk upload
              </p>
              <Button>
                Select Files
              </Button>
            </div>
          </div>
        </div>
        <div className="usage">
          ```tsx
          import { Upload } from "lucide-react"
          import { Button } from "@/components/ui/button"

          export function BasicUpload() {
            return (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium mb-2">
                    Drop files here or click to upload
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Support for a single or bulk upload
                  </p>
                  <Button>Select Files</Button>
                </div>
              </div>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Preview</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
            <div className="flex flex-col items-center mb-6">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Images up to 10MB
              </p>
              <Button>
                Select Images
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <ImageIcon className="absolute inset-0 h-full w-full p-4 text-gray-400" />
                <button className="absolute top-2 right-2 p-1 bg-white/80 dark:bg-gray-800/80 rounded-full">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <ImageIcon className="absolute inset-0 h-full w-full p-4 text-gray-400" />
                <button className="absolute top-2 right-2 p-1 bg-white/80 dark:bg-gray-800/80 rounded-full">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="usage">
          ```tsx
          export function UploadWithPreview() {
            return (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <div className="flex flex-col items-center mb-6">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium mb-2">
                    Drop files here or click to upload
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Images up to 10MB
                  </p>
                  <Button>Select Images</Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {/* Preview items */}
                </div>
              </div>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Progress</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <File className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-medium">document.pdf</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2.4 MB</p>
                </div>
              </div>
              <div className="w-32">
                <div className="h-2 bg-blue-500 rounded" style={{ width: "75%" }} />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <ImageIcon className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-medium">image.jpg</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1.2 MB</p>
                </div>
              </div>
              <div className="w-32">
                <div className="h-2 bg-green-500 rounded" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="usage">
          ```tsx
          export function UploadWithProgress() {
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <File className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="font-medium">document.pdf</p>
                      <p className="text-sm text-gray-500">2.4 MB</p>
                    </div>
                  </div>
                  <div className="w-32">
                    <div 
                      className="h-2 bg-blue-500 rounded" 
                      style={{ width: "75%" }} 
                    />
                  </div>
                </div>
                {/* More upload items */}
              </div>
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
                <td className="p-2 border">onUpload</td>
                <td className="p-2 border">(files: File[]) => void</td>
                <td className="p-2 border">required</td>
                <td className="p-2 border">Upload callback function</td>
              </tr>
              <tr>
                <td className="p-2 border">accept</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Accepted file types</td>
              </tr>
              <tr>
                <td className="p-2 border">multiple</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Allow multiple file selection</td>
              </tr>
              <tr>
                <td className="p-2 border">maxSize</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Maximum file size in bytes</td>
              </tr>
              <tr>
                <td className="p-2 border">disabled</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Disable the upload</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Drag and drop support</li>
            <li>File type validation</li>
            <li>File size validation</li>
            <li>Multiple file upload</li>
            <li>Image previews</li>
            <li>Upload progress tracking</li>
            <li>Error handling</li>
            <li>Accessibility support</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 