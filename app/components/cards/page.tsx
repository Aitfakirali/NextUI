"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CardsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Cards</h1>
        <p className="text-xl text-muted-foreground">
          Containers for displaying content and actions about a single subject.
        </p>
      </div>

      <Tabs defaultValue="preview" className="mb-12">
        <TabsList className="mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card with header and content.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the main content of the card. You can put any content here.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>A card with actions in the footer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card demonstrates the use of a footer for actions.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Settings Card</CardTitle>
                <CardDescription>Manage your notifications.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="emails">Email Notifications</Label>
                  <Switch id="emails" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push">Push Notifications</Label>
                  <Switch id="push" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Styled Card</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  A card with custom background color.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Cards can be styled with different background colors and text colors.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardContent className="pt-6">
              <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
{`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardExample() {
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
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Props</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="font-semibold">Prop</div>
              <div className="font-semibold">Type</div>
              <div className="font-semibold">Default</div>
              <div className="font-semibold">Description</div>
              
              <div className="font-mono">className</div>
              <div>string</div>
              <div>-</div>
              <div>Additional CSS classes to apply to the card.</div>
              
              <div className="font-mono">asChild</div>
              <div>boolean</div>
              <div>false</div>
              <div>Change the underlying element tag.</div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}