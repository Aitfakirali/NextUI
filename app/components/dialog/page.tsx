"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Card } from "@/components/ui/card"

export default function DialogPage() {
  return (
    <div className="container space-y-12 py-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Dialog</h1>
          <p className="text-xl text-muted-foreground mt-2">
            A modal dialog that interrupts the user with important content.
          </p>
        </div>
      </AnimatedComponent>

      <div className="grid gap-8">
        {/* Basic Dialog */}
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Basic Dialog</h2>
            <p className="text-muted-foreground">
              A simple dialog with a title and description.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Basic Dialog</DialogTitle>
                  <DialogDescription>
                    This is a basic dialog example with a title and description.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>This is the main content of the dialog.</p>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* Form Dialog */}
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Form Dialog</h2>
            <p className="text-muted-foreground">
              A dialog containing a form for user input.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@johndoe"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* Alert Dialog */}
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Alert Dialog</h2>
            <p className="text-muted-foreground">
              A dialog for confirming destructive actions.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:gap-0">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogTrigger>
                  <Button variant="destructive">Delete Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* Usage Examples */}
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Usage</h2>
            <p className="text-muted-foreground">
              Import and use the Dialog components in your project:
            </p>
            <pre className="rounded-lg bg-muted p-4">
              {`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Basic Dialog
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <div>Content</div>
    <DialogFooter>
      <Button>Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            </pre>
          </div>
        </Card>
      </div>
    </div>
  )
} 