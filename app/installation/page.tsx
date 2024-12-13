"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Prerequisites</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Node.js 16.8 or later</li>
            <li>Next.js 13 or later</li>
            <li>Tailwind CSS 3 or later</li>
            <li>TypeScript (recommended)</li>
          </ul>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Install Next.js</h2>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Install NexUI</h2>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>npm install @nexui/react @radix-ui/react-icons class-variance-authority clsx tailwind-merge</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.4}>
        <Alert>
          <AlertDescription>
            After installation, you can start using NexUI components in your app. Check out the components section for usage examples.
          </AlertDescription>
        </Alert>
      </AnimatedComponent>
    </div>
  )
}