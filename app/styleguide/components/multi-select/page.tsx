"use client"

import * as React from "react"
import { MultiSelect } from "@/components/ui/multi-select"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Label } from "@/components/ui/label"

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Qwik", value: "qwik" },
  { label: "Astro", value: "astro" },
]

const languages = [
  { label: "TypeScript", value: "ts" },
  { label: "JavaScript", value: "js" },
  { label: "Python", value: "py" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
  { label: "Rust", value: "rust" },
  { label: "Go", value: "go" },
  { label: "Ruby", value: "ruby" },
]

export default function MultiSelectPage() {
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>(["ts", "js"])

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Multi Select</h1>
          <p className="text-xl text-muted-foreground">
            A searchable multiple selection input with tags.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="w-[350px]">
              <MultiSelect
                options={frameworks}
                selected={selectedFrameworks}
                onChange={setSelectedFrameworks}
                placeholder="Select frameworks..."
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Label</h2>
            <div className="w-[350px] space-y-2">
              <Label>Programming Languages</Label>
              <MultiSelect
                options={languages}
                selected={selectedLanguages}
                onChange={setSelectedLanguages}
                placeholder="Select languages..."
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Disabled Options</h2>
            <div className="w-[350px]">
              <MultiSelect
                options={[
                  { label: "Apple", value: "apple" },
                  { label: "Banana", value: "banana" },
                  { label: "Orange", value: "orange", disabled: true },
                  { label: "Grape", value: "grape" },
                  { label: "Pear", value: "pear", disabled: true },
                ]}
                selected={["apple"]}
                onChange={() => {}}
                placeholder="Select fruits..."
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled State</h2>
            <div className="w-[350px]">
              <MultiSelect
                options={frameworks}
                selected={["next", "react"]}
                onChange={() => {}}
                placeholder="Select frameworks..."
                disabled
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { MultiSelect } from "@/components/ui/multi-select"
import { Label } from "@/components/ui/label"

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  // ...
]

// Basic multi-select
const [selected, setSelected] = React.useState<string[]>([])

<MultiSelect
  options={frameworks}
  selected={selected}
  onChange={setSelected}
  placeholder="Select frameworks..."
/>

// With label
<div className="space-y-2">
  <Label>Programming Languages</Label>
  <MultiSelect
    options={languages}
    selected={selectedLanguages}
    onChange={setSelectedLanguages}
    placeholder="Select languages..."
  />
</div>

// With disabled options
<MultiSelect
  options={[
    { label: "Apple", value: "apple" },
    { label: "Orange", value: "orange", disabled: true },
    // ...
  ]}
  selected={selected}
  onChange={setSelected}
  placeholder="Select fruits..."
/>

// Disabled state
<MultiSelect
  options={frameworks}
  selected={["next", "react"]}
  onChange={() => {}}
  disabled
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>MultiSelect</h3>
              <ul>
                <li><code>options</code> - Array of options with label and value</li>
                <li><code>selected</code> - Array of selected values</li>
                <li><code>onChange</code> - Callback function when selection changes</li>
                <li><code>placeholder</code> - Placeholder text when no options are selected</li>
                <li><code>searchPlaceholder</code> - Placeholder text for the search input</li>
                <li><code>emptyMessage</code> - Message shown when no options match the search</li>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>disabled</code> - Whether the multi-select is disabled</li>
              </ul>

              <h3>Option</h3>
              <ul>
                <li><code>label</code> - Display text for the option</li>
                <li><code>value</code> - Unique value for the option</li>
                <li><code>disabled</code> - Whether the option is disabled</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Clear labeling</li>
                    <li>Meaningful placeholders</li>
                    <li>Search functionality</li>
                    <li>Tag management</li>
                    <li>Keyboard navigation</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Filter selection</li>
                    <li>Tag assignment</li>
                    <li>Category selection</li>
                    <li>Permission management</li>
                    <li>Feature toggles</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>ARIA labels</li>
                    <li>Keyboard support</li>
                    <li>Screen readers</li>
                    <li>Focus management</li>
                    <li>Clear feedback</li>
                  </ul>
                </li>
                <li>Performance:
                  <ul>
                    <li>Efficient rendering</li>
                    <li>Search optimization</li>
                    <li>State management</li>
                    <li>Memory usage</li>
                    <li>Event handling</li>
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