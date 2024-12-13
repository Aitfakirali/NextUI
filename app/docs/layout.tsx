import { SidebarNav } from "@/components/sidebar-nav"
import { DocsHeader } from "@/components/docs-header"
import { docsConfig } from "@/config/docs"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="container flex-1">
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
            <div className="relative overflow-hidden py-6 pr-6 pl-6 lg:py-8">
              <SidebarNav items={docsConfig.sidebarNav} />
            </div>
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
            <div className="mx-auto w-full min-w-0 px-4 lg:px-6">
              <div className="pb-12 pt-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 