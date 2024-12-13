"use client"

import { Button } from "@/components/ui/button"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { HoverCard } from "@/components/ui/hover-card"

export default function Home() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="text-4xl font-bold tracking-tight">NexUI</h1>
        <p className="text-xl text-muted-foreground">
          A collection of modern, accessible, and beautiful React components built with Radix UI and Tailwind CSS.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="slideRight" delay={0.1}>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <a href="/getting-started">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/your-username/nexui" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </AnimatedComponent>

      <div className="space-y-6">
        <AnimatedComponent animation="fadeIn" delay={0.2}>
          <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        </AnimatedComponent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedComponent
              key={feature.title}
              animation="bounce"
              delay={0.2 + index * 0.1}
            >
              <HoverCard imageUrl={feature.image}>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </HoverCard>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Accessible",
    description: "Built on top of Radix UI primitives for robust accessibility.",
    image: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Customizable",
    description: "Styled with Tailwind CSS for easy customization and theming.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Modern",
    description: "Built with modern tools and best practices in mind.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Type-Safe",
    description: "Written in TypeScript for better developer experience.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Beautiful",
    description: "Carefully crafted with beautiful animations and micro-interactions.",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Open Source",
    description: "Free and open source under the MIT license.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&auto=format&fit=crop&q=60"
  }
]