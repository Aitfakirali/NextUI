"use client"

import * as React from "react"
import { TagInput } from "@/components/ui/tag-input"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Label } from "@/components/ui/label"

export default function TagInputPage() {
  const [tags1, setTags1] = React.useState<string[]>([])
  const [tags2, setTags2] = React.useState<string[]>(["react", "nextjs"])
  const [tags3, setTags3] = React.useState<string[]>([])

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Tag Input</h1>
          <p className="text-xl text-muted-foreground">
            An input component for managing multiple tags or labels.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="w-[350px]">
              <TagInput
                tags={tags1}
                setTags={setTags1}
                placeholder="Enter tags..."
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Label</h2>
            <div className="w-[350px] space-y-2">
              <Label>Technologies</Label>
              <TagInput
                tags={tags2}
                setTags={setTags2}
                placeholder="Add technology..."
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Validation</h2>
            <div className="w-[350px]">
              <TagInput
                tags={tags3}
                setTags={setTags3}
                placeholder="Add programming language..."
                validate={(tag) => {
                  // Only allow letters and hyphens
                  return /^[a-zA-Z-]+$/.test(tag)
                }}
                maxTags={5}
                minLength={2}
                maxLength={15}
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Only letters and hyphens allowed. Max 5 tags, 2-15 characters each.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled State</h2>
            <div className="w-[350px]">
              <TagInput
                tags={["react", "typescript"]}
                setTags={() => {}}
                placeholder="Add tags..."
                disabled
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { TagInput } from "@/components/ui/tag-input"
import { Label } from "@/components/ui/label"

// Basic tag input
const [tags, setTags] = React.useState<string[]>([])

<TagInput
  tags={tags}
  setTags={setTags}
  placeholder="Enter tags..."
/>

// With label
<div className="space-y-2">
  <Label>Technologies</Label>
  <TagInput
    tags={tags}
    setTags={setTags}
    placeholder="Add technology..."
  />
</div>

// With validation
<TagInput
  tags={tags}
  setTags={setTags}
  placeholder="Add programming language..."
  validate={(tag) => /^[a-zA-Z-]+$/.test(tag)}
  maxTags={5}
  minLength={2}
  maxLength={15}
/>

// Disabled state
<TagInput
  tags={["react", "typescript"]}
  setTags={() => {}}
  disabled
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>TagInput</h3>
              <ul>
                <li><code>tags</code> - Array of current tags</li>
                <li><code>setTags</code> - Function to update tags</li>
                <li><code>placeholder</code> - Input placeholder text</li>
                <li><code>maxTags</code> - Maximum number of tags allowed</li>
                <li><code>minLength</code> - Minimum length for each tag</li>
                <li><code>maxLength</code> - Maximum length for each tag</li>
                <li><code>validate</code> - Custom validation function</li>
                <li><code>onTagAdd</code> - Callback when a tag is added</li>
                <li><code>onTagRemove</code> - Callback when a tag is removed</li>
                <li><code>disabled</code> - Whether the input is disabled</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Clear placeholders</li>
                    <li>Input validation</li>
                    <li>Tag limits</li>
                    <li>Visual feedback</li>
                    <li>Error handling</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Blog post tags</li>
                    <li>Skill selection</li>
                    <li>Category assignment</li>
                    <li>Filter creation</li>
                    <li>Label management</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard support</li>
                    <li>Screen readers</li>
                    <li>Focus management</li>
                    <li>ARIA labels</li>
                    <li>Clear feedback</li>
                  </ul>
                </li>
                <li>Interactions:
                  <ul>
                    <li>Enter to add</li>
                    <li>Backspace to remove</li>
                    <li>Click to remove</li>
                    <li>Paste support</li>
                    <li>Duplicate prevention</li>
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