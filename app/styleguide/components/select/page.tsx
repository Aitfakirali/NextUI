"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Select</h1>
          <p className="text-xl text-muted-foreground">
            Displays a list of options for the user to pick from.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Groups</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a food" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Vegetables</SelectLabel>
                  <SelectItem value="carrot">Carrot</SelectItem>
                  <SelectItem value="potato">Potato</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Meat</SelectLabel>
                  <SelectItem value="chicken">Chicken</SelectItem>
                  <SelectItem value="beef">Beef</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled State</h2>
            <Select disabled>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option">Option</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Basic usage
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// With groups
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a food" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="potato">Potato</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Select</h3>
              <ul>
                <li><code>value</code> - The controlled value of the select</li>
                <li><code>defaultValue</code> - The default value of the select</li>
                <li><code>onValueChange</code> - Event handler called when the value changes</li>
                <li><code>disabled</code> - When true, prevents user interaction</li>
                <li><code>required</code> - When true, indicates a value must be selected</li>
                <li><code>name</code> - The name of the select</li>
              </ul>

              <h3>SelectTrigger</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>asChild</code> - Change the underlying element</li>
              </ul>

              <h3>SelectContent</h3>
              <ul>
                <li><code>position</code> - The positioning mode</li>
                <li><code>side</code> - The preferred side</li>
                <li><code>sideOffset</code> - The distance from the trigger</li>
                <li><code>align</code> - The preferred alignment</li>
                <li><code>alignOffset</code> - The distance from the alignment edge</li>
              </ul>

              <h3>SelectItem</h3>
              <ul>
                <li><code>value</code> - The value of the item</li>
                <li><code>disabled</code> - When true, prevents selection</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use select when users need to choose one option from a list</li>
                <li>Group related options together using SelectGroup</li>
                <li>Provide clear labels for groups and items</li>
                <li>Use meaningful placeholder text</li>
                <li>Consider the following patterns:
                  <ul>
                    <li>Simple selection with flat list</li>
                    <li>Grouped options for better organization</li>
                    <li>Disabled items for unavailable options</li>
                  </ul>
                </li>
                <li>Ensure proper keyboard navigation</li>
                <li>Consider mobile usability</li>
                <li>Use appropriate width for the content</li>
                <li>Position the dropdown appropriately</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 