"use client"

import * as React from "react"
import { Upload as UploadIcon, X, File, Image } from "lucide-react"
import { Upload, UploadTrigger, UploadDropzone } from "@/components/ui/upload"
import { Button } from "@/components/ui/button"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function UploadPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Upload</h1>
          <p className="text-xl text-muted-foreground">
            A set of components for handling file uploads with drag and drop support.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Upload
              onFilesSelected={(files) => {
                console.log("Selected files:", files)
              }}
            >
              <UploadDropzone>
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <UploadIcon className="h-10 w-10 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag and drop files here, or click to select files
                  </p>
                </div>
              </UploadDropzone>
            </Upload>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With File Type Restrictions</h2>
            <Upload
              accept="image/*"
              maxSize={5 * 1024 * 1024} // 5MB
              onFilesSelected={(files) => {
                console.log("Selected images:", files)
              }}
            >
              <UploadDropzone>
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <Image className="h-10 w-10 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drop images here, or click to select
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Maximum file size: 5MB
                  </p>
                </div>
              </UploadDropzone>
            </Upload>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Custom Trigger</h2>
            <Upload
              onFilesSelected={(files) => {
                console.log("Selected files:", files)
              }}
            >
              <UploadTrigger>
                <Button variant="outline">
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Select Files
                </Button>
              </UploadTrigger>
            </Upload>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With File Preview</h2>
            <Upload
              onFilesSelected={(files) => {
                console.log("Selected files:", files)
              }}
            >
              {({ files, removeFile }) => (
                <div className="space-y-4">
                  <UploadDropzone>
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <UploadIcon className="h-10 w-10 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Drag and drop files here, or click to select files
                      </p>
                    </div>
                  </UploadDropzone>
                  {files.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="relative flex items-center space-x-4 rounded-lg border p-4"
                        >
                          <File className="h-8 w-8 text-muted-foreground" />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(file.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFile(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Upload>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Upload, UploadTrigger, UploadDropzone } from "@/components/ui/upload"
import { Button } from "@/components/ui/button"

// Basic upload
<Upload onFilesSelected={(files) => console.log(files)}>
  <UploadDropzone>
    <div className="flex flex-col items-center justify-center p-8">
      <UploadIcon className="h-10 w-10" />
      <p className="mt-2">Drag and drop files here</p>
    </div>
  </UploadDropzone>
</Upload>

// With file type restrictions
<Upload
  accept="image/*"
  maxSize={5 * 1024 * 1024}
  onFilesSelected={(files) => console.log(files)}
>
  <UploadDropzone>
    <div className="flex flex-col items-center justify-center p-8">
      <Image className="h-10 w-10" />
      <p className="mt-2">Drop images here</p>
    </div>
  </UploadDropzone>
</Upload>

// With custom trigger
<Upload onFilesSelected={(files) => console.log(files)}>
  <UploadTrigger>
    <Button variant="outline">Select Files</Button>
  </UploadTrigger>
</Upload>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Upload</h3>
              <ul>
                <li><code>accept</code> - File types to accept (e.g., "image/*", ".pdf,.doc")</li>
                <li><code>maxSize</code> - Maximum file size in bytes</li>
                <li><code>multiple</code> - Whether to allow multiple file selection</li>
                <li><code>onFilesSelected</code> - Callback when files are selected</li>
                <li><code>children</code> - Render function or components</li>
              </ul>

              <h3>UploadDropzone</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>children</code> - Content to display in the dropzone</li>
              </ul>

              <h3>UploadTrigger</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>children</code> - Content to display in the trigger</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Clear upload instructions</li>
                    <li>File type validation</li>
                    <li>Size restrictions</li>
                    <li>Progress feedback</li>
                    <li>Error handling</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Image uploads</li>
                    <li>Document uploads</li>
                    <li>Profile pictures</li>
                    <li>File attachments</li>
                    <li>Bulk uploads</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>Screen reader support</li>
                    <li>Error messages</li>
                    <li>Focus management</li>
                    <li>ARIA labels</li>
                  </ul>
                </li>
                <li>Performance:
                  <ul>
                    <li>File compression</li>
                    <li>Chunked uploads</li>
                    <li>Progress tracking</li>
                    <li>Cancellation</li>
                    <li>Retry handling</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 