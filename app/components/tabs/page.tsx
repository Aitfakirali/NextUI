"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const examples = [
  {
    name: "Basic Tabs",
    component: (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="p-4">
          <h3 className="font-medium mb-2">Account Settings</h3>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </TabsContent>
        <TabsContent value="password" className="p-4">
          <h3 className="font-medium mb-2">Change Password</h3>
          <p className="text-muted-foreground">
            Update your password and security settings.
          </p>
        </TabsContent>
        <TabsContent value="settings" className="p-4">
          <h3 className="font-medium mb-2">General Settings</h3>
          <p className="text-muted-foreground">
            Configure your application preferences.
          </p>
        </TabsContent>
      </Tabs>
    ),
  },
  {
    name: "Tabs with Icons",
    component: (
      <Tabs defaultValue="messages" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="messages">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
              <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
            </svg>
            Messages
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
                clipRule="evenodd"
              />
            </svg>
            Notifications
          </TabsTrigger>
          <TabsTrigger value="settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="messages" className="p-4">
          <div className="space-y-4">
            <h3 className="font-medium">Messages</h3>
            <div className="border rounded-lg p-4">
              <p className="text-sm">No new messages</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="p-4">
          <div className="space-y-4">
            <h3 className="font-medium">Notifications</h3>
            <div className="border rounded-lg p-4">
              <p className="text-sm">No new notifications</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="settings" className="p-4">
          <div className="space-y-4">
            <h3 className="font-medium">Settings</h3>
            <div className="border rounded-lg p-4">
              <p className="text-sm">Manage your preferences</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    ),
  },
]

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="text-4xl font-bold tracking-tight">Tabs</h1>
        <p className="text-xl text-muted-foreground mt-2">
          A set of layered sections of content that display one panel at a time.
        </p>
      </AnimatedComponent>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <div className="grid gap-8 md:grid-cols-2">
            {examples.map((example, index) => (
              <AnimatedComponent
                key={example.name}
                animation="fadeIn"
                delay={index * 0.1}
              >
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">{example.name}</h3>
                  {example.component}
                </Card>
              </AnimatedComponent>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <Card className="p-6">
            <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
              {`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Basic Tabs
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account content
  </TabsContent>
  <TabsContent value="password">
    Password content
  </TabsContent>
  <TabsContent value="settings">
    Settings content
  </TabsContent>
</Tabs>

// Tabs with Icons
<Tabs defaultValue="messages">
  <TabsList className="grid grid-cols-3">
    <TabsTrigger value="messages">
      <IconComponent />
      Messages
    </TabsTrigger>
    <TabsTrigger value="notifications">
      <IconComponent />
      Notifications
    </TabsTrigger>
    <TabsTrigger value="settings">
      <IconComponent />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="messages">
    Messages content
  </TabsContent>
  <TabsContent value="notifications">
    Notifications content
  </TabsContent>
  <TabsContent value="settings">
    Settings content
  </TabsContent>
</Tabs>`}
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

      <AnimatedComponent animation="slideUp">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-2">Usage</h2>
          <p className="text-muted-foreground mb-4">
            Import the Tabs components and use them in your project:
          </p>
          <pre className="text-sm bg-muted p-4 rounded-lg">
            {`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`}
          </pre>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 