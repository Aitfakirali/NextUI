"use client"

import { Input } from "@/components/ui/input"
import { CodePreview } from "@/components/code-preview"

export default function InputPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Input</h1>
        <p className="text-xl text-muted-foreground">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Default Input</h2>
          <CodePreview
            preview={<Input type="text" placeholder="Enter your name" />}
            code={`<Input type="text" placeholder="Enter your name" />`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Input Variants</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="number" placeholder="Age" />
                <Input type="search" placeholder="Search..." />
                <Input disabled type="text" placeholder="Disabled input" />
              </div>
            }
            code={`<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Age" />
<Input type="search" placeholder="Search..." />
<Input disabled type="text" placeholder="Disabled input" />`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Labels</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="username">Username</label>
                  <Input id="username" placeholder="Enter username" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="Enter email" />
                </div>
              </div>
            }
            code={`<div className="grid gap-2">
  <label htmlFor="username">Username</label>
  <Input id="username" placeholder="Enter username" />
</div>
<div className="grid gap-2">
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="Enter email" />
</div>`}
          />
        </section>
      </div>
    </div>
  )
} 