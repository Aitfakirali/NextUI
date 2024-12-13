"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const examples = [
  {
    name: "Login Form",
    component: (
      <form className="space-y-4 w-[350px]">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <Button className="w-full">Sign in</Button>
      </form>
    ),
  },
  {
    name: "Registration Form",
    component: (
      <form className="space-y-4 w-[350px]">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <Label>Gender</Label>
          <RadioGroup defaultValue="male">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
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
        <Button className="w-full">Register</Button>
      </form>
    ),
  },
]

export default function FormPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="text-4xl font-bold tracking-tight">Form</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Building blocks for creating accessible and beautiful forms.
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
              {`// Login Form
<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" placeholder="Enter your password" />
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="remember" />
    <label htmlFor="remember">Remember me</label>
  </div>
  <Button className="w-full">Sign in</Button>
</form>

// Registration Form
<form className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="firstName">First name</Label>
      <Input id="firstName" placeholder="John" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="lastName">Last name</Label>
      <Input id="lastName" placeholder="Doe" />
    </div>
  </div>
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="john@example.com" />
  </div>
  <div className="space-y-2">
    <Label>Gender</Label>
    <RadioGroup defaultValue="male">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="male" id="male" />
        <Label htmlFor="male">Male</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="female" id="female" />
        <Label htmlFor="female">Female</Label>
      </div>
    </RadioGroup>
  </div>
  <div className="space-y-2">
    <Label htmlFor="country">Country</Label>
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
  <Button className="w-full">Register</Button>
</form>`}
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

      <AnimatedComponent animation="slideUp">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-2">Usage</h2>
          <p className="text-muted-foreground mb-4">
            Import the form components and use them in your project:
          </p>
          <pre className="text-sm bg-muted p-4 rounded-lg">
            {`import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"`}
          </pre>
        </Card>
      </AnimatedComponent>
    </div>
  )
} 