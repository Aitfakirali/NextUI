"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CodePreview } from "@/components/code-preview"

export default function ToastPage() {
  const { toast } = useToast()

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Toast</h1>
        <p className="text-xl text-muted-foreground">
          A toast component for displaying brief notifications.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Toast Variants</h2>
          <CodePreview
            preview={
              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    toast({
                      title: "Default Toast",
                      description: "This is a default toast message",
                    })
                  }}
                >
                  Show Toast
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => {
                    toast({
                      variant: "destructive",
                      title: "Error Toast",
                      description: "Something went wrong!",
                    })
                  }}
                >
                  Show Error Toast
                </Button>
              </div>
            }
            code={`const { toast } = useToast()

// Default Toast
toast({
  title: "Default Toast",
  description: "This is a default toast message",
})

// Error Toast
toast({
  variant: "destructive",
  title: "Error Toast",
  description: "Something went wrong!",
})`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Action</h2>
          <CodePreview
            preview={
              <Button
                onClick={() => {
                  toast({
                    title: "Action Required",
                    description: "Please confirm your action",
                    action: (
                      <Button variant="outline" size="sm">
                        Undo
                      </Button>
                    ),
                  })
                }}
              >
                Show Toast with Action
              </Button>
            }
            code={`toast({
  title: "Action Required",
  description: "Please confirm your action",
  action: (
    <Button variant="outline" size="sm">
      Undo
    </Button>
  ),
})`}
          />
        </section>
      </div>
    </div>
  )
} 