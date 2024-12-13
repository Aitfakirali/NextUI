"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Tabs</h1>
          <p className="text-xl text-muted-foreground">
            A set of layered sections of content that display one panel of content at a time.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Vertical Tabs</h2>
            <Tabs defaultValue="music" orientation="vertical" className="w-[400px]">
              <TabsList className="grid w-[200px] grid-rows-3">
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                <TabsTrigger value="audiobooks">Audiobooks</TabsTrigger>
              </TabsList>
              <TabsContent value="music" className="p-4">
                <h3 className="text-lg font-medium">Music</h3>
                <p className="text-sm text-muted-foreground">
                  Listen to your favorite music tracks and albums.
                </p>
              </TabsContent>
              <TabsContent value="podcasts" className="p-4">
                <h3 className="text-lg font-medium">Podcasts</h3>
                <p className="text-sm text-muted-foreground">
                  Subscribe and listen to various podcast shows.
                </p>
              </TabsContent>
              <TabsContent value="audiobooks" className="p-4">
                <h3 className="text-lg font-medium">Audiobooks</h3>
                <p className="text-sm text-muted-foreground">
                  Explore a wide collection of audiobooks.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Basic tabs
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings...
  </TabsContent>
  <TabsContent value="password">
    Password settings...
  </TabsContent>
</Tabs>

// Vertical tabs
<Tabs defaultValue="music" orientation="vertical">
  <TabsList className="grid w-[200px] grid-rows-3">
    <TabsTrigger value="music">Music</TabsTrigger>
    <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
    <TabsTrigger value="audiobooks">Audiobooks</TabsTrigger>
  </TabsList>
  <TabsContent value="music">Music content...</TabsContent>
  <TabsContent value="podcasts">Podcasts content...</TabsContent>
  <TabsContent value="audiobooks">Audiobooks content...</TabsContent>
</Tabs>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Tabs</h3>
              <ul>
                <li><code>defaultValue</code> - The value of the tab that should be active when initially rendered</li>
                <li><code>value</code> - The controlled value of the tab to activate</li>
                <li><code>onValueChange</code> - Event handler called when the value changes</li>
                <li><code>orientation</code> - The orientation of the tabs ("horizontal" | "vertical")</li>
              </ul>

              <h3>TabsList</h3>
              <ul>
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>loop</code> - Whether keyboard navigation should loop from last tab to first, and vice versa</li>
              </ul>

              <h3>TabsTrigger</h3>
              <ul>
                <li><code>value</code> - A unique value for the tab</li>
                <li><code>disabled</code> - Whether the tab is disabled</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>

              <h3>TabsContent</h3>
              <ul>
                <li><code>value</code> - A unique value that matches the tab trigger</li>
                <li><code>forceMount</code> - Used to force mounting when more control is needed</li>
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
                    <li>Use clear and concise labels</li>
                    <li>Group related content</li>
                    <li>Maintain consistent styling</li>
                    <li>Consider tab order</li>
                    <li>Handle overflow gracefully</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Settings panels</li>
                    <li>Navigation sections</li>
                    <li>Form organization</li>
                    <li>Content categorization</li>
                    <li>Dashboard views</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>ARIA labels</li>
                    <li>Focus management</li>
                    <li>Screen reader support</li>
                    <li>Clear visual states</li>
                  </ul>
                </li>
                <li>Responsive design:
                  <ul>
                    <li>Mobile-friendly layout</li>
                    <li>Touch targets</li>
                    <li>Viewport considerations</li>
                    <li>Breakpoint handling</li>
                    <li>Content adaptation</li>
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