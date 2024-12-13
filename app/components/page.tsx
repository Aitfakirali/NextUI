"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const components = [
  {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings.",
    href: "/components/accordion",
  },
  {
    name: "Alert",
    description: "Displays a callout for user attention.",
    href: "/components/alert",
  },
  {
    name: "Button",
    description: "Triggers an action or event.",
    href: "/components/button",
  },
  {
    name: "Card",
    description: "Container for related content and actions.",
    href: "/components/card",
  },
  {
    name: "Carousel",
    description: "Displays multiple pieces of content in a rotating view.",
    href: "/components/carousel",
  },
  {
    name: "Dialog",
    description: "Modal overlay for important content.",
    href: "/components/dialog",
  },
  {
    name: "Form",
    description: "Collection of form controls with validation.",
    href: "/components/form",
  },
  {
    name: "Slider",
    description: "Input control for selecting a value by sliding.",
    href: "/components/slider",
  },
  {
    name: "Tabs",
    description: "Organizes content into separate views.",
    href: "/components/tabs",
  },
  {
    name: "Toast",
    description: "Brief message that appears temporarily.",
    href: "/components/toast",
  },
]

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-xl text-muted-foreground mt-2">
          A collection of pre-built components ready for your next project.
        </p>
      </AnimatedComponent>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component, index) => (
          <AnimatedComponent
            key={component.name}
            animation="fadeIn"
            delay={index * 0.1}
          >
            <Link href={component.href}>
              <Card className="p-6 hover:bg-muted/50 transition-colors">
                <h2 className="font-semibold mb-2">{component.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </Card>
            </Link>
          </AnimatedComponent>
        ))}
      </div>

      <AnimatedComponent animation="slideUp" delay={0.4}>
        <Card className="p-6 border-dashed">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-xl font-semibold">Want to contribute?</h2>
            <p className="text-muted-foreground">
              Help us improve NexUI by contributing new components or improving existing ones.
            </p>
            <Button asChild>
              <a
                href="https://github.com/your-username/nexui"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 