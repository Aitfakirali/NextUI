"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { AnimatedComponent } from "@/components/ui/animated-component"

const typography = {
  headings: [
    {
      name: "Display",
      className: "text-7xl font-bold",
      size: "text-7xl",
      weight: "font-bold",
      lineHeight: "leading-tight",
      sample: "Display",
    },
    {
      name: "H1",
      className: "text-5xl font-bold",
      size: "text-5xl",
      weight: "font-bold",
      lineHeight: "leading-tight",
      sample: "Heading 1",
    },
    {
      name: "H2",
      className: "text-4xl font-semibold",
      size: "text-4xl",
      weight: "font-semibold",
      lineHeight: "leading-tight",
      sample: "Heading 2",
    },
    {
      name: "H3",
      className: "text-3xl font-semibold",
      size: "text-3xl",
      weight: "font-semibold",
      lineHeight: "leading-tight",
      sample: "Heading 3",
    },
    {
      name: "H4",
      className: "text-2xl font-semibold",
      size: "text-2xl",
      weight: "font-semibold",
      lineHeight: "leading-tight",
      sample: "Heading 4",
    },
  ],
  body: [
    {
      name: "Large",
      className: "text-lg",
      size: "text-lg",
      weight: "font-normal",
      lineHeight: "leading-relaxed",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "Base",
      className: "text-base",
      size: "text-base",
      weight: "font-normal",
      lineHeight: "leading-relaxed",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "Small",
      className: "text-sm",
      size: "text-sm",
      weight: "font-normal",
      lineHeight: "leading-relaxed",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "XSmall",
      className: "text-xs",
      size: "text-xs",
      weight: "font-normal",
      lineHeight: "leading-relaxed",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
  ],
  weights: [
    {
      name: "Light",
      className: "font-light",
      weight: "300",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "Regular",
      className: "font-normal",
      weight: "400",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "Medium",
      className: "font-medium",
      weight: "500",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "Semibold",
      className: "font-semibold",
      weight: "600",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "Bold",
      className: "font-bold",
      weight: "700",
      sample: "The quick brown fox jumps over the lazy dog.",
    },
  ],
}

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
          <p className="text-xl text-muted-foreground">
            Our type system is designed to be clear, flexible and easy to use
            across all platforms.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Headings</h2>
          <div className="space-y-8">
            {typography.headings.map((heading) => (
              <div key={heading.name} className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {heading.name}
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>Size: {heading.size}</p>
                    <p>Weight: {heading.weight}</p>
                    <p>Line Height: {heading.lineHeight}</p>
                  </div>
                </div>
                <div className={heading.className}>{heading.sample}</div>
              </div>
            ))}
          </div>
        </Card>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Body Text</h2>
          <div className="space-y-8">
            {typography.body.map((text) => (
              <div key={text.name} className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {text.name}
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>Size: {text.size}</p>
                    <p>Weight: {text.weight}</p>
                    <p>Line Height: {text.lineHeight}</p>
                  </div>
                </div>
                <div className={text.className}>{text.sample}</div>
              </div>
            ))}
          </div>
        </Card>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Font Weights</h2>
          <div className="space-y-8">
            {typography.weights.map((weight) => (
              <div key={weight.name} className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {weight.name}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Weight: {weight.weight}
                  </p>
                </div>
                <div className={weight.className}>{weight.sample}</div>
              </div>
            ))}
          </div>
        </Card>
      </AnimatedComponent>

      <AnimatedComponent animation="slideUp" delay={0.4}>
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Usage</h2>
          <div className="prose prose-gray dark:prose-invert">
            <p>
              Our typography system uses the Inter font family by default, with
              system fonts as fallbacks. All text styles are available as Tailwind
              classes.
            </p>
            <h3>Font Family</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;`}</code>
            </pre>
            <h3>Tailwind Config</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
    },
  },
}`}</code>
            </pre>
          </div>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 