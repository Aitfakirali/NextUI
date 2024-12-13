import { Metadata } from "next"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export const metadata: Metadata = {
  title: "Navigation Menu",
  description: "A responsive navigation menu component with dropdowns.",
}

export default function NavigationMenuDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Navigation Menu</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Navigation Menu component provides a responsive navigation interface with dropdown menus.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Navigation Menu</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <NavigationMenuLink href="/docs/installation">
                        Installation
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/docs/components">
                        Components
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/docs">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="usage">
          ```tsx
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <NavigationMenuLink href="/docs/installation">
                        Installation
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/docs/components">
                        Components
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/docs">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                  </svg>
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <NavigationMenuLink href="/docs/components/button">
                        Button
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/docs/components/card">
                        Card
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="usage">
          ```tsx
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Icon className="mr-2 h-4 w-4" />
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <NavigationMenuLink href="/docs/components/button">
                        Button
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/docs/components/card">
                        Card
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          ```
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border">Component</th>
                <th className="text-left p-2 border">Prop</th>
                <th className="text-left p-2 border">Type</th>
                <th className="text-left p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">NavigationMenu</td>
                <td className="p-2 border">defaultValue</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">The default selected value</td>
              </tr>
              <tr>
                <td className="p-2 border">NavigationMenu</td>
                <td className="p-2 border">value</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">The controlled value</td>
              </tr>
              <tr>
                <td className="p-2 border">NavigationMenu</td>
                <td className="p-2 border">onValueChange</td>
                <td className="p-2 border">(value: string) => void</td>
                <td className="p-2 border">Callback when value changes</td>
              </tr>
              <tr>
                <td className="p-2 border">NavigationMenuTrigger</td>
                <td className="p-2 border">className</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="p-2 border">NavigationMenuContent</td>
                <td className="p-2 border">className</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="p-2 border">NavigationMenuLink</td>
                <td className="p-2 border">href</td>
                <td className="p-2 border">string</td>
                <td className="p-2 border">The link URL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 