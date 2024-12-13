"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Accordion</h1>
          <p className="text-xl text-muted-foreground">
            A vertically stacked set of interactive headings that each reveal a section of content.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is NexUI?</AccordionTrigger>
                <AccordionContent>
                  NexUI is a collection of modern, accessible, and beautiful React components built with Radix UI and Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I install NexUI?</AccordionTrigger>
                <AccordionContent>
                  You can install NexUI using npm or yarn. Run `npm install @nexui/react` or `yarn add @nexui/react` to get started.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is NexUI accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes! NexUI is built on top of Radix UI primitives, ensuring proper accessibility features like ARIA attributes and keyboard navigation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Multiple Items Open</h2>
            <Accordion type="multiple">
              <AccordionItem value="feature-1">
                <AccordionTrigger>Modern Design</AccordionTrigger>
                <AccordionContent>
                  Clean, minimal, and modern design principles for a professional look.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="feature-2">
                <AccordionTrigger>Customization</AccordionTrigger>
                <AccordionContent>
                  Highly customizable components with Tailwind CSS and CSS variables.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="feature-3">
                <AccordionTrigger>Type Safety</AccordionTrigger>
                <AccordionContent>
                  Written in TypeScript for better developer experience and type safety.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Single item open
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple items open
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I customize it?</AccordionTrigger>
    <AccordionContent>
      Yes. It's built with Tailwind CSS.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Accordion</h3>
              <ul>
                <li><code>type</code> - Determines whether one or multiple items can be opened ("single" | "multiple")</li>
                <li><code>collapsible</code> - When type is "single", allows closing content when clicking trigger</li>
                <li><code>value</code> - The controlled value(s) of the opened item(s)</li>
                <li><code>defaultValue</code> - The default value(s) of the opened item(s)</li>
              </ul>

              <h3>AccordionItem</h3>
              <ul>
                <li><code>value</code> - Unique identifier for the item</li>
                <li><code>disabled</code> - When true, prevents user interaction</li>
              </ul>

              <h3>AccordionTrigger</h3>
              <ul>
                <li><code>children</code> - The content to display in the trigger</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>AccordionContent</h3>
              <ul>
                <li><code>children</code> - The content to display when the item is open</li>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>forceMount</code> - Forces mounting when true</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Use clear and concise trigger text</li>
                    <li>Keep content focused and relevant</li>
                    <li>Consider content hierarchy</li>
                    <li>Use appropriate spacing</li>
                    <li>Maintain consistent styling</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>FAQs</li>
                    <li>Navigation menus</li>
                    <li>Settings panels</li>
                    <li>Product details</li>
                    <li>Category filters</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Proper ARIA attributes</li>
                    <li>Keyboard navigation</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                  </ul>
                </li>
                <li>Animation:
                  <ul>
                    <li>Smooth height transitions</li>
                    <li>Chevron rotation</li>
                    <li>Content fade effects</li>
                    <li>Focus transitions</li>
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