"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Book, Palette, Boxes, Settings, Menu } from "lucide-react";

const navigation = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/",
        icon: Book,
      },
      {
        title: "Installation",
        href: "/installation",
        icon: Settings,
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Buttons",
        href: "/components/buttons",
        icon: Boxes,
      },
      {
        title: "Cards",
        href: "/components/cards",
        icon: Boxes,
      },
      {
        title: "Forms",
        href: "/components/forms",
        icon: Boxes,
      },
    ],
  },
  {
    title: "Theming",
    items: [
      {
        title: "Colors",
        href: "/theming/colors",
        icon: Palette,
      },
      {
        title: "Typography",
        href: "/theming/typography",
        icon: Palette,
      },
    ],
  },
];

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navigation({ className, ...props }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "w-64 border-r bg-background px-4 py-8 flex flex-col",
        className
      )}
      {...props}
    >
      <div className="mb-8 px-4">
        <h1 className="text-2xl font-bold">Design System</h1>
      </div>
      <ScrollArea className="flex-1">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <h2 className="px-4 text-sm font-semibold text-muted-foreground mb-2">
              {section.title}
            </h2>
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "transparent"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        ))}
      </ScrollArea>
    </nav>
  );
}