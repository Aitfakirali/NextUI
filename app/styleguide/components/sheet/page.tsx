"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SheetPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Sheet</h1>
          <p className="text-xl text-muted-foreground">
            A modal dialog that slides in from the edge of the screen.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Side Examples</h2>
            <div className="grid grid-cols-2 gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Left Sheet</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the left side of the screen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Top Sheet</Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Top Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the top of the screen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Bottom Sheet</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Bottom Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the bottom of the screen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Right Sheet</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Right Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the right side of the screen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Basic sheet
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

// Sheet with custom side
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the left.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Sheet</h3>
              <ul>
                <li><code>defaultOpen</code> - The open state of the sheet when it is initially rendered</li>
                <li><code>open</code> - The controlled open state of the sheet</li>
                <li><code>onOpenChange</code> - Event handler called when the open state changes</li>
              </ul>

              <h3>SheetContent</h3>
              <ul>
                <li><code>side</code> - The side the sheet should appear from ("top" | "right" | "bottom" | "left")</li>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>children</code> - The content to display in the sheet</li>
              </ul>

              <h3>SheetTrigger</h3>
              <ul>
                <li><code>asChild</code> - Change the component to the HTML tag or custom component provided</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>SheetClose</h3>
              <ul>
                <li><code>asChild</code> - Change the component to the HTML tag or custom component provided</li>
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
                    <li>Use for secondary or supplementary content</li>
                    <li>Keep content focused and relevant</li>
                    <li>Provide clear close/dismiss actions</li>
                    <li>Consider mobile responsiveness</li>
                    <li>Use appropriate animations</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Navigation menus</li>
                    <li>Filter panels</li>
                    <li>Detail views</li>
                    <li>Form inputs</li>
                    <li>Settings panels</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>Focus management</li>
                    <li>ARIA attributes</li>
                    <li>Screen reader support</li>
                    <li>Dismissible overlay</li>
                  </ul>
                </li>
                <li>Responsive design:
                  <ul>
                    <li>Adapts to screen size</li>
                    <li>Touch-friendly targets</li>
                    <li>Gesture support</li>
                    <li>Viewport considerations</li>
                    <li>Content scaling</li>
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