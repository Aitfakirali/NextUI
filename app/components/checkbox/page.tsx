"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { CodePreview } from "@/components/code-preview"

export default function CheckboxPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Checkbox</h1>
        <p className="text-xl text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <CodePreview
            preview={
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </label>
</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Checkbox Group</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="option1" />
                  <label
                    htmlFor="option1"
                    className="text-sm font-medium leading-none"
                  >
                    Option 1
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option2" />
                  <label
                    htmlFor="option2"
                    className="text-sm font-medium leading-none"
                  >
                    Option 2
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option3" />
                  <label
                    htmlFor="option3"
                    className="text-sm font-medium leading-none"
                  >
                    Option 3
                  </label>
                </div>
              </div>
            }
            code={`<div className="grid gap-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="option1" />
    <label htmlFor="option1" className="text-sm font-medium leading-none">
      Option 1
    </label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option2" />
    <label htmlFor="option2" className="text-sm font-medium leading-none">
      Option 2
    </label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option3" />
    <label htmlFor="option3" className="text-sm font-medium leading-none">
      Option 3
    </label>
  </div>
</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
          <CodePreview
            preview={
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <label
                  htmlFor="disabled"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Disabled checkbox
                </label>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <label
    htmlFor="disabled"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Disabled checkbox
  </label>
</div>`}
          />
        </section>
      </div>
    </div>
  )
} 