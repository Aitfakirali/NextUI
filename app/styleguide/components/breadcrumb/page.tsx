"use client"

import * as React from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ChevronRight, Home, Folder, File } from "lucide-react"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function BreadcrumbPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Breadcrumb</h1>
          <p className="text-xl text-muted-foreground">
            A navigation component that helps users understand their current location in a hierarchical structure.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Icons</h2>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/documents" className="flex items-center gap-1">
                  <Folder className="h-4 w-4" />
                  <span>Documents</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/documents/report" className="flex items-center gap-1">
                  <File className="h-4 w-4" />
                  <span>Report.pdf</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Current Page</h2>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink aria-current="page">Profile</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"

// Basic breadcrumb
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator>
    <ChevronRight className="h-4 w-4" />
  </BreadcrumbSeparator>
  <BreadcrumbItem>
    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

// With icons
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="/" className="flex items-center gap-1">
      <Home className="h-4 w-4" />
      <span>Home</span>
    </BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator>
    <ChevronRight className="h-4 w-4" />
  </BreadcrumbSeparator>
  <BreadcrumbItem>
    <BreadcrumbLink href="/documents">Documents</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

// Current page
<BreadcrumbItem isCurrentPage>
  <BreadcrumbLink aria-current="page">Profile</BreadcrumbLink>
</BreadcrumbItem>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Breadcrumb</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>separator</code> - Custom separator component</li>
              </ul>

              <h3>BreadcrumbItem</h3>
              <ul>
                <li><code>isCurrentPage</code> - Whether this is the current page</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>BreadcrumbLink</h3>
              <ul>
                <li><code>href</code> - The URL to navigate to</li>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>isCurrentPage</code> - Whether this is the current page</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use breadcrumbs to:
                  <ul>
                    <li>Show hierarchical navigation</li>
                    <li>Help users understand their location</li>
                    <li>Provide quick navigation to parent pages</li>
                    <li>Improve website navigation</li>
                  </ul>
                </li>
                <li>Best practices:
                  <ul>
                    <li>Keep paths concise and clear</li>
                    <li>Use consistent separators</li>
                    <li>Show current page location</li>
                    <li>Consider using icons for clarity</li>
                    <li>Maintain proper spacing</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Use proper ARIA landmarks</li>
                    <li>Mark current page appropriately</li>
                    <li>Ensure keyboard navigation</li>
                    <li>Provide clear focus states</li>
                  </ul>
                </li>
                <li>Common patterns:
                  <ul>
                    <li>File system navigation</li>
                    <li>E-commerce categories</li>
                    <li>Documentation sections</li>
                    <li>Multi-step forms</li>
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