"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ButtonPage() {
  return (
    <div className="space-y-6">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          A clickable button component with various styles and states.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Usage</h2>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>{`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <Button>Click me</Button>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Examples</h2>
          <Tabs defaultValue="variants" className="space-y-4">
            <TabsList>
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="sizes">Sizes</TabsTrigger>
              <TabsTrigger value="states">States</TabsTrigger>
            </TabsList>
            <TabsContent value="variants" className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>{`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="sizes" className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <span className="h-4 w-4">×</span>
                </Button>
              </div>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="states" className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button asChild>
                  <a href="#">As Link</a>
                </Button>
              </div>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>{`<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button asChild>
  <a href="#">As Link</a>
</Button>`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Props</h2>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div>
                <h3 className="font-medium">variant</h3>
                <p className="text-sm text-muted-foreground">
                  Defines the visual style of the button. Available options: "default", "secondary", "outline", "ghost", "link", "destructive"
                </p>
              </div>
              <div>
                <h3 className="font-medium">size</h3>
                <p className="text-sm text-muted-foreground">
                  Controls the size of the button. Available options: "default", "sm", "lg", "icon"
                </p>
              </div>
              <div>
                <h3 className="font-medium">asChild</h3>
                <p className="text-sm text-muted-foreground">
                  When true, the component will render as its child while maintaining button styles
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 