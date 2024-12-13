"use client";

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { docsConfig } from "@/config/docs"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-[300px] pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <span className="font-bold">NexUI</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-2 px-4">
              <MobileLink href="/docs" onOpenChange={setOpen}>
                Documentation
              </MobileLink>
              <MobileLink href="/components" onOpenChange={setOpen}>
                Components
              </MobileLink>
              <MobileLink href="/themes" onOpenChange={setOpen}>
                Themes
              </MobileLink>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3 pt-6">
                  <h4 className="font-medium">{item.title}</h4>
                  {item.items?.map((item) => {
                    if (item.items) {
                      return (
                        <div key={item.title} className="flex flex-col space-y-3 pl-3">
                          <h5 className="font-medium text-muted-foreground">
                            {item.title}
                          </h5>
                          {item.items.map((subItem) => (
                            <MobileLink
                              key={subItem.href}
                              href={subItem.href!}
                              onOpenChange={setOpen}
                              className={cn(
                                "text-muted-foreground",
                                pathname === subItem.href &&
                                  "text-foreground font-medium"
                              )}
                            >
                              {subItem.title}
                            </MobileLink>
                          ))}
                        </div>
                      )
                    }

                    return (
                      <MobileLink
                        key={item.href}
                        href={item.href!}
                        onOpenChange={setOpen}
                        className={cn(
                          "text-muted-foreground",
                          pathname === item.href && "text-foreground font-medium"
                        )}
                      >
                        {item.title}
                      </MobileLink>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
}: MobileLinkProps) {
  const router = usePathname()
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(
        "flex w-full items-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}