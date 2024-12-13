"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Mail, Loader2 } from "lucide-react"

const variants = [
  {
    name: "Default",
    description: "The default button style.",
    variant: "default" as const,
  },
  {
    name: "Secondary",
    description: "Alternative button style.",
    variant: "secondary" as const,
  },
  {
    name: "Destructive",
    description: "Used for destructive actions.",
    variant: "destructive" as const,
  },
  {
    name: "Outline",
    description: "Button with an outline.",
    variant: "outline" as const,
  },
  {
    name: "Ghost",
    description: "Button without a background.",
    variant: "ghost" as const,
  },
  {
    name: "Link",
    description: "Button that looks like a link.",
    variant: "link" as const,
  },
]

const sizes = [
  {
    name: "Default",
    size: "default" as const,
  },
  {
    name: "Small",
    size: "sm" as const,
  },
  {
    name: "Large",
    size: "lg" as const,
  },
]

const examples = [
  {
    name: "With Icon",
    component: (
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    ),
  },
  {
    name: "Loading",
    component: (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
      </Button>
    ),
  },
  {
    name: "With Arrow",
    component: (
      <Button>
        Next Step <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
]

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-xl text-muted-foreground mt-2">
          A clickable element that triggers an action.
        </p>
      </AnimatedComponent>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Variants</h2>
            <div className="flex flex-wrap gap-4">
              {variants.map((item) => (
                <AnimatedComponent
                  key={item.variant}
                  animation="fadeIn"
                  className="flex flex-col items-center gap-2"
                >
                  <Button variant={item.variant}>{item.name}</Button>
                  <span className="text-sm text-muted-foreground">
                    {item.description}
                  </span>
                </AnimatedComponent>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Sizes</h2>
            <div className="flex flex-wrap gap-4 items-center">
              {sizes.map((item) => (
                <AnimatedComponent key={item.size} animation="fadeIn">
                  <Button size={item.size}>{item.name}</Button>
                </AnimatedComponent>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Examples</h2>
            <div className="flex flex-wrap gap-4">
              {examples.map((item) => (
                <AnimatedComponent key={item.name} animation="fadeIn">
                  {item.component}
                </AnimatedComponent>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card className="p-6">
            <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
              {`import { Button } from "@/components/ui/button"

// Default Button
<Button>Click me</Button>

// Button with variant
<Button variant="destructive">Delete</Button>

// Button with size
<Button size="lg">Large Button</Button>

// Button with icon
<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>

// Loading state
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
</Button>`}
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

      <AnimatedComponent animation="slideUp">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-2">Usage</h2>
          <p className="text-muted-foreground mb-4">
            Import the Button component and use it in your project:
          </p>
          <pre className="text-sm bg-muted p-4 rounded-lg">
            {`import { Button } from "@/components/ui/button"`}
          </pre>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 