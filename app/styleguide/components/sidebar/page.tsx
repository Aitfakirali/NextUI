"use client"

import * as React from "react"
import { Sidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Home, Settings, User, Mail, Bell } from "lucide-react"

export default function SidebarPage() {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Sidebar</h1>
          <p className="text-xl text-muted-foreground">
            A responsive sidebar component for navigation and content organization.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="h-[400px] border rounded-lg relative overflow-hidden">
              <Sidebar isOpen={isOpen}>
                <div className="p-4">
                  <h2 className="mb-4 text-lg font-semibold">Navigation</h2>
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Messages
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </nav>
                </div>
              </Sidebar>
              <div className="ml-[240px] p-4">
                <Button onClick={() => setIsOpen(!isOpen)}>
                  Toggle Sidebar
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Sidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Home, Settings, User, Mail, Bell } from "lucide-react"

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Sidebar isOpen={isOpen}>
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Navigation</h2>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          {/* Add more navigation items */}
        </nav>
      </div>
    </Sidebar>
  )
}`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>isOpen</code> - Controls the visibility of the sidebar</li>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>children</code> - The content to be rendered inside the sidebar</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Keep navigation items organized and clear</li>
                    <li>Use consistent icons and labels</li>
                    <li>Provide clear visual hierarchy</li>
                    <li>Include toggle functionality for responsive design</li>
                    <li>Consider mobile-first approach</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Application navigation</li>
                    <li>Dashboard layouts</li>
                    <li>Admin interfaces</li>
                    <li>Content management systems</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Ensure keyboard navigation</li>
                    <li>Use proper ARIA labels</li>
                    <li>Maintain focus management</li>
                    <li>Support screen readers</li>
                  </ul>
                </li>
                <li>Responsive behavior:
                  <ul>
                    <li>Collapsible on smaller screens</li>
                    <li>Smooth transitions</li>
                    <li>Overlay mode for mobile</li>
                    <li>Proper touch targets</li>
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