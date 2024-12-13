import { Metadata } from "next"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Form",
  description: "Building accessible forms with validation.",
}

export default function FormDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Form</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Form component provides a flexible and accessible way to build forms with built-in validation and error handling.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Form</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your password" />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
        <div className="usage">
          ```tsx
          <Form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your password" />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Form with Validation</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Form className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input 
                type="text" 
                id="username" 
                placeholder="Enter username"
                required
                minLength={3}
              />
            </div>
            <div>
              <Label htmlFor="email2">Email</Label>
              <Input 
                type="email" 
                id="email2" 
                placeholder="Enter email"
                required
              />
            </div>
            <Button type="submit">Register</Button>
          </Form>
        </div>
        <div className="usage">
          ```tsx
          <Form className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input 
                type="text" 
                id="username" 
                placeholder="Enter username"
                required
                minLength={3}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="Enter email"
                required
              />
            </div>
            <Button type="submit">Register</Button>
          </Form>
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
                <td className="p-2 border">className</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">Additional CSS classes to apply to the form</td>
              </tr>
              <tr>
                <td className="p-2 border">onSubmit</td>
                <td className="p-2 border">function</td>
                <td className="p-2 border">Function called when the form is submitted</td>
              </tr>
              <tr>
                <td className="p-2 border">children</td>
                <td className="p-2 border">ReactNode</td>
                <td className="p-2 border">Form content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 