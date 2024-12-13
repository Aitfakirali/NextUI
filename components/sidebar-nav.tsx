import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"

interface SidebarNavProps {
  items: typeof docsConfig.sidebarNav
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="pb-8">
          <h4 className="mb-1 rounded-md px-4 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item.items?.map((item) => {
            if (item.items) {
              return (
                <div key={item.title}>
                  <h5 className="mb-1 rounded-md px-4 py-1 text-sm font-semibold text-muted-foreground">
                    {item.title}
                  </h5>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href!}
                      className={cn(
                        "block rounded-md px-4 py-1.5 text-sm hover:bg-accent",
                        pathname === subItem.href
                          ? "font-medium text-primary bg-accent"
                          : "text-muted-foreground"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "block rounded-md px-4 py-1.5 text-sm hover:bg-accent",
                  pathname === item.href
                    ? "font-medium text-primary bg-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      ))}
    </div>
  )
} 