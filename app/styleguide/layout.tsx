"use client"

export default function StyleGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative py-6 lg:gap-10 lg:py-8">
      <div className="mx-auto w-full min-w-0">
        {children}
      </div>
    </div>
  )
} 