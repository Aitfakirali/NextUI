"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Pagination } from "@/components/ui/pagination"

const ComponentSection = ({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
)

export default function ComponentsPage() {
  return (
    <div className="container space-y-12 py-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Components</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of all available components and their variations
          </p>
        </div>
      </AnimatedComponent>

      <div className="grid gap-8">
        {/* Buttons Section */}
        <ComponentSection
          title="Buttons"
          description="Button components with different variants and states"
        >
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </div>
        </ComponentSection>

        {/* Form Controls Section */}
        <ComponentSection
          title="Form Controls"
          description="Various form input components"
        >
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="grid gap-2">
              <Label>Subscription</Label>
              <RadioGroup defaultValue="monthly">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yearly" id="yearly" />
                  <Label htmlFor="yearly">Yearly</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label>Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </ComponentSection>

        {/* Toggle & Switch Section */}
        <ComponentSection
          title="Toggle & Switch"
          description="Interactive toggle components"
        >
          <div className="flex flex-wrap items-center gap-8">
            <div className="space-y-2">
              <Label>Theme</Label>
              <Toggle>Dark Mode</Toggle>
            </div>
            <div className="space-y-2">
              <Label>Notifications</Label>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-[200px]"
              />
            </div>
          </div>
        </ComponentSection>

        {/* Navigation Section */}
        <ComponentSection
          title="Navigation"
          description="Components for navigation and pagination"
        >
          <div className="space-y-8">
            <Breadcrumb
              segments={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Navigation", href: "/components/navigation" },
              ]}
            />
            <Pagination
              currentPage={1}
              totalPages={10}
              onPageChange={() => {}}
            />
          </div>
        </ComponentSection>

        {/* Data Display Section */}
        <ComponentSection
          title="Data Display"
          description="Components for displaying data and content"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ComponentSection>

        {/* Tabs Example */}
        <ComponentSection
          title="Tabs"
          description="Tabbed interface component"
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Account settings and preferences
            </TabsContent>
            <TabsContent value="password">
              Password and security settings
            </TabsContent>
            <TabsContent value="settings">
              General application settings
            </TabsContent>
          </Tabs>
        </ComponentSection>
      </div>
    </div>
  )
} 