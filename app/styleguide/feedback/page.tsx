"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Spinner } from "@/components/ui/spinner"
import { AnimatedComponent } from "@/components/ui/animated-component"

const ComponentSection = ({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
)

export default function FeedbackComponentsPage() {
  return (
    <div className="container space-y-12 py-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Feedback Components</h1>
          <p className="text-xl text-muted-foreground">
            Components for providing feedback and status information to users
          </p>
        </div>
      </AnimatedComponent>

      <div className="grid gap-8">
        {/* Alerts Section */}
        <ComponentSection
          title="Alerts"
          description="Alert components with different variants for various message types"
        >
          <div className="grid gap-4">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert message.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                Please review your information before continuing.
              </AlertDescription>
            </Alert>
            <Alert variant="info">
              <AlertTitle>Info Alert</AlertTitle>
              <AlertDescription>
                Here's some helpful information.
              </AlertDescription>
            </Alert>
          </div>
        </ComponentSection>

        {/* Avatars Section */}
        <ComponentSection
          title="Avatars"
          description="Avatar components for user profile images"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="invalid-image.jpg" alt="Invalid" />
              <AvatarFallback>404</AvatarFallback>
            </Avatar>
          </div>
        </ComponentSection>

        {/* Loading Spinners Section */}
        <ComponentSection
          title="Loading Spinners"
          description="Spinner components for loading states"
        >
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-sm text-muted-foreground">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner />
              <span className="text-sm text-muted-foreground">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-sm text-muted-foreground">Large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-sm text-muted-foreground">Extra Large</span>
            </div>
          </div>
        </ComponentSection>

        {/* Usage Examples */}
        <ComponentSection
          title="Usage Examples"
          description="Common use cases and combinations of feedback components"
        >
          <div className="grid gap-8">
            {/* Loading State Example */}
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <Spinner />
              <div>
                <h4 className="font-medium">Loading Profile</h4>
                <p className="text-sm text-muted-foreground">
                  Please wait while we fetch your data...
                </p>
              </div>
            </div>

            {/* User Profile Example */}
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">John Doe</h4>
                <p className="text-sm text-muted-foreground">
                  Software Developer
                </p>
              </div>
            </div>

            {/* Success Message Example */}
            <Alert variant="success">
              <div className="flex items-center gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/vercel.png" alt="Team" />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div>
                  <AlertTitle>Team Invitation Accepted</AlertTitle>
                  <AlertDescription>
                    You've successfully joined the development team.
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </div>
        </ComponentSection>
      </div>
    </div>
  )
} 