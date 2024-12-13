"use client"

import * as React from "react"
import { DatePicker } from "@/components/ui/date-picker"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { Label } from "@/components/ui/label"

export default function DatePickerPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Date Picker</h1>
          <p className="text-xl text-muted-foreground">
            A date input component with calendar popup.
          </p>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Example</h2>
            <div className="w-[300px]">
              <DatePicker />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Label</h2>
            <div className="w-[300px] space-y-2">
              <Label>Date of birth</Label>
              <DatePicker />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">With Default Value</h2>
            <div className="w-[300px]">
              <DatePicker date={new Date()} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Code</h2>
            <div className="rounded-lg bg-muted p-4">
              <pre>
                <code>{`import { DatePicker } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/label"

// Basic date picker
<DatePicker />

// With label
<div className="space-y-2">
  <Label>Date of birth</Label>
  <DatePicker />
</div>

// With default value
<DatePicker date={new Date()} />

// With onChange handler
<DatePicker
  onDateChange={(date) => {
    console.log("Selected date:", date)
  }}
/>`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Props</h2>
            <div className="prose prose-gray dark:prose-invert">
              <h3>DatePicker</h3>
              <ul>
                <li><code>date</code> - The default date value</li>
                <li><code>onDateChange</code> - Callback function when date changes</li>
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
                    <li>Use clear labels</li>
                    <li>Provide date format hints</li>
                    <li>Handle invalid dates</li>
                    <li>Consider date ranges</li>
                    <li>Support keyboard input</li>
                  </ul>
                </li>
                <li>Common use cases:
                  <ul>
                    <li>Birth date selection</li>
                    <li>Event scheduling</li>
                    <li>Booking systems</li>
                    <li>Deadline setting</li>
                    <li>Filter by date</li>
                  </ul>
                </li>
                <li>Accessibility:
                  <ul>
                    <li>Keyboard navigation</li>
                    <li>Screen reader support</li>
                    <li>ARIA labels</li>
                    <li>Focus management</li>
                    <li>Clear error states</li>
                  </ul>
                </li>
                <li>Localization:
                  <ul>
                    <li>Date formats</li>
                    <li>Language support</li>
                    <li>Time zones</li>
                    <li>Calendar systems</li>
                    <li>Regional preferences</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 