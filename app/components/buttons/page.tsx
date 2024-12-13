"use client";

import { Button } from "@/components/ui/button";
import { CodePreview } from "@/components/code-preview";
import Link from "next/link";
import { ArrowRight, Mail, Loader2, Trash } from "lucide-react";

export default function ButtonsPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">Button</h1>
        <p className="text-xl text-muted-foreground">
          A clickable element that triggers an action or event, with support for multiple variants and sizes.
        </p>
      </div>

      {/* Usage Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Forms</li>
            <li>Dialog windows</li>
            <li>Cards</li>
            <li>Toolbars</li>
          </ul>
        </div>
      </div>

      {/* Examples Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        <section>
          <h3 className="text-lg font-medium mb-4">Button Variants</h3>
          <CodePreview
            preview={
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            }
            code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
          <CodePreview
            preview={
              <div className="flex items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            }
            code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Mail className="h-4 w-4" /></Button>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">With Icons</h3>
          <CodePreview
            preview={
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button variant="secondary">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            }
            code={`<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>
<Button variant="secondary">
  Next <ArrowRight className="ml-2 h-4 w-4" />
</Button>
<Button variant="outline" size="icon">
  <Mail className="h-4 w-4" />
</Button>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Button States</h3>
          <CodePreview
            preview={
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button disabled variant="secondary">
                  Disabled
                </Button>
                <Button disabled variant="destructive">
                  Disabled
                </Button>
                <Button>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              </div>
            }
            code={`<Button disabled>Disabled</Button>
<Button disabled variant="secondary">Disabled</Button>
<Button disabled variant="destructive">Disabled</Button>
<Button>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
          />
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">As Child</h3>
          <CodePreview
            preview={
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#">Link Button</Link>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    External Link
                  </a>
                </Button>
              </div>
            }
            code={`<Button asChild>
  <Link href="#">Link Button</Link>
</Button>
<Button asChild>
  <a href="#" target="_blank" rel="noopener noreferrer">
    External Link
  </a>
</Button>`}
          />
        </section>
      </div>

      {/* API Reference Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Props</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">variant</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
                  </td>
                  <td className="px-4 py-3 text-sm">'default'</td>
                  <td className="px-4 py-3 text-sm">The visual style of the button.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">size</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    'default' | 'sm' | 'lg' | 'icon'
                  </td>
                  <td className="px-4 py-3 text-sm">'default'</td>
                  <td className="px-4 py-3 text-sm">The size of the button.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">asChild</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">boolean</td>
                  <td className="px-4 py-3 text-sm">false</td>
                  <td className="px-4 py-3 text-sm">
                    Whether to render as a child element instead of a button.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Best Practices</h2>
        <div className="grid gap-4 text-muted-foreground">
          <p>Here are some guidelines for using buttons effectively:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use clear and action-oriented labels</li>
            <li>Position primary actions on the left or top</li>
            <li>Use destructive variant for dangerous actions</li>
            <li>Include icons to enhance visual communication</li>
            <li>Maintain consistent spacing between buttons</li>
            <li>Use appropriate variants to establish visual hierarchy</li>
          </ul>
        </div>
      </div>

      {/* Related Components Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Related Components</h2>
        <div className="grid gap-4">
          <Link href="/components/dropdown-menu" className="text-muted-foreground hover:text-foreground">
            Dropdown Menu - For button-triggered menus
          </Link>
          <Link href="/components/button-group" className="text-muted-foreground hover:text-foreground">
            Button Group - For groups of related buttons
          </Link>
          <Link href="/components/toggle" className="text-muted-foreground hover:text-foreground">
            Toggle - For toggling between two states
          </Link>
        </div>
      </div>
    </div>
  );
}