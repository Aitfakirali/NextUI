"use client"

import { CodePreview } from "@/components/code-preview"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function AnimationPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Animation</h1>
        <p className="text-xl text-muted-foreground">
          Beautiful animations and transitions for your components.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Fade Animations</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Button className="animate-in fade-in duration-500">Fade In</Button>
                <Button className="animate-in fade-in-up duration-500">Fade In Up</Button>
                <Button className="animate-in fade-in-down duration-500">Fade In Down</Button>
                <Button className="animate-in fade-in-left duration-500">Fade In Left</Button>
                <Button className="animate-in fade-in-right duration-500">Fade In Right</Button>
              </div>
            }
            code={`<div className="animate-in fade-in duration-500">Fade In</div>
<div className="animate-in fade-in-up duration-500">Fade In Up</div>
<div className="animate-in fade-in-down duration-500">Fade In Down</div>
<div className="animate-in fade-in-left duration-500">Fade In Left</div>
<div className="animate-in fade-in-right duration-500">Fade In Right</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Scale Animations</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Button className="animate-in zoom-in duration-500">Scale In</Button>
                <Button className="animate-in zoom-in-50 duration-500">Scale In 50%</Button>
                <Button className="animate-in zoom-in-75 duration-500">Scale In 75%</Button>
                <Button className="animate-in zoom-out duration-500">Scale Out</Button>
                <Button className="hover:scale-110 transition-transform">Hover Scale</Button>
              </div>
            }
            code={`<div className="animate-in zoom-in duration-500">Scale In</div>
<div className="animate-in zoom-in-50 duration-500">Scale In 50%</div>
<div className="animate-in zoom-in-75 duration-500">Scale In 75%</div>
<div className="animate-in zoom-out duration-500">Scale Out</div>
<div className="hover:scale-110 transition-transform">Hover Scale</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Slide Animations</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Button className="animate-in slide-in-from-left duration-500">
                  Slide From Left
                </Button>
                <Button className="animate-in slide-in-from-right duration-500">
                  Slide From Right
                </Button>
                <Button className="animate-in slide-in-from-top duration-500">
                  Slide From Top
                </Button>
                <Button className="animate-in slide-in-from-bottom duration-500">
                  Slide From Bottom
                </Button>
              </div>
            }
            code={`<div className="animate-in slide-in-from-left duration-500">Slide From Left</div>
<div className="animate-in slide-in-from-right duration-500">Slide From Right</div>
<div className="animate-in slide-in-from-top duration-500">Slide From Top</div>
<div className="animate-in slide-in-from-bottom duration-500">Slide From Bottom</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Continuous Animations</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Button className="animate-spin">Spin</Button>
                <Button className="animate-spin-slow">Spin Slow</Button>
                <Button className="animate-spin-reverse">Spin Reverse</Button>
                <Button className="animate-pulse">Pulse</Button>
                <Button className="animate-bounce">Bounce</Button>
                <Button className="animate-ping">Ping</Button>
              </div>
            }
            code={`<div className="animate-spin">Spin</div>
<div className="animate-spin-slow">Spin Slow</div>
<div className="animate-spin-reverse">Spin Reverse</div>
<div className="animate-pulse">Pulse</div>
<div className="animate-bounce">Bounce</div>
<div className="animate-ping">Ping</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Hover Animations</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Button className="hover:animate-pulse transition-all">Hover Pulse</Button>
                <Button className="hover:animate-bounce transition-all">Hover Bounce</Button>
                <Button className="hover:-translate-y-1 transition-transform">Hover Lift</Button>
                <Button className="hover:scale-105 hover:shadow-lg transition-all">Hover Scale & Shadow</Button>
                <Button className="hover:rotate-3 transition-transform">Hover Rotate</Button>
              </div>
            }
            code={`<div className="hover:animate-pulse transition-all">Hover Pulse</div>
<div className="hover:animate-bounce transition-all">Hover Bounce</div>
<div className="hover:-translate-y-1 transition-transform">Hover Lift</div>
<div className="hover:scale-105 hover:shadow-lg transition-all">Hover Scale & Shadow</div>
<div className="hover:rotate-3 transition-transform">Hover Rotate</div>`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Card Animations</h2>
          <CodePreview
            preview={
              <div className="grid gap-4">
                <Card className="p-6 hover:scale-105 transition-transform cursor-pointer">
                  <h3 className="font-semibold">Hover Scale Card</h3>
                  <p className="text-sm text-muted-foreground">Hover to scale up</p>
                </Card>
                <Card className="p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <h3 className="font-semibold">Hover Shadow Card</h3>
                  <p className="text-sm text-muted-foreground">Hover for shadow</p>
                </Card>
                <Card className="p-6 hover:-translate-y-2 transition-transform cursor-pointer">
                  <h3 className="font-semibold">Hover Lift Card</h3>
                  <p className="text-sm text-muted-foreground">Hover to lift up</p>
                </Card>
              </div>
            }
            code={`<Card className="p-6 hover:scale-105 transition-transform cursor-pointer">
  <h3 className="font-semibold">Hover Scale Card</h3>
  <p className="text-sm text-muted-foreground">Hover to scale up</p>
</Card>

<Card className="p-6 hover:shadow-xl transition-shadow cursor-pointer">
  <h3 className="font-semibold">Hover Shadow Card</h3>
  <p className="text-sm text-muted-foreground">Hover for shadow</p>
</Card>

<Card className="p-6 hover:-translate-y-2 transition-transform cursor-pointer">
  <h3 className="font-semibold">Hover Lift Card</h3>
  <p className="text-sm text-muted-foreground">Hover to lift up</p>
</Card>`}
          />
        </section>
      </div>
    </div>
  )
} 