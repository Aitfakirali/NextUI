import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          This page could not be found. It either doesn't exist or was moved to a new location.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/docs">
              Return to Documentation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 