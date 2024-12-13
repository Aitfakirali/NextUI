"use client"

import { AnimatedComponent } from "@/components/ui/animated-component"

export default function TypographyPage() {
  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-lg text-muted-foreground">
          Font styles and text elements used throughout the UI.
        </p>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.1}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Headings</h2>
          <div className="space-y-6">
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Heading 1
              </h1>
              <p className="text-sm text-muted-foreground">Font size: 4xl (2.25rem)</p>
            </div>
            <div>
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors">
                Heading 2
              </h2>
              <p className="text-sm text-muted-foreground">Font size: 3xl (1.875rem)</p>
            </div>
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Heading 3
              </h3>
              <p className="text-sm text-muted-foreground">Font size: 2xl (1.5rem)</p>
            </div>
            <div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Heading 4
              </h4>
              <p className="text-sm text-muted-foreground">Font size: xl (1.25rem)</p>
            </div>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.2}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Paragraphs</h2>
          <div className="space-y-4">
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king, seeing how much happier his subjects were, realized the value of kindness and
                compassion. He saw that true power lay not in harsh rules and punishment, but in
                understanding and helping others.
              </p>
              <p className="text-sm text-muted-foreground">Default paragraph</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                This is a small paragraph with muted foreground color, perfect for secondary information
                or helper text.
              </p>
              <p className="text-sm text-muted-foreground">Small muted paragraph</p>
            </div>
            <div>
              <p className="text-lg font-medium">
                This is a large paragraph with medium font weight, ideal for important information or
                introductory text.
              </p>
              <p className="text-sm text-muted-foreground">Large paragraph with medium weight</p>
            </div>
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent animation="fadeIn" delay={0.3}>
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Inline Text</h2>
          <div className="space-y-4">
            <div>
              <p className="leading-7">
                This text includes <strong>bold text</strong>, <em>italic text</em>,{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  inline code
                </code>
                , and <a className="font-medium text-primary underline underline-offset-4">links</a>.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Font Weights:</p>
              <div className="space-y-1">
                <p className="font-light">Light (300)</p>
                <p className="font-normal">Regular (400)</p>
                <p className="font-medium">Medium (500)</p>
                <p className="font-semibold">Semibold (600)</p>
                <p className="font-bold">Bold (700)</p>
                <p className="font-extrabold">Extra Bold (800)</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  )
} 