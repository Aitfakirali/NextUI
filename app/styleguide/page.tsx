"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"

export default function StyleGuidePage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">NexUI Design System</h1>
          <p className="text-xl text-muted-foreground">
            A modern, accessible, and beautiful design system for building React applications.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Modern Design</h3>
            <p className="text-sm text-muted-foreground">
              Clean, minimal, and modern design principles for a professional look.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Accessibility</h3>
            <p className="text-sm text-muted-foreground">
              Built with accessibility in mind, following WAI-ARIA standards.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Customization</h3>
            <p className="text-sm text-muted-foreground">
              Highly customizable components with Tailwind CSS and CSS variables.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Dark Mode</h3>
            <p className="text-sm text-muted-foreground">
              Built-in dark mode support with seamless transitions.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">TypeScript</h3>
            <p className="text-sm text-muted-foreground">
              Written in TypeScript with full type safety and IntelliSense.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Animations</h3>
            <p className="text-sm text-muted-foreground">
              Smooth animations and transitions powered by Framer Motion.
            </p>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold">Getting Started</h2>
          <div className="prose prose-gray dark:prose-invert">
            <p>
              NexUI is a collection of reusable components built on top of React and
              Tailwind CSS. It provides a solid foundation for building modern web
              applications with a focus on accessibility and user experience.
            </p>
            <pre className="rounded-lg bg-muted p-4">
              <code>npm install @nexui/react</code>
            </pre>
            <p>
              Check out our documentation to learn more about installation,
              components, and customization options.
            </p>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 