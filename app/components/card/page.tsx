"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const examples = [
  {
    name: "Simple Card",
    component: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Simple Card</CardTitle>
          <CardDescription>A basic card layout example.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card. You can put any content here.</p>
        </CardContent>
      </Card>
    ),
  },
  {
    name: "Interactive Card",
    component: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>A card with interactive elements.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card contains buttons and interactive elements.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    ),
  },
  {
    name: "Media Card",
    component: (
      <Card className="w-[350px]">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=350&h=175&auto=format&fit=crop"
          alt="Card cover"
          className="aspect-video object-cover"
        />
        <CardHeader>
          <CardTitle>Media Card</CardTitle>
          <CardDescription>A card with an image.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Cards can include various types of media content.</p>
        </CardContent>
      </Card>
    ),
  },
]

export default function CardPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-xl text-muted-foreground mt-2">
          A container for displaying content in a clear and organized way.
        </p>
      </AnimatedComponent>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example, index) => (
              <AnimatedComponent
                key={example.name}
                animation="fadeIn"
                delay={index * 0.1}
              >
                {example.component}
              </AnimatedComponent>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <Card className="p-6">
            <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
              {`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// Simple Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>

// Interactive Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Media Card
<Card>
  <img src="image.jpg" alt="Cover" className="aspect-video object-cover" />
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>`}
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

      <AnimatedComponent animation="slideUp">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-2">Usage</h2>
          <p className="text-muted-foreground mb-4">
            Import the Card components and use them in your project:
          </p>
          <pre className="text-sm bg-muted p-4 rounded-lg">
            {`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"`}
          </pre>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 