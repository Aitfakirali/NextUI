"use client"

import * as React from "react"
import { ShoppingCart, CreditCard, Package, Truck } from "lucide-react"
import { Steps } from "@/components/ui/steps"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"

export default function StepsPage() {
  const [currentStep, setCurrentStep] = React.useState(2)

  const checkoutSteps = [
    {
      title: "Cart",
      description: "Review your items",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      title: "Payment",
      description: "Enter payment details",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      title: "Confirmation",
      description: "Review your order",
      icon: <Package className="h-4 w-4" />,
    },
    {
      title: "Shipping",
      description: "Choose shipping method",
      icon: <Truck className="h-4 w-4" />,
    },
  ]

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Steps</h1>
          <p className="text-xl text-muted-foreground">
            Display progress through a sequence of steps.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Steps
              steps={[
                { title: "Step 1", description: "Create your account" },
                { title: "Step 2", description: "Verify email address" },
                { title: "Step 3", description: "Add personal info" },
              ]}
              currentStep={2}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Icons</h2>
            <Steps steps={checkoutSteps} currentStep={currentStep} />
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button
                onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
                disabled={currentStep === 4}
              >
                Next
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Vertical Layout</h2>
            <Steps
              className="max-w-sm"
              steps={[
                {
                  title: "Project created",
                  description: "Your project has been created successfully.",
                },
                {
                  title: "Files uploaded",
                  description: "All project files have been uploaded to the server.",
                },
                {
                  title: "Deployment",
                  description: "Project is being deployed to production.",
                },
              ]}
              currentStep={2}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Steps } from "@/components/ui/steps"
import { ShoppingCart, CreditCard } from "lucide-react"

// Basic steps
<Steps
  steps={[
    { title: "Step 1", description: "Create your account" },
    { title: "Step 2", description: "Verify email address" },
    { title: "Step 3", description: "Add personal info" },
  ]}
  currentStep={2}
/>

// With icons
<Steps
  steps={[
    {
      title: "Cart",
      description: "Review your items",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      title: "Payment",
      description: "Enter payment details",
      icon: <CreditCard className="h-4 w-4" />,
    },
  ]}
  currentStep={1}
/>

// Individual step
<Step
  title="Cart"
  description="Review your items"
  icon={<ShoppingCart className="h-4 w-4" />}
  status="complete"
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Steps</h3>
              <ul>
                <li><code>steps</code> - Array of step items</li>
                <li><code>currentStep</code> - Current active step number</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>Step</h3>
              <ul>
                <li><code>title</code> - Title of the step</li>
                <li><code>description</code> - Description of the step</li>
                <li><code>icon</code> - Custom icon for the step</li>
                <li><code>status</code> - Status of the step ("complete" | "current" | "upcoming")</li>
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
                    <li>Clear step labels</li>
                    <li>Visual progress</li>
                    <li>Consistent spacing</li>
                    <li>Meaningful icons</li>
                    <li>Descriptive text</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Checkout process</li>
                    <li>Form wizards</li>
                    <li>Onboarding flows</li>
                    <li>Setup guides</li>
                    <li>Progress tracking</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>ARIA labels</li>
                    <li>Keyboard navigation</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>Color contrast</li>
                  </ul>
                </li>
                <li>Customization:
                  <ul>
                    <li>Icon selection</li>
                    <li>Color schemes</li>
                    <li>Layout options</li>
                    <li>Step styles</li>
                    <li>Animation effects</li>
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