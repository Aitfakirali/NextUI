import { Metadata } from "next"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Calendar",
  description: "A date picker calendar component with various display options and customization.",
}

export default function CalendarDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Calendar</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Calendar component provides an interactive date picker with support for single date selection, date ranges, and various display options.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Calendar</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Calendar
            mode="single"
            className="rounded-md border"
          />
        </div>
        <div className="usage">
          ```tsx
          import { Calendar } from "@/components/ui/calendar"

          export function BasicCalendar() {
            return (
              <Calendar
                mode="single"
                className="rounded-md border"
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Date Range Selection</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Calendar
            mode="range"
            className="rounded-md border"
            numberOfMonths={2}
          />
        </div>
        <div className="usage">
          ```tsx
          import { Calendar } from "@/components/ui/calendar"
          import { DateRange } from "react-day-picker"
          import { useState } from "react"

          export function DateRangeCalendar() {
            const [date, setDate] = useState<DateRange | undefined>()
            
            return (
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                numberOfMonths={2}
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Custom Navigation</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Calendar
            mode="single"
            className="rounded-md border"
            components={{
              IconLeft: () => <ChevronLeft className="h-4 w-4" />,
              IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
          />
        </div>
        <div className="usage">
          ```tsx
          import { Calendar } from "@/components/ui/calendar"
          import { ChevronLeft, ChevronRight } from "lucide-react"

          export function CustomNavigationCalendar() {
            return (
              <Calendar
                mode="single"
                className="rounded-md border"
                components={{
                  IconLeft: () => <ChevronLeft className="h-4 w-4" />,
                  IconRight: () => <ChevronRight className="h-4 w-4" />,
                }}
              />
            )
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border">Prop</th>
                <th className="text-left p-2 border">Type</th>
                <th className="text-left p-2 border">Default</th>
                <th className="text-left p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">mode</td>
                <td className="p-2 border">"single" | "range" | "multiple"</td>
                <td className="p-2 border">"single"</td>
                <td className="p-2 border">Selection mode of the calendar</td>
              </tr>
              <tr>
                <td className="p-2 border">selected</td>
                <td className="p-2 border">Date | Date[] | DateRange</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Currently selected date(s)</td>
              </tr>
              <tr>
                <td className="p-2 border">onSelect</td>
                <td className="p-2 border">(date: Date) => void</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Selection callback function</td>
              </tr>
              <tr>
                <td className="p-2 border">disabled</td>
                <td className="p-2 border">boolean</td>
                <td className="p-2 border">false</td>
                <td className="p-2 border">Whether the calendar is disabled</td>
              </tr>
              <tr>
                <td className="p-2 border">numberOfMonths</td>
                <td className="p-2 border">number</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">Number of months to display</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The Calendar component can be customized using:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Custom navigation icons</li>
            <li>Custom day rendering</li>
            <li>Custom month navigation</li>
            <li>Custom styling via className prop</li>
            <li>Localization support</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 