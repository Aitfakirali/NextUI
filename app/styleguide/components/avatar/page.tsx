"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Avatar</h1>
          <p className="text-xl text-muted-foreground">
            An image element with a fallback for representing the user.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Examples</h2>
            <div className="flex flex-wrap gap-4">
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
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Basic Avatar with image
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Custom size
<Avatar className="h-16 w-16">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Fallback only
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Avatar</h3>
              <ul>
                <li><code>className</code> - Optional class names for the avatar wrapper</li>
              </ul>
              <h3>AvatarImage</h3>
              <ul>
                <li><code>src</code> - The image source URL</li>
                <li><code>alt</code> - Alt text for the image</li>
              </ul>
              <h3>AvatarFallback</h3>
              <ul>
                <li><code>children</code> - The fallback content (usually initials)</li>
                <li><code>delayMs</code> - Delay before showing fallback (default: 600ms)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Use avatars to represent users in the interface</li>
                <li>Always provide a fallback for when images fail to load</li>
                <li>Use appropriate image sizes to maintain quality</li>
                <li>Consider using initials for fallback content</li>
                <li>Ensure good contrast for fallback text</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 