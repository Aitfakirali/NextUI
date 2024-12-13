"use client"

import * as React from "react"
import { CardGallery } from "@/components/ui/card-gallery"
import { AnimatedComponent } from "@/components/ui/animated-component"

const projectItems = [
  {
    title: "Modern Dashboard",
    description: "A beautiful admin dashboard with dark mode support",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online shopping experience",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Social Media App",
    description: "Connect with friends and share moments",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60"
  }
]

const teamItems = [
  {
    title: "Sarah Johnson",
    description: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Michael Chen",
    description: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Emily Davis",
    description: "Product Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60"
  }
]

const featuresItems = [
  {
    title: "Cloud Storage",
    description: "Secure and scalable storage solutions"
  },
  {
    title: "Analytics",
    description: "Powerful insights and reporting"
  },
  {
    title: "Authentication",
    description: "Multi-factor authentication support"
  },
  {
    title: "API Integration",
    description: "Connect with third-party services"
  },
  {
    title: "Automation",
    description: "Streamline your workflows"
  },
  {
    title: "Customization",
    description: "Tailor the platform to your needs"
  }
]

export default function CardGalleryPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Card Gallery</h1>
          <p className="text-xl text-muted-foreground">
            A responsive grid of cards with beautiful hover animations.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Projects Gallery</h2>
            <CardGallery items={projectItems} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Team Gallery</h2>
            <CardGallery items={teamItems} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features Gallery</h2>
            <CardGallery items={featuresItems} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { CardGallery } from "@/components/ui/card-gallery"

const items = [
  {
    title: "Item Title",
    description: "Item description goes here",
    image: "/path/to/image.jpg" // Optional
  },
  // ... more items
]

// Basic gallery
<CardGallery items={items} />

// Gallery with custom className
<CardGallery 
  items={items} 
  className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>items</code> - Array of items to display in the gallery</li>
                <li><code>className</code> - Additional CSS classes for the gallery container</li>
              </ul>

              <h3>Item Interface</h3>
              <ul>
                <li><code>title</code> - Title of the card</li>
                <li><code>description</code> - Description text</li>
                <li><code>image</code> - Optional URL for the card's image</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Animations:
                  <ul>
                    <li>Smooth fade-in on mount</li>
                    <li>Scale animation on hover</li>
                    <li>Image zoom effect</li>
                    <li>Gradient overlay transition</li>
                  </ul>
                </li>
                <li>Responsive Design:
                  <ul>
                    <li>Adaptive grid layout</li>
                    <li>Flexible image handling</li>
                    <li>Mobile-first approach</li>
                    <li>Touch-friendly interactions</li>
                  </ul>
                </li>
                <li>Customization:
                  <ul>
                    <li>Custom grid layouts</li>
                    <li>Flexible styling options</li>
                    <li>Optional image support</li>
                    <li>Theme integration</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Use consistent image aspect ratios</li>
                    <li>Keep descriptions concise</li>
                    <li>Optimize images for performance</li>
                    <li>Consider loading states</li>
                    <li>Implement error handling for images</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Project portfolios</li>
                    <li>Team member displays</li>
                    <li>Feature showcases</li>
                    <li>Product galleries</li>
                    <li>Blog post grids</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Proper image alt text</li>
                    <li>Keyboard navigation</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                  </ul>
                </li>
                <li>Performance:
                  <ul>
                    <li>Lazy loading</li>
                    <li>Image optimization</li>
                    <li>Efficient animations</li>
                    <li>Responsive images</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 