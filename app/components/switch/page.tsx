"use client"

import { Switch } from "@/components/ui/switch"
import { CodePreview } from "@/components/code-preview"
import { Label } from "@/components/ui/label"

export default function SwitchPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Switch</h1>
        <p className="text-xl text-muted-foreground">
          A control that allows the user to toggle between checked and unchecked states.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <CodePreview
            preview={
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Form</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="email-updates" defaultChecked />
                  <Label htmlFor="email-updates">Email updates</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="marketing" disabled />
                  <Label htmlFor="marketing" className="text-muted-foreground">
                    Marketing emails (disabled)
                  </Label>
                </div>
              </div>
            }
            code={`<div className="grid gap-4">
  <div className="flex items-center space-x-2">
    <Switch id="notifications" />
    <Label htmlFor="notifications">Enable notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="email-updates" defaultChecked />
    <Label htmlFor="email-updates">Email updates</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="marketing" disabled />
    <Label htmlFor="marketing" className="text-muted-foreground">
      Marketing emails (disabled)
    </Label>
  </div>
</div>`}
          />
        </section>
      </div>
    </div>
  )
} 