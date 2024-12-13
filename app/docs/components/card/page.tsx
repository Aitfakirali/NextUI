"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CardPage() {
  return (
    <div className="space-y-6">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">
          A container component for displaying content in a card format.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Usage</h2>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Examples</h2>
          <Tabs defaultValue="simple" className="space-y-4">
            <TabsList>
              <TabsTrigger value="simple">Simple</TabsTrigger>
              <TabsTrigger value="with-form">With Form</TabsTrigger>
              <TabsTrigger value="with-image">With Image</TabsTrigger>
            </TabsList>
            <TabsContent value="simple" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Choose what notifications you want to receive.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Configure your notification preferences here.</p>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm text-muted-foreground">
                  <code>{`<Card>
  <CardHeader>
    <CardTitle>Notification Settings</CardTitle>
    <CardDescription>Choose what notifications you want to receive.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Configure your notification preferences here.</p>
  </CardContent>
  <CardFooter>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="with-form" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>Enter your information to create an account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <input
                      type="password"
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="Enter your password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Sign Up</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="with-image" className="space-y-4">
              <Card>
                <img
                  src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&dpr=2&q=80"
                  alt="Card Image"
                  className="aspect-video w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>Beautiful Landscapes</CardTitle>
                  <CardDescription>Discover amazing places around the world.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Explore breathtaking views and natural wonders.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Gallery</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Anatomy</h2>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div>
                <h3 className="font-medium">Card</h3>
                <p className="text-sm text-muted-foreground">
                  The main container component that provides the card styling.
                </p>
              </div>
              <div>
                <h3 className="font-medium">CardHeader</h3>
                <p className="text-sm text-muted-foreground">
                  Contains the card's header content, typically the title and description.
                </p>
              </div>
              <div>
                <h3 className="font-medium">CardContent</h3>
                <p className="text-sm text-muted-foreground">
                  The main content area of the card.
                </p>
              </div>
              <div>
                <h3 className="font-medium">CardFooter</h3>
                <p className="text-sm text-muted-foreground">
                  The bottom section of the card, typically containing actions or additional information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 