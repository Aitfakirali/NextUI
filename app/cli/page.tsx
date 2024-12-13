"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CLIPage() {
  return (
    <div className="space-y-6">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">CLI</h1>
        <p className="text-lg text-muted-foreground">
          Use the NexUI CLI to add components to your project.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Installation</h2>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>npx @nexui/cli@latest add</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Usage</h2>
          <Tabs defaultValue="add" className="space-y-4">
            <TabsList>
              <TabsTrigger value="add">add</TabsTrigger>
              <TabsTrigger value="init">init</TabsTrigger>
              <TabsTrigger value="diff">diff</TabsTrigger>
            </TabsList>
            <TabsContent value="add" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>npx @nexui/cli@latest add [component]</code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                Add a component to your project. You will be prompted to select the components you want to add.
              </p>
            </TabsContent>
            <TabsContent value="init" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>npx @nexui/cli@latest init</code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                Initialize your project with the default configuration.
              </p>
            </TabsContent>
            <TabsContent value="diff" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>npx @nexui/cli@latest diff</code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                Check for differences between your local components and the registry.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Examples</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Add a button component:</p>
              <div className="rounded-md bg-muted p-4 mt-2">
                <pre className="text-sm text-muted-foreground">
                  <code>npx @nexui/cli@latest add button</code>
                </pre>
              </div>
            </div>
            <div>
              <p className="font-medium">Add multiple components:</p>
              <div className="rounded-md bg-muted p-4 mt-2">
                <pre className="text-sm text-muted-foreground">
                  <code>npx @nexui/cli@latest add button card avatar</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.4}>
        <Alert>
          <AlertDescription>
            The CLI will automatically handle installing dependencies and updating your configuration files.
          </AlertDescription>
        </Alert>
      </AnimatedComponent>
    </div>
  )
} 