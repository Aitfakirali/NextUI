"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { AnimatedComponent } from "@/components/ui/animated-component"

const spacingScales = [
  { name: "px", value: "1px", description: "1px - Hairline borders" },
  { name: "0.5", value: "0.125rem", description: "2px - Extra small spacing" },
  { name: "1", value: "0.25rem", description: "4px - Small spacing" },
  { name: "2", value: "0.5rem", description: "8px - Default gap" },
  { name: "3", value: "0.75rem", description: "12px - Medium spacing" },
  { name: "4", value: "1rem", description: "16px - Base spacing unit" },
  { name: "5", value: "1.25rem", description: "20px - Large spacing" },
  { name: "6", value: "1.5rem", description: "24px - Section spacing" },
  { name: "8", value: "2rem", description: "32px - Component spacing" },
  { name: "10", value: "2.5rem", description: "40px - Large component spacing" },
  { name: "12", value: "3rem", description: "48px - Container spacing" },
  { name: "16", value: "4rem", description: "64px - Section padding" },
  { name: "20", value: "5rem", description: "80px - Large section padding" },
  { name: "24", value: "6rem", description: "96px - Page spacing" },
]

const containerSizes = [
  {
    name: "sm",
    maxWidth: "640px",
    description: "Small container for content-focused layouts",
  },
  {
    name: "md",
    maxWidth: "768px",
    description: "Medium container for balanced layouts",
  },
  {
    name: "lg",
    maxWidth: "1024px",
    description: "Large container for rich content",
  },
  {
    name: "xl",
    maxWidth: "1280px",
    description: "Extra large container for full-width layouts",
  },
  {
    name: "2xl",
    maxWidth: "1536px",
    description: "Maximum width container",
  },
]

const gridExamples = [
  {
    name: "1 Column",
    className: "grid-cols-1",
    description: "Single column layout",
  },
  {
    name: "2 Columns",
    className: "grid-cols-2",
    description: "Two column layout",
  },
  {
    name: "3 Columns",
    className: "grid-cols-3",
    description: "Three column layout",
  },
  {
    name: "4 Columns",
    className: "grid-cols-4",
    description: "Four column layout",
  },
]

export default function SpacingPage() {
  return (
    <div className="space-y-12">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Spacing & Layout</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive guide to our spacing system and layout utilities.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Spacing Scale</h2>
          <div className="space-y-6">
            {spacingScales.map((scale) => (
              <div
                key={scale.name}
                className="grid items-center gap-4 lg:grid-cols-4"
              >
                <div className="space-y-1">
                  <p className="font-medium">Space {scale.name}</p>
                  <p className="text-sm text-muted-foreground">{scale.value}</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    {scale.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <div
                    className="bg-primary"
                    style={{
                      width: scale.value,
                      height: "24px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Container Sizes</h2>
          <div className="space-y-6">
            {containerSizes.map((size) => (
              <div
                key={size.name}
                className="grid items-center gap-4 lg:grid-cols-3"
              >
                <div className="space-y-1">
                  <p className="font-medium">Container {size.name}</p>
                  <p className="text-sm text-muted-foreground">{size.maxWidth}</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    {size.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Grid System</h2>
          <div className="space-y-8">
            {gridExamples.map((grid) => (
              <div key={grid.name} className="space-y-3">
                <div className="space-y-1">
                  <p className="font-medium">{grid.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {grid.description}
                  </p>
                </div>
                <div className={`grid gap-4 ${grid.className}`}>
                  {Array.from({ length: parseInt(grid.className.slice(-1)) }).map(
                    (_, i) => (
                      <div
                        key={i}
                        className="h-20 rounded-lg bg-muted p-4"
                      ></div>
                    )
                  )}
                </div>
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
              Our spacing and layout system is built on top of Tailwind CSS,
              providing a consistent and flexible way to manage space and structure
              in your applications.
            </p>
            <h3>Spacing Utilities</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`// Margin
<div className="m-4">All sides</div>
<div className="mx-4">Horizontal</div>
<div className="my-4">Vertical</div>
<div className="mt-4">Top</div>
<div className="mr-4">Right</div>
<div className="mb-4">Bottom</div>
<div className="ml-4">Left</div>

// Padding
<div className="p-4">All sides</div>
<div className="px-4">Horizontal</div>
<div className="py-4">Vertical</div>

// Gap
<div className="space-y-4">Vertical space between children</div>
<div className="space-x-4">Horizontal space between children</div>
<div className="gap-4">Grid gap</div>`}</code>
            </pre>
            <h3>Container</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`// Basic container
<div className="container mx-auto px-4">
  {/* Content */}
</div>

// Container with max-width
<div className="container mx-auto px-4 max-w-md">
  {/* Content */}
</div>`}</code>
            </pre>
            <h3>Grid System</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`// Basic grid
<div className="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive columns */}
</div>

// Auto-fit grid
<div className="grid grid-cols-auto-fit gap-4 min-[200px]">
  {/* Auto-fitting columns */}
</div>`}</code>
            </pre>
          </div>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 