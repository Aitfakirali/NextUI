"use client"

import { CodePreview } from "@/components/code-preview"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is NexUI?",
    answer: "NexUI is a modern UI component library built with React, Radix UI, and Tailwind CSS. It provides a set of accessible, customizable, and reusable components for building modern web applications."
  },
  {
    question: "Is it accessible?",
    answer: "Yes. All components follow WAI-ARIA guidelines and are thoroughly tested for keyboard navigation and screen reader compatibility."
  },
  {
    question: "Can I customize the components?",
    answer: "Absolutely! All components are built with Tailwind CSS and can be easily customized using Tailwind's utility classes or by extending the default theme."
  }
]

export default function AccordionPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">Accordion</h1>
        <p className="text-xl text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      {/* Usage Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Accordions are commonly used to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Organize content into collapsible sections</li>
            <li>Reduce visual clutter in interfaces</li>
            <li>Present FAQs or help documentation</li>
            <li>Group related information</li>
          </ul>
        </div>
      </div>

      {/* Examples Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        <section>
          <h3 className="text-lg font-medium mb-4">Single Item Open</h3>
          <CodePreview
            preview={
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            }
            code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is NexUI?</AccordionTrigger>
    <AccordionContent>
      NexUI is a modern UI component library built with React, Radix UI, 
      and Tailwind CSS. It provides a set of accessible, customizable, 
      and reusable components for building modern web applications.
    </AccordionContent>
  </AccordionItem>
  {/* More items... */}
</Accordion>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Multiple Items Open</h3>
          <CodePreview
            preview={
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="customization">
                  <AccordionTrigger>Customization Options</AccordionTrigger>
                  <AccordionContent>
                    You can customize colors, typography, spacing, and more using Tailwind CSS classes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="installation">
                  <AccordionTrigger>Installation Process</AccordionTrigger>
                  <AccordionContent>
                    Install using npm or yarn, then import the components you need.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="updates">
                  <AccordionTrigger>Regular Updates</AccordionTrigger>
                  <AccordionContent>
                    We regularly update components with new features and bug fixes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            }
            code={`<Accordion type="multiple">
  <AccordionItem value="customization">
    <AccordionTrigger>Customization Options</AccordionTrigger>
    <AccordionContent>
      You can customize colors, typography, spacing, and more using Tailwind CSS classes.
    </AccordionContent>
  </AccordionItem>
  {/* More items... */}
</Accordion>`}
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
                  <td className="px-4 py-3 text-sm font-mono">type</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    'single' | 'multiple'
                  </td>
                  <td className="px-4 py-3 text-sm">'single'</td>
                  <td className="px-4 py-3 text-sm">Determines if multiple sections can be open.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">collapsible</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">boolean</td>
                  <td className="px-4 py-3 text-sm">false</td>
                  <td className="px-4 py-3 text-sm">Allow closing all sections when type is 'single'.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">value</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">string | string[]</td>
                  <td className="px-4 py-3 text-sm">-</td>
                  <td className="px-4 py-3 text-sm">The controlled value(s) of the opened item(s).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 