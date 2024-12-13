"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { AnimatedComponent } from "@/components/ui/animated-component"

export default function AlertDialogPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Alert Dialog</h1>
          <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Custom Styling</h2>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Update Settings</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl">Update Available</AlertDialogTitle>
                  <AlertDialogDescription className="text-base">
                    A new software update is available for your system. Would you like to
                    install it now? This will require a restart.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-4">
                  <AlertDialogCancel className="w-full sm:w-auto">Later</AlertDialogCancel>
                  <AlertDialogAction className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    Install Update
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

// Basic alert dialog
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>AlertDialog</h3>
              <ul>
                <li><code>open</code> - The controlled open state of the dialog</li>
                <li><code>defaultOpen</code> - The default open state when initially rendered</li>
                <li><code>onOpenChange</code> - Event handler called when the open state changes</li>
              </ul>

              <h3>AlertDialogTrigger</h3>
              <ul>
                <li><code>asChild</code> - Change the component to the HTML tag or custom component provided</li>
              </ul>

              <h3>AlertDialogContent</h3>
              <ul>
                <li><code>forceMount</code> - Force mounting when true</li>
                <li><code>onOpenAutoFocus</code> - Event handler called when focus moves into the component</li>
                <li><code>onCloseAutoFocus</code> - Event handler called when focus moves out of the component</li>
              </ul>

              <h3>AlertDialogAction/Cancel</h3>
              <ul>
                <li><code>asChild</code> - Change the component to the HTML tag or custom component provided</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul>
                <li>Best practices:
                  <ul>
                    <li>Use for important or destructive actions</li>
                    <li>Keep content clear and concise</li>
                    <li>Provide clear action buttons</li>
                    <li>Use appropriate visual hierarchy</li>
                    <li>Consider mobile viewports</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Deletion confirmation</li>
                    <li>Important updates</li>
                    <li>Data loss prevention</li>
                    <li>Critical warnings</li>
                    <li>System notifications</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Proper focus management</li>
                    <li>Keyboard navigation</li>
                    <li>ARIA attributes</li>
                    <li>Screen reader support</li>
                    <li>Focus trap within dialog</li>
                  </ul>
                </li>
                <li>Design considerations:
                  <ul>
                    <li>Clear visual hierarchy</li>
                    <li>Consistent button placement</li>
                    <li>Appropriate spacing</li>
                    <li>Responsive layout</li>
                    <li>Visual feedback</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Examples</h2>
            <div className="grid gap-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Sign Out</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Sign out of your account?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You'll need to sign in again to access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Sign Out</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    Leave Page
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Leave without saving?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You have unsaved changes. If you leave now, your changes will be lost.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Stay</AlertDialogCancel>
                    <AlertDialogAction className="bg-orange-500 hover:bg-orange-600">
                      Leave
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 