"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function TypographyPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Typography</h1>
        <p className="text-xl text-muted-foreground">
          Typography styles and guidelines for consistent text presentation.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Headings</h2>
          <div className="space-y-6">
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Heading 1
              </h1>
              <code className="text-sm text-muted-foreground">text-4xl/text-5xl font-extrabold</code>
            </div>
            <div>
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Heading 2
              </h2>
              <code className="text-sm text-muted-foreground">text-3xl font-semibold</code>
            </div>
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Heading 3
              </h3>
              <code className="text-sm text-muted-foreground">text-2xl font-semibold</code>
            </div>
            <div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Heading 4
              </h4>
              <code className="text-sm text-muted-foreground">text-xl font-semibold</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Paragraphs</h2>
          <div className="space-y-6">
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king, seeing how much happier his subjects were, realized the value of kindness and
                compassion. He saw that ruling with an iron fist wasn't as effective as ruling with
                understanding and empathy.
              </p>
              <code className="text-sm text-muted-foreground">leading-7</code>
            </div>
            <div>
              <p className="text-xl text-muted-foreground">
                This is a large paragraph with muted foreground color, typically used for introductory
                text or important but secondary information.
              </p>
              <code className="text-sm text-muted-foreground">text-xl text-muted-foreground</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Inline Text Styles</h2>
          <div className="space-y-4">
            <div>
              <p className="leading-7">
                Text can be <strong>bold</strong>, <em>italic</em>, or{" "}
                <span className="underline">underlined</span>. You can also use{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  inline code
                </code>{" "}
                for technical terms.
              </p>
            </div>
            <div>
              <p className="leading-7">
                Links can be <a href="#" className="font-medium text-primary underline underline-offset-4">
                  styled like this
                </a>{" "}
                to make them stand out.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Lists</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-2">Unordered List</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item with some additional text that wraps to the next line</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Ordered List</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item with some additional text that wraps to the next line</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Blockquotes</h2>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "Typography is the art and technique of arranging type to make written language legible,
            readable, and appealing when displayed."
          </blockquote>
          <code className="text-sm text-muted-foreground">border-l-2 pl-6 italic</code>
        </section>
      </div>
    </div>
  );
}