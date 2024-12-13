import * as React from "react"
import { cn } from "@/lib/utils"

interface BookProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  pages?: { title: string; content: React.ReactNode }[]
  onPageChange?: (page: number) => void
}

const Book = React.forwardRef<HTMLDivElement, BookProps>(
  ({ className, pages = [], defaultValue, onPageChange, ...props }, ref) => {
    const [currentPage, setCurrentPage] = React.useState(0)
    const totalPages = pages.length

    const nextPage = () => {
      if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1)
        onPageChange?.(currentPage + 1)
      }
    }

    const previousPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1)
        onPageChange?.(currentPage - 1)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex aspect-[4/3] w-full max-w-3xl flex-col overflow-hidden rounded-xl border bg-background shadow-lg",
          className
        )}
        {...props}
      >
        {/* Book Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-lg font-semibold">
            {pages[currentPage]?.title || "Book"}
          </h3>
          <div className="text-sm text-muted-foreground">
            Page {currentPage + 1} of {totalPages}
          </div>
        </div>

        {/* Book Content */}
        <div className="flex-1 overflow-auto p-6">
          {pages[currentPage]?.content}
        </div>

        {/* Book Navigation */}
        <div className="flex items-center justify-between border-t px-6 py-4">
          <button
            onClick={previousPage}
            disabled={currentPage === 0}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              currentPage === 0
                ? "text-muted-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              currentPage === totalPages - 1
                ? "text-muted-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Next
          </button>
        </div>
      </div>
    )
  }
)
Book.displayName = "Book"

export { Book } 