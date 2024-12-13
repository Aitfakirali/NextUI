import { Card } from "@/components/ui/card"

export default function AnimationsLoading() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-muted" />
        <div className="h-4 w-96 animate-pulse rounded-lg bg-muted" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="p-6 space-y-4">
            <div className="h-6 w-32 animate-pulse rounded-lg bg-muted" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded-lg bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded-lg bg-muted" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 