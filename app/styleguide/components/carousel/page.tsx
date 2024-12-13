"use client"

import * as React from "react"
import { Carousel } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedComponent } from "@/components/ui/animated-component"

const images = [
  {
    title: "Mountain Landscape",
    content: (
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Mountain Landscape"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">Mountain Landscape</h3>
          <p className="text-sm opacity-90">Stunning mountain views at sunset</p>
        </div>
      </div>
    ),
  },
  {
    title: "Ocean View",
    content: (
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0"
          alt="Ocean View"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">Ocean View</h3>
          <p className="text-sm opacity-90">Peaceful ocean waves at dawn</p>
        </div>
      </div>
    ),
  },
  {
    title: "Forest Path",
    content: (
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          alt="Forest Path"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">Forest Path</h3>
          <p className="text-sm opacity-90">Mystical forest trail in morning mist</p>
        </div>
      </div>
    ),
  },
]

const cards = [
  {
    title: "Product 1",
    content: (
      <Card>
        <CardContent className="p-6">
          <div className="aspect-video bg-muted rounded-lg mb-4" />
          <h3 className="text-lg font-semibold mb-2">Product 1</h3>
          <p className="text-sm text-muted-foreground">
            Description for product 1 goes here. This is a sample product card.
          </p>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Product 2",
    content: (
      <Card>
        <CardContent className="p-6">
          <div className="aspect-video bg-muted rounded-lg mb-4" />
          <h3 className="text-lg font-semibold mb-2">Product 2</h3>
          <p className="text-sm text-muted-foreground">
            Description for product 2 goes here. This is a sample product card.
          </p>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Product 3",
    content: (
      <Card>
        <CardContent className="p-6">
          <div className="aspect-video bg-muted rounded-lg mb-4" />
          <h3 className="text-lg font-semibold mb-2">Product 3</h3>
          <p className="text-sm text-muted-foreground">
            Description for product 3 goes here. This is a sample product card.
          </p>
        </CardContent>
      </Card>
    ),
  },
]

export default function CarouselPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
          <p className="text-xl text-muted-foreground">
            A slideshow component for cycling through elements.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Image Carousel</h2>
            <Carousel items={images} autoPlay interval={5000} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Card Carousel</h2>
            <Carousel items={cards} autoPlay={false} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Carousel } from "@/components/ui/carousel"

// Basic carousel
const items = [
  {
    title: "Slide 1",
    content: <div>Content for slide 1</div>
  },
  {
    title: "Slide 2",
    content: <div>Content for slide 2</div>
  }
]

// Auto-playing carousel
<Carousel 
  items={items} 
  autoPlay 
  interval={5000} 
/>

// Manual carousel
<Carousel 
  items={items} 
  autoPlay={false} 
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li><code>items</code> - Array of items to display in the carousel</li>
                <li><code>autoPlay</code> - Whether to automatically cycle through items</li>
                <li><code>interval</code> - Time in milliseconds between slides when autoPlay is true</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>Item Interface</h3>
              <ul>
                <li><code>title</code> - Title of the slide (used for accessibility)</li>
                <li><code>content</code> - React node to render as slide content</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Keep content concise and focused</li>
                    <li>Use high-quality images</li>
                    <li>Maintain consistent slide dimensions</li>
                    <li>Consider mobile responsiveness</li>
                    <li>Provide clear navigation controls</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Image galleries</li>
                    <li>Product showcases</li>
                    <li>Featured content</li>
                    <li>Testimonials</li>
                    <li>Banner rotations</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Include proper ARIA labels</li>
                    <li>Support keyboard navigation</li>
                    <li>Provide pause controls for auto-play</li>
                    <li>Ensure sufficient contrast</li>
                  </ul>
                </li>
                <li>Performance:
                  <ul>
                    <li>Optimize image sizes</li>
                    <li>Lazy load content</li>
                    <li>Use appropriate intervals</li>
                    <li>Consider mobile bandwidth</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Interaction:
                  <ul>
                    <li>Touch swipe support</li>
                    <li>Mouse drag support</li>
                    <li>Arrow key navigation</li>
                    <li>Dot indicators</li>
                    <li>Previous/Next buttons</li>
                  </ul>
                </li>
                <li>Animation:
                  <ul>
                    <li>Smooth transitions</li>
                    <li>Direction-aware animations</li>
                    <li>Configurable timing</li>
                    <li>Pause on hover</li>
                  </ul>
                </li>
                <li>Customization:
                  <ul>
                    <li>Custom slide components</li>
                    <li>Flexible styling</li>
                    <li>Control placement options</li>
                    <li>Auto-play configuration</li>
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