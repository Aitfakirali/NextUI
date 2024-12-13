"use client"

import * as React from "react"
import {
  Circle,
  CheckCircle2,
  AlertCircle,
  Clock,
  Package,
  Truck,
  Home,
  Mail,
  Send,
  MessageSquare,
  User,
  Star,
} from "lucide-react"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function TimelinePage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Timeline</h1>
          <p className="text-xl text-muted-foreground">
            Display a list of events in chronological order.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Timeline
              items={[
                {
                  title: "Order placed",
                  time: "2:30 PM",
                  icon: <Package className="h-4 w-4" />,
                  children: "Your order #12345 has been placed successfully.",
                },
                {
                  title: "Order shipped",
                  time: "4:45 PM",
                  icon: <Truck className="h-4 w-4" />,
                  children: "Your order has been shipped via Express Delivery.",
                },
                {
                  title: "Out for delivery",
                  time: "9:30 AM",
                  icon: <Home className="h-4 w-4" />,
                  children: "Your package is out for delivery in your area.",
                },
              ]}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Active State</h2>
            <Timeline
              activeItem={1}
              items={[
                {
                  title: "Message sent",
                  time: "9:00 AM",
                  icon: <Send className="h-4 w-4" />,
                  children: "You sent a message to John Doe.",
                },
                {
                  title: "Message delivered",
                  time: "9:01 AM",
                  icon: <Mail className="h-4 w-4" />,
                  children: "Your message has been delivered.",
                },
                {
                  title: "Message read",
                  time: "9:30 AM",
                  icon: <MessageSquare className="h-4 w-4" />,
                  children: "John Doe read your message.",
                },
              ]}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Status Timeline</h2>
            <Timeline
              items={[
                {
                  title: "Account created",
                  time: "1 day ago",
                  icon: <User className="h-4 w-4" />,
                  active: true,
                },
                {
                  title: "Email verified",
                  time: "5 hours ago",
                  icon: <CheckCircle2 className="h-4 w-4" />,
                  active: true,
                },
                {
                  title: "Profile completed",
                  time: "2 hours ago",
                  icon: <Star className="h-4 w-4" />,
                  active: true,
                },
                {
                  title: "Subscription pending",
                  time: "Just now",
                  icon: <Clock className="h-4 w-4" />,
                  children: "Waiting for payment confirmation.",
                },
              ]}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Timeline } from "@/components/ui/timeline"
import { Package, Truck, Home } from "lucide-react"

// Basic timeline
<Timeline
  items={[
    {
      title: "Order placed",
      time: "2:30 PM",
      icon: <Package className="h-4 w-4" />,
      children: "Your order #12345 has been placed successfully.",
    },
    {
      title: "Order shipped",
      time: "4:45 PM",
      icon: <Truck className="h-4 w-4" />,
      children: "Your order has been shipped via Express Delivery.",
    },
    {
      title: "Out for delivery",
      time: "9:30 AM",
      icon: <Home className="h-4 w-4" />,
      children: "Your package is out for delivery in your area.",
    },
  ]}
/>

// With active state
<Timeline
  activeItem={1}
  items={[
    {
      title: "Message sent",
      time: "9:00 AM",
      icon: <Send className="h-4 w-4" />,
      children: "You sent a message to John Doe.",
    },
    // ...
  ]}
/>

// Individual timeline items
<TimelineItem
  title="Order placed"
  time="2:30 PM"
  icon={<Package className="h-4 w-4" />}
  active
>
  Your order #12345 has been placed successfully.
</TimelineItem>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Timeline</h3>
              <ul>
                <li><code>items</code> - Array of timeline items</li>
                <li><code>activeItem</code> - Index of the active item (all items before this index will be active)</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>TimelineItem</h3>
              <ul>
                <li><code>title</code> - Title of the timeline item</li>
                <li><code>time</code> - Time or date of the event</li>
                <li><code>icon</code> - Custom icon for the timeline item</li>
                <li><code>active</code> - Whether the item is active</li>
                <li><code>last</code> - Whether this is the last item</li>
                <li><code>children</code> - Additional content for the timeline item</li>
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
                    <li>Clear chronological order</li>
                    <li>Consistent spacing</li>
                    <li>Meaningful icons</li>
                    <li>Concise descriptions</li>
                    <li>Visual hierarchy</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Order tracking</li>
                    <li>Project milestones</li>
                    <li>Activity history</li>
                    <li>Process steps</li>
                    <li>Status updates</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Semantic markup</li>
                    <li>ARIA labels</li>
                    <li>Color contrast</li>
                    <li>Screen reader support</li>
                    <li>Keyboard navigation</li>
                  </ul>
                </li>
                <li>Customization:
                  <ul>
                    <li>Icon selection</li>
                    <li>Color schemes</li>
                    <li>Line styles</li>
                    <li>Spacing options</li>
                    <li>Content layout</li>
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