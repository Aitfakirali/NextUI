"use client"

import * as React from "react"
import { Heart, ThumbsUp, Star } from "lucide-react"
import { Rating } from "@/components/ui/rating"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Label } from "@/components/ui/label"

export default function RatingPage() {
  const [rating1, setRating1] = React.useState(3)
  const [rating2, setRating2] = React.useState(2.5)
  const [rating3, setRating3] = React.useState(4)

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Rating</h1>
          <p className="text-xl text-muted-foreground">
            A star rating component with customizable icons and half-star support.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Rating value={rating1} onChange={setRating1} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Label</h2>
            <div className="space-y-2">
              <Label>Rate your experience</Label>
              <Rating value={rating1} onChange={setRating1} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Half Stars</h2>
            <Rating
              value={rating2}
              onChange={setRating2}
              allowHalf
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Different Sizes</h2>
            <div className="flex flex-col gap-4">
              <Rating value={3} size="sm" readOnly />
              <Rating value={3} size="md" readOnly />
              <Rating value={3} size="lg" readOnly />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Custom Icons</h2>
            <div className="flex flex-col gap-4">
              <Rating
                value={rating3}
                onChange={setRating3}
                icon={<Heart className="fill-current" />}
                emptyIcon={<Heart />}
              />
              <Rating
                value={rating3}
                onChange={setRating3}
                icon={<ThumbsUp className="fill-current" />}
                emptyIcon={<ThumbsUp />}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Read Only</h2>
            <Rating value={4} readOnly />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Rating } from "@/components/ui/rating"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"

// Basic rating
const [rating, setRating] = React.useState(3)

<Rating value={rating} onChange={setRating} />

// With label
<div className="space-y-2">
  <Label>Rate your experience</Label>
  <Rating value={rating} onChange={setRating} />
</div>

// With half stars
<Rating
  value={rating}
  onChange={setRating}
  allowHalf
/>

// Different sizes
<Rating value={3} size="sm" readOnly />
<Rating value={3} size="md" readOnly />
<Rating value={3} size="lg" readOnly />

// Custom icons
<Rating
  value={rating}
  onChange={setRating}
  icon={<Heart className="fill-current" />}
  emptyIcon={<Heart />}
/>

// Read only
<Rating value={4} readOnly />`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Rating</h3>
              <ul>
                <li><code>value</code> - Current rating value</li>
                <li><code>max</code> - Maximum rating value (default: 5)</li>
                <li><code>onChange</code> - Callback function when rating changes</li>
                <li><code>readOnly</code> - Whether the rating is read-only</li>
                <li><code>allowHalf</code> - Whether to allow half-star ratings</li>
                <li><code>size</code> - Size of the rating icons ("sm" | "md" | "lg")</li>
                <li><code>icon</code> - Custom icon for filled state</li>
                <li><code>emptyIcon</code> - Custom icon for empty state</li>
                <li><code>halfIcon</code> - Custom icon for half-filled state</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Clear labeling</li>
                    <li>Consistent sizing</li>
                    <li>Visual feedback</li>
                    <li>Intuitive interaction</li>
                    <li>Appropriate precision</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Product reviews</li>
                    <li>Feedback forms</li>
                    <li>User ratings</li>
                    <li>Content rating</li>
                    <li>Performance evaluation</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>ARIA labels</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>Clear feedback</li>
                  </ul>
                </li>
                <li>Customization:
                  <ul>
                    <li>Icon selection</li>
                    <li>Color schemes</li>
                    <li>Size options</li>
                    <li>Interaction modes</li>
                    <li>Visual states</li>
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