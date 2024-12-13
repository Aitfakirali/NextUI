import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NexUI - Modern React Component Library",
  description: "A collection of modern, accessible, and beautiful React components",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                  <a className="mr-6 flex items-center space-x-2" href="/">
                    <span className="h-6 w-6 rounded-lg bg-primary"></span>
                    <span className="hidden font-bold sm:inline-block">
                      NexUI
                    </span>
                  </a>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <div className="w-full flex-1 md:w-auto md:flex-none">
                    {/* Add search here later */}
                  </div>
                  <nav className="flex items-center space-x-2">
                    <ThemeToggle />
                    <a
                      href="https://github.com/your-username/nexui"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      GitHub
                    </a>
                  </nav>
                </div>
              </div>
            </header>
            <div className="flex-1">
              <div className="border-b">
                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                  <Sidebar />
                  <main className="relative py-6 lg:gap-10 lg:py-8">
                    <div className="mx-auto max-w-4xl">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}