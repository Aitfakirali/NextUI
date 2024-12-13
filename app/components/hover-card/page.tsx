"use client"

import { CodePreview } from "@/components/code-preview"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HoverCardPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">Hover Card</h1>
        <p className="text-xl text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      {/* Usage Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Hover Cards are used to provide additional information when hovering over an element:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>User profile previews</li>
            <li>Link previews</li>
            <li>Additional context</li>
            <li>Quick information display</li>
          </ul>
        </div>
      </div>

      {/* Examples Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        <section>
          <h3 className="text-lg font-medium mb-4">User Profile Preview</h3>
          <CodePreview
            preview={
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            }
            code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Simple Preview</h3>
          <CodePreview
            preview={
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Quick Preview</h4>
                    <p className="text-sm">
                      This is a simple hover card that appears when you hover over the trigger.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            }
            code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Quick Preview</h4>
      <p className="text-sm">
        This is a simple hover card that appears when you hover over the trigger.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
          />
        </section>
      </div>

      {/* API Reference Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Props</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">align</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    'start' | 'center' | 'end'
                  </td>
                  <td className="px-4 py-3 text-sm">'center'</td>
                  <td className="px-4 py-3 text-sm">The alignment of the hover card relative to the trigger.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">sideOffset</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">number</td>
                  <td className="px-4 py-3 text-sm">4</td>
                  <td className="px-4 py-3 text-sm">The distance in pixels from the trigger.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 