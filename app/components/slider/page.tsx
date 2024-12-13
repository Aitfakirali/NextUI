"use client"

import { Slider } from "@/components/ui/slider"
import { CodePreview } from "@/components/code-preview"

export default function SliderPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Slider</h1>
        <p className="text-xl text-muted-foreground">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <CodePreview
            preview={
              <div className="w-full max-w-xl">
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            }
            code={`<Slider defaultValue={[50]} max={100} step={1} />`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
          <CodePreview
            preview={
              <div className="w-full max-w-xl">
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            }
            code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Labels</h2>
          <CodePreview
            preview={
              <div className="w-full max-w-xl space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label>Volume</label>
                    <span className="text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label>Price Range</label>
                    <span className="text-muted-foreground">$25 - $75</span>
                  </div>
                  <Slider defaultValue={[25, 75]} max={100} step={1} />
                </div>
              </div>
            }
            code={`<div className="space-y-4">
  <div className="flex justify-between">
    <label>Volume</label>
    <span className="text-muted-foreground">50%</span>
  </div>
  <Slider defaultValue={[50]} max={100} step={1} />
</div>
<div className="space-y-4">
  <div className="flex justify-between">
    <label>Price Range</label>
    <span className="text-muted-foreground">$25 - $75</span>
  </div>
  <Slider defaultValue={[25, 75]} max={100} step={1} />
</div>`}
          />
        </section>
      </div>
    </div>
  )
} 