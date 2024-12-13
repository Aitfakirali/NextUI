"use client"

import { Badge } from "@/components/ui/badge"
import { CodePreview } from "@/components/code-preview"

export default function BadgesPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Badges</h1>
        <p className="text-xl text-muted-foreground">
          Small status descriptors for UI elements.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Badge Variants</h2>
          <CodePreview
            preview={
              <div className="flex gap-4 flex-wrap">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
              </div>
            }
            code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
          <CodePreview
            preview={
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="success">New Feature</Badge>
                  <span className="text-sm">Check out our latest updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="warning">Beta</Badge>
                  <span className="text-sm">This feature is in beta testing</span>
                </div>
              </div>
            }
            code={`<div className="flex items-center gap-2">
  <Badge variant="success">New Feature</Badge>
  <span className="text-sm">Check out our latest updates</span>
</div>
<div className="flex items-center gap-2">
  <Badge variant="warning">Beta</Badge>
  <span className="text-sm">This feature is in beta testing</span>
</div>`}
          />
        </section>
      </div>
    </div>
  )
} 