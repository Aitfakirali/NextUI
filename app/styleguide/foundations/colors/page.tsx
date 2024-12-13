"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"

export default function ColorsPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Colors</h1>
          <p className="text-xl text-muted-foreground">
            Our color system is designed to be accessible and consistent across all platforms.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Brand</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-primary" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">primary</span>
                  <span className="text-sm text-muted-foreground">#000000</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-secondary" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">secondary</span>
                  <span className="text-sm text-muted-foreground">#666666</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-accent" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">accent</span>
                  <span className="text-sm text-muted-foreground">#0070F3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Background</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-background" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">background</span>
                  <span className="text-sm text-muted-foreground">#FFFFFF</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-muted" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">muted</span>
                  <span className="text-sm text-muted-foreground">#F5F5F5</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-card" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">card</span>
                  <span className="text-sm text-muted-foreground">#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Text</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-foreground" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">foreground</span>
                  <span className="text-sm text-muted-foreground">#000000</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-muted-foreground" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">muted-foreground</span>
                  <span className="text-sm text-muted-foreground">#666666</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-accent-foreground" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">accent-foreground</span>
                  <span className="text-sm text-muted-foreground">#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
          <div className="prose prose-gray dark:prose-invert">
            <p>
              Our color system uses CSS variables for easy customization and dark mode support.
              You can override these colors in your CSS or Tailwind config.
            </p>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`:root {
  --primary: #000000;
  --secondary: #666666;
  --accent: #0070F3;
  --background: #FFFFFF;
  --foreground: #000000;
  /* ... */
}`}</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 