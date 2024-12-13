"use client"

import * as React from "react"
import {
  ChevronRight,
  ChevronDown,
  Folder,
  File,
  Settings,
  Users,
  Building,
  Mail,
  Calendar,
} from "lucide-react"
import {
  TreeView,
  TreeItem,
  TreeItemTrigger,
  TreeItemContent,
} from "@/components/ui/tree-view"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function TreeViewPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Tree View</h1>
          <p className="text-xl text-muted-foreground">
            A hierarchical list of items that can be expanded and collapsed.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <TreeView defaultExpanded={["docs"]}>
              <TreeItem value="docs">
                <TreeItemTrigger>
                  <Folder className="h-4 w-4 mr-2" />
                  Documents
                </TreeItemTrigger>
                <TreeItemContent>
                  <TreeItem value="work">
                    <TreeItemTrigger>
                      <Folder className="h-4 w-4 mr-2" />
                      Work
                    </TreeItemTrigger>
                    <TreeItemContent>
                      <TreeItem value="report">
                        <TreeItemTrigger>
                          <File className="h-4 w-4 mr-2" />
                          Annual Report.pdf
                        </TreeItemTrigger>
                      </TreeItem>
                      <TreeItem value="budget">
                        <TreeItemTrigger>
                          <File className="h-4 w-4 mr-2" />
                          Budget.xlsx
                        </TreeItemTrigger>
                      </TreeItem>
                    </TreeItemContent>
                  </TreeItem>
                  <TreeItem value="personal">
                    <TreeItemTrigger>
                      <Folder className="h-4 w-4 mr-2" />
                      Personal
                    </TreeItemTrigger>
                    <TreeItemContent>
                      <TreeItem value="photos">
                        <TreeItemTrigger>
                          <File className="h-4 w-4 mr-2" />
                          Vacation Photos
                        </TreeItemTrigger>
                      </TreeItem>
                      <TreeItem value="resume">
                        <TreeItemTrigger>
                          <File className="h-4 w-4 mr-2" />
                          Resume.docx
                        </TreeItemTrigger>
                      </TreeItem>
                    </TreeItemContent>
                  </TreeItem>
                </TreeItemContent>
              </TreeItem>
            </TreeView>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Navigation Example</h2>
            <TreeView>
              <TreeItem value="settings">
                <TreeItemTrigger>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </TreeItemTrigger>
                <TreeItemContent>
                  <TreeItem value="profile">
                    <TreeItemTrigger>
                      <Users className="h-4 w-4 mr-2" />
                      Profile
                    </TreeItemTrigger>
                  </TreeItem>
                  <TreeItem value="organization">
                    <TreeItemTrigger>
                      <Building className="h-4 w-4 mr-2" />
                      Organization
                    </TreeItemTrigger>
                  </TreeItem>
                </TreeItemContent>
              </TreeItem>
              <TreeItem value="communication">
                <TreeItemTrigger>
                  <Mail className="h-4 w-4 mr-2" />
                  Communication
                </TreeItemTrigger>
                <TreeItemContent>
                  <TreeItem value="email">
                    <TreeItemTrigger>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </TreeItemTrigger>
                  </TreeItem>
                  <TreeItem value="calendar">
                    <TreeItemTrigger>
                      <Calendar className="h-4 w-4 mr-2" />
                      Calendar
                    </TreeItemTrigger>
                  </TreeItem>
                </TreeItemContent>
              </TreeItem>
            </TreeView>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  TreeView,
  TreeItem,
  TreeItemTrigger,
  TreeItemContent,
} from "@/components/ui/tree-view"
import { Folder, File } from "lucide-react"

// Basic tree view
<TreeView defaultExpanded={["docs"]}>
  <TreeItem value="docs">
    <TreeItemTrigger>
      <Folder className="h-4 w-4 mr-2" />
      Documents
    </TreeItemTrigger>
    <TreeItemContent>
      <TreeItem value="work">
        <TreeItemTrigger>
          <Folder className="h-4 w-4 mr-2" />
          Work
        </TreeItemTrigger>
        <TreeItemContent>
          <TreeItem value="report">
            <TreeItemTrigger>
              <File className="h-4 w-4 mr-2" />
              Annual Report.pdf
            </TreeItemTrigger>
          </TreeItem>
        </TreeItemContent>
      </TreeItem>
    </TreeItemContent>
  </TreeItem>
</TreeView>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>TreeView</h3>
              <ul>
                <li><code>defaultExpanded</code> - Array of item values that should be expanded by default</li>
                <li><code>expanded</code> - Array of controlled expanded item values</li>
                <li><code>onExpandedChange</code> - Event handler called when expanded items change</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>TreeItem</h3>
              <ul>
                <li><code>value</code> - A unique value for the tree item</li>
                <li><code>disabled</code> - When true, prevents the user from interacting with the item</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>TreeItemTrigger</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>children</code> - The content to display in the trigger</li>
              </ul>

              <h3>TreeItemContent</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>children</code> - The nested tree items to display when expanded</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Use clear hierarchy</li>
                    <li>Provide visual indicators</li>
                    <li>Keep nesting reasonable</li>
                    <li>Use consistent styling</li>
                    <li>Consider performance</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>File systems</li>
                    <li>Navigation menus</li>
                    <li>Organization charts</li>
                    <li>Category trees</li>
                    <li>Nested settings</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>ARIA attributes</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>Clear visual states</li>
                  </ul>
                </li>
                <li>Performance:
                  <ul>
                    <li>Lazy loading</li>
                    <li>Virtual scrolling</li>
                    <li>Efficient updates</li>
                    <li>Memory management</li>
                    <li>State optimization</li>
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