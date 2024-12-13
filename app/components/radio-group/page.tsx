"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CodePreview } from "@/components/code-preview"

export default function RadioGroupPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">Radio Group</h1>
        <p className="text-xl text-muted-foreground">
          A set of checkable buttons where only one can be checked at a time.
        </p>
      </div>

      {/* Usage Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Radio Groups are used when:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Users need to select a single option from a list</li>
            <li>Options are mutually exclusive</li>
            <li>There are 2-7 options to choose from</li>
            <li>All options can be seen at once</li>
          </ul>
        </div>
      </div>

      {/* Examples Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        <section>
          <h3 className="text-lg font-medium mb-4">Basic Radio Group</h3>
          <CodePreview
            preview={
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Option Three</Label>
                </div>
              </RadioGroup>
            }
            code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">With Description</h3>
          <CodePreview
            preview={
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="comfortable" id="comfortable" className="mt-1" />
                  <div>
                    <Label htmlFor="comfortable" className="font-medium">Comfortable</Label>
                    <p className="text-sm text-muted-foreground">
                      Default spacing for better readability
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="compact" id="compact" className="mt-1" />
                  <div>
                    <Label htmlFor="compact" className="font-medium">Compact</Label>
                    <p className="text-sm text-muted-foreground">
                      Reduced spacing to show more content
                    </p>
                  </div>
                </div>
              </RadioGroup>
            }
            code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="comfortable" id="comfortable" className="mt-1" />
    <div>
      <Label htmlFor="comfortable" className="font-medium">Comfortable</Label>
      <p className="text-sm text-muted-foreground">
        Default spacing for better readability
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="compact" id="compact" className="mt-1" />
    <div>
      <Label htmlFor="compact" className="font-medium">Compact</Label>
      <p className="text-sm text-muted-foreground">
        Reduced spacing to show more content
      </p>
    </div>
  </div>
</RadioGroup>`}
          />
        </section>
      </div>

      {/* API Reference Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Props</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">value</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">string</td>
                  <td className="px-4 py-3 text-sm">-</td>
                  <td className="px-4 py-3 text-sm">The controlled value of the selected item.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">defaultValue</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">string</td>
                  <td className="px-4 py-3 text-sm">-</td>
                  <td className="px-4 py-3 text-sm">The default value when uncontrolled.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">onValueChange</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">function</td>
                  <td className="px-4 py-3 text-sm">-</td>
                  <td className="px-4 py-3 text-sm">Event handler called when the value changes.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 