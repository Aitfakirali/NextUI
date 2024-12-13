"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Search, Mail, Lock, User } from "lucide-react"

export default function InputPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Input</h1>
          <p className="text-xl text-muted-foreground">
            A flexible input component for collecting user data with various styles and states.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Examples</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="default">Default Input</Label>
                <Input id="default" placeholder="Enter your text" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" placeholder="Disabled input" disabled />
              </div>

              <div className="space-y-2">
                <Label htmlFor="with-icon">Input with Icon</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="with-icon" placeholder="Search..." className="pl-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Input Types</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Input</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password Input</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="number">Number Input</Label>
                <Input id="number" type="number" placeholder="Enter a number" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Form Example</h2>
            <div className="space-y-4 rounded-lg border p-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="username" placeholder="Enter your username" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="form-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="form-email" type="email" placeholder="Enter your email" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="form-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="form-password" type="password" placeholder="Enter your password" className="pl-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

// Basic input
<Input placeholder="Enter your text" />

// Disabled input
<Input placeholder="Disabled input" disabled />

// Input with icon
<div className="relative">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-10" />
</div>

// Input with label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <p>The Input component extends the HTML input element props with the following additional props:</p>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>type</code> - Input type (text, email, password, etc.)</li>
                <li><code>disabled</code> - Whether the input is disabled</li>
                <li><code>placeholder</code> - Placeholder text</li>
                <li><code>value</code> - Controlled input value</li>
                <li><code>defaultValue</code> - Default input value</li>
                <li><code>onChange</code> - Change event handler</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Always use labels for accessibility</li>
                    <li>Provide clear placeholder text</li>
                    <li>Use appropriate input types</li>
                    <li>Include validation feedback</li>
                    <li>Consider mobile input methods</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Use proper ARIA labels</li>
                    <li>Ensure keyboard navigation</li>
                    <li>Provide error messages</li>
                    <li>Maintain sufficient contrast</li>
                  </ul>
                </li>
                <li>Common patterns:
                  <ul>
                    <li>Form fields</li>
                    <li>Search inputs</li>
                    <li>Login/Registration forms</li>
                    <li>Data entry interfaces</li>
                  </ul>
                </li>
                <li>Validation:
                  <ul>
                    <li>Client-side validation</li>
                    <li>Real-time feedback</li>
                    <li>Error state styling</li>
                    <li>Success indicators</li>
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