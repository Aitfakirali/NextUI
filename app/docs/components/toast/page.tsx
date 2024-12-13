import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Toast } from "@/components/ui/toast"

export const metadata: Metadata = {
  title: "Toast",
  description: "A brief message that appears temporarily.",
}

export default function ToastDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Toast</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Toast component displays brief, temporary messages to users.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Toast</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Button
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2024 at 5:57 PM",
              })
            }}
          >
            Show Toast
          </Button>
        </div>
        <div className="usage">
          ```tsx
          export function ToastDemo() {
            const { toast } = useToast()
          
            return (
              <Button
                onClick={() => {
                  toast({
                    title: "Scheduled: Catch up",
                    description: "Friday, February 10, 2024 at 5:57 PM",
                  })
                }}
              >
                Show Toast
              </Button>
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Toast Variants</h2>
        <div className="preview border rounded-lg p-6 mb-4 space-x-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong.",
              })
            }}
          >
            Show Error Toast
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                variant: "success",
                title: "Success",
                description: "Operation completed successfully.",
              })
            }}
          >
            Show Success Toast
          </Button>
        </div>
        <div className="usage">
          ```tsx
          <Button
            variant="outline"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong.",
              })
            }}
          >
            Show Error Toast
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              toast({
                variant: "success",
                title: "Success",
                description: "Operation completed successfully.",
              })
            }}
          >
            Show Success Toast
          </Button>
          ```
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border">Prop</th>
                <th className="text-left p-2 border">Type</th>
                <th className="text-left p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">title</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">The title of the toast</td>
              </tr>
              <tr>
                <td className="p-2 border">description</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">The description text</td>
              </tr>
              <tr>
                <td className="p-2 border">variant</td>
                <td className="p-2 border">"default" | "destructive" | "success"</td>
                <td className="p-2 border">The style variant of the toast</td>
              </tr>
              <tr>
                <td className="p-2 border">duration</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">Duration in milliseconds</td>
              </tr>
              <tr>
                <td className="p-2 border">action</td>
                <td className="p-2 border">ToastAction</td>
                <td className="p-2 border">Optional action button</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 