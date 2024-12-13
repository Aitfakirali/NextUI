"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-lg text-muted-foreground">
          Get started with NexUI - a modern React component library built with Radix UI and Tailwind CSS.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <Tabs defaultValue="cli" className="space-y-4">
          <TabsList>
            <TabsTrigger value="cli">CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="cli" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm text-muted-foreground">
                <code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code>
              </pre>
            </div>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm text-muted-foreground">
                <code>npx @nexui/cli@latest init</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="manual" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm text-muted-foreground">
                <code>npm install @nexui/react @radix-ui/react-icons class-variance-authority clsx tailwind-merge</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Features</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Built with React Server Components in mind</li>
            <li>Type-safe with TypeScript</li>
            <li>Accessible components using Radix UI primitives</li>
            <li>Beautiful design with Tailwind CSS</li>
            <li>Dark mode support</li>
            <li>Customizable with CSS variables</li>
            <li>Animations with Framer Motion</li>
          </ul>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Button variant="outline" className="h-auto flex-col items-start p-4 space-y-2" asChild>
              <a href="/docs/components">
                <div className="text-lg font-semibold">Browse Components</div>
                <div className="text-sm text-muted-foreground">Explore our collection of beautiful components</div>
              </a>
            </Button>
            <Button variant="outline" className="h-auto flex-col items-start p-4 space-y-2" asChild>
              <a href="/docs/theming">
                <div className="text-lg font-semibold">Customize Theme</div>
                <div className="text-sm text-muted-foreground">Learn how to customize the look and feel</div>
              </a>
            </Button>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 