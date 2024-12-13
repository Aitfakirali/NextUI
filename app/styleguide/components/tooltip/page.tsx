"use client"

import * as React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { PlusCircle, HelpCircle, Settings } from "lucide-react"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function TooltipPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
          <p className="text-xl text-muted-foreground">
            A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Icons</h2>
            <div className="flex gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add new item</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Help and documentation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Settings and preferences</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

// Basic tooltip
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

// With icon
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="outline">
        <PlusCircle className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add new item</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Tooltip</h3>
              <ul>
                <li><code>defaultOpen</code> - The default open state</li>
                <li><code>open</code> - The controlled open state</li>
                <li><code>onOpenChange</code> - Event handler called when open state changes</li>
                <li><code>delayDuration</code> - Delay duration for showing tooltip</li>
                <li><code>disableHoverableContent</code> - Disable hoverable content</li>
              </ul>

              <h3>TooltipContent</h3>
              <ul>
                <li><code>side</code> - The preferred side ("top" | "right" | "bottom" | "left")</li>
                <li><code>sideOffset</code> - The distance from the trigger</li>
                <li><code>align</code> - The preferred alignment ("start" | "center" | "end")</li>
                <li><code>alignOffset</code> - The distance from the alignment edge</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use tooltips to:
                  <ul>
                    <li>Provide additional context</li>
                    <li>Explain icon-only buttons</li>
                    <li>Show keyboard shortcuts</li>
                    <li>Display truncated text</li>
                  </ul>
                </li>
                <li>Best practices:
                  <ul>
                    <li>Keep content concise and helpful</li>
                    <li>Position tooltips consistently</li>
                    <li>Use appropriate delay duration</li>
                    <li>Avoid using for essential information</li>
                    <li>Consider mobile touch interactions</li>
                  </ul>
                </li>
                <li>Accessibility considerations:
                  <ul>
                    <li>Support keyboard focus</li>
                    <li>Use proper ARIA attributes</li>
                    <li>Ensure sufficient contrast</li>
                    <li>Make content readable</li>
                  </ul>
                </li>
                <li>Common patterns:
                  <ul>
                    <li>Icon button labels</li>
                    <li>Feature explanations</li>
                    <li>Keyboard shortcut hints</li>
                    <li>Additional context for actions</li>
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