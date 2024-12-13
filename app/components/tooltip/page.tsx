"use client"

import { CodePreview } from "@/components/code-preview"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PlusCircle, Settings, Info } from "lucide-react"

export default function TooltipPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Tooltip</h1>
        <p className="text-xl text-muted-foreground">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <CodePreview
            preview={
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="w-10 p-0">
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            }
            code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" className="w-10 p-0">
        <PlusCircle className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Tooltip Positions</h2>
          <CodePreview
            preview={
              <div className="flex items-center justify-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>This tooltip appears on top</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>This tooltip appears at the bottom</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>This tooltip appears on the left</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>This tooltip appears on the right</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            }
            code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>This tooltip appears on top</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

{/* Repeat for Bottom, Left, Right with different side props */}`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">With Icons</h2>
          <CodePreview
            preview={
              <div className="flex items-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Settings</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Info className="h-4 w-4" />
                        Help
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View documentation</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            }
            code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Settings</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="sm" className="gap-2">
        <Info className="h-4 w-4" />
        Help
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>View documentation</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <div className="rounded-lg border">
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="font-semibold">Component</div>
                <div className="font-semibold">Props</div>
                <div className="font-semibold">Default</div>
                <div className="font-semibold">Description</div>
                
                <div className="font-mono">TooltipProvider</div>
                <div>delayDuration, skipDelayDuration</div>
                <div>200, 300</div>
                <div>Provider component that manages tooltip state.</div>
                
                <div className="font-mono">Tooltip</div>
                <div>defaultOpen, open, onOpenChange</div>
                <div>-</div>
                <div>Root component that contains the tooltip parts.</div>
                
                <div className="font-mono">TooltipTrigger</div>
                <div>asChild</div>
                <div>false</div>
                <div>Element that triggers the tooltip.</div>
                
                <div className="font-mono">TooltipContent</div>
                <div>side, align, sideOffset</div>
                <div>"top", "center", 4</div>
                <div>The tooltip content that appears when triggered.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 