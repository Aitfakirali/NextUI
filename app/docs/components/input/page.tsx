"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InputPage() {
  return (
    <div className="space-y-6">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground">
          Displays a form input field or a component that looks like an input field.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Usage</h2>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>{`import { Input } from "@/components/ui/input"

export default function Example() {
  return <Input type="email" placeholder="Email" />
}`}</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Examples</h2>
          <Tabs defaultValue="types" className="space-y-4">
            <TabsList>
              <TabsTrigger value="types">Types</TabsTrigger>
              <TabsTrigger value="states">States</TabsTrigger>
              <TabsTrigger value="sizes">Sizes</TabsTrigger>
            </TabsList>
            <TabsContent value="types" className="space-y-4">
              <div className="grid gap-4">
                <Input type="text" placeholder="Text" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="number" placeholder="Number" />
                <Input type="search" placeholder="Search" />
              </div>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>{`<Input type="text" placeholder="Text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="search" placeholder="Search" />`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="states" className="space-y-4">
              <div className="grid gap-4">
                <Input placeholder="Default" />
                <Input placeholder="Disabled" disabled />
                <Input placeholder="With Label" aria-label="Example input" />
                <Input placeholder="With Error" className="border-red-500" />
              </div>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>{`<Input placeholder="Default" />
<Input placeholder="Disabled" disabled />
<Input placeholder="With Label" aria-label="Example input" />
<Input placeholder="With Error" className="border-red-500" />`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="sizes" className="space-y-4">
              <div className="grid gap-4">
                <Input placeholder="Default size" />
                <Input placeholder="Custom size" className="h-14 text-lg" />
                <Input placeholder="Full width" className="w-full" />
              </div>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>{`<Input placeholder="Default size" />
<Input placeholder="Custom size" className="h-14 text-lg" />
<Input placeholder="Full width" className="w-full" />`}</code>
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
                <h3 className="font-medium">type</h3>
                <p className="text-sm text-muted-foreground">
                  The type of input (e.g., "text", "email", "password", etc.)
                </p>
              </div>
              <div>
                <h3 className="font-medium">placeholder</h3>
                <p className="text-sm text-muted-foreground">
                  The placeholder text shown when the input is empty
                </p>
              </div>
              <div>
                <h3 className="font-medium">disabled</h3>
                <p className="text-sm text-muted-foreground">
                  When true, prevents the user from interacting with the input
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 