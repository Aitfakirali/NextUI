import * as React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbProps extends React.ComponentProps<"nav"> {
  segments: {
    label: string
    href: string
  }[]
  separator?: React.ReactNode
  truncate?: boolean
}

export function Breadcrumb({
  segments,
  separator = <ChevronRight className="h-4 w-4" />,
  truncate = true,
  className,
  ...props
}: BreadcrumbProps) {
  const allSegments = segments.map((segment, index) => ({
    ...segment,
    isLast: index === segments.length - 1,
  }))

  if (truncate && segments.length > 3) {
    return (
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center text-sm", className)}
        {...props}
      >
        <ol className="flex items-center space-x-2">
          <li>
            <a
              href={allSegments[0].href}
              className="text-muted-foreground hover:text-foreground"
            >
              {allSegments[0].label}
            </a>
          </li>
          <li className="text-muted-foreground">
            <span className="flex items-center justify-center">
              {separator}
            </span>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center text-muted-foreground hover:text-foreground"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </li>
          <li className="text-muted-foreground">
            <span className="flex items-center justify-center">
              {separator}
            </span>
          </li>
          <li>
            <a
              href={allSegments[allSegments.length - 1].href}
              className={cn(
                allSegments[allSegments.length - 1].isLast
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={
                allSegments[allSegments.length - 1].isLast
                  ? "page"
                  : undefined
              }
            >
              {allSegments[allSegments.length - 1].label}
            </a>
          </li>
        </ol>
      </nav>
    )
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm", className)}
      {...props}
    >
      <ol className="flex items-center space-x-2">
        {allSegments.map((segment, index) => (
          <React.Fragment key={segment.href}>
            <li>
              <a
                href={segment.href}
                className={cn(
                  segment.isLast
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={segment.isLast ? "page" : undefined}
              >
                {segment.label}
              </a>
            </li>
            {!segment.isLast && (
              <li className="text-muted-foreground">
                <span className="flex items-center justify-center">
                  {separator}
                </span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}
