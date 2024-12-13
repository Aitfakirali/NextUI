"use client"

import { Alert } from "@/components/ui/alert"
import { CodePreview } from "@/components/code-preview"

export default function AlertsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Alerts</h1>
        <p className="text-xl text-muted-foreground">
          Display important messages and feedback to users.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Alert Variants</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Alert>
                  <h4 className="font-medium">Default Alert</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a default alert message.
                  </p>
                </Alert>

                <Alert variant="destructive">
                  <h4 className="font-medium">Error Alert</h4>
                  <p className="text-sm [&>svg]:text-destructive">
                    Something went wrong. Please try again.
                  </p>
                </Alert>

                <Alert variant="success">
                  <h4 className="font-medium">Success Alert</h4>
                  <p className="text-sm">
                    Your changes have been saved successfully.
                  </p>
                </Alert>
              </div>
            }
            code={`<Alert>
  <h4 className="font-medium">Default Alert</h4>
  <p className="text-sm text-muted-foreground">
    This is a default alert message.
  </p>
</Alert>

<Alert variant="destructive">
  <h4 className="font-medium">Error Alert</h4>
  <p className="text-sm [&>svg]:text-destructive">
    Something went wrong. Please try again.
  </p>
</Alert>

<Alert variant="success">
  <h4 className="font-medium">Success Alert</h4>
  <p className="text-sm">
    Your changes have been saved successfully.
  </p>
</Alert>`}
          />
        </section>
      </div>
    </div>
  )
} 