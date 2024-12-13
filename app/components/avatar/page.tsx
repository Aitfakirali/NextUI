"use client"

import * as React from "react"
import { CodePreview } from "@/components/code-preview"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Avatar</h1>
        <p className="text-xl text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <CodePreview
            preview={
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            }
            code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <CodePreview
            preview={
              <div className="flex items-center gap-4">
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
            }
            code={`<Avatar className="h-8 w-8">
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
</Avatar>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Fallback States</h2>
          <CodePreview
            preview={
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>
                    <span className="sr-only">John Doe</span>
                    JD
                  </AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-rose-500 text-rose-50">
                    GA
                  </AvatarFallback>
                </Avatar>
              </div>
            }
            code={`<Avatar>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>
    <span className="sr-only">John Doe</span>
    JD
  </AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback className="bg-rose-500 text-rose-50">
    GA
  </AvatarFallback>
</Avatar>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Group</h2>
          <CodePreview
            preview={
              <div className="flex -space-x-4">
                <Avatar className="border-2 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback>+2</AvatarFallback>
                </Avatar>
              </div>
            }
            code={`<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  {/* Repeat for other avatars */}
  <Avatar className="border-2 border-background">
    <AvatarFallback>+2</AvatarFallback>
  </Avatar>
</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <div className="rounded-lg border">
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="font-semibold">Component</div>
                <div className="font-semibold">Props</div>
                <div className="font-semibold">Default</div>
                <div className="font-semibold">Description</div>
                
                <div className="font-mono">Avatar</div>
                <div>className</div>
                <div>-</div>
                <div>Additional classes for the avatar container.</div>
                
                <div className="font-mono">AvatarImage</div>
                <div>src, alt</div>
                <div>-</div>
                <div>Image source and alt text for the avatar.</div>
                
                <div className="font-mono">AvatarFallback</div>
                <div>className</div>
                <div>-</div>
                <div>Fallback content when image fails to load.</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Avatars should be used to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Represent users in a user interface</li>
              <li>Display profile pictures in comments or posts</li>
              <li>Show participants in a group or collaboration</li>
              <li>Provide visual identification in user lists</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
} 