"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ThemingPage() {
  return (
    <div className="space-y-6">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Theming</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to customize and theme your components.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">CSS Variables</h2>
          <p className="text-muted-foreground">
            NexUI uses CSS variables for theming. You can customize these variables in your CSS file.
          </p>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>{`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    /* Add other variables here */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* Dark theme variables */
  }
}`}</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Color Schemes</h2>
          <Tabs defaultValue="light" className="space-y-4">
            <TabsList>
              <TabsTrigger value="light">Light</TabsTrigger>
              <TabsTrigger value="dark">Dark</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <TabsContent value="light" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-10 w-full rounded-md bg-background"></div>
                  <p className="text-sm text-muted-foreground">Background</p>
                </div>
                <div className="space-y-2">
                  <div className="h-10 w-full rounded-md bg-primary"></div>
                  <p className="text-sm text-muted-foreground">Primary</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="dark" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-10 w-full rounded-md bg-zinc-950"></div>
                  <p className="text-sm text-muted-foreground">Background</p>
                </div>
                <div className="space-y-2">
                  <div className="h-10 w-full rounded-md bg-blue-600"></div>
                  <p className="text-sm text-muted-foreground">Primary</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="custom" className="space-y-4">
              <Alert>
                <AlertDescription>
                  You can create your own color scheme by modifying the CSS variables.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Typography</h2>
          <p className="text-muted-foreground">
            NexUI uses the Inter font by default. You can customize the font by modifying the font-family in your CSS.
          </p>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>{`import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 