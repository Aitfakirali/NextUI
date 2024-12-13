import { Metadata } from "next"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Error Boundary",
  description: "A component for handling and displaying errors gracefully in React applications.",
}

export default function ErrorBoundaryDoc() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Error Boundary</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Basic Error Boundary</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              An error occurred while rendering this component.
              <Button variant="link" className="p-0 h-auto font-normal">
                Try again
              </Button>
            </AlertDescription>
          </Alert>
        </div>
        <div className="usage">
          ```tsx
          import { Component, ErrorInfo, ReactNode } from "react"
          import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
          import { Button } from "@/components/ui/button"

          interface Props {
            children: ReactNode
          }

          interface State {
            hasError: boolean
          }

          export class ErrorBoundary extends Component<Props, State> {
            public state: State = {
              hasError: false
            }

            public static getDerivedStateFromError(_: Error): State {
              return { hasError: true }
            }

            public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
              console.error("Uncaught error:", error, errorInfo)
            }

            public render() {
              if (this.state.hasError) {
                return (
                  <Alert variant="destructive">
                    <AlertTitle>Something went wrong</AlertTitle>
                    <AlertDescription>
                      An error occurred while rendering this component.
                      <Button
                        variant="link"
                        className="p-0 h-auto font-normal"
                        onClick={() => this.setState({ hasError: false })}
                      >
                        Try again
                      </Button>
                    </AlertDescription>
                  </Alert>
                )
              }

              return this.props.children
            }
          }
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">With Custom Fallback</h2>
        <div className="preview border rounded-lg p-6 mb-4">
          <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
                Application Error
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're sorry, but something went wrong. Our team has been notified and is working on the issue.
            </p>
            <div className="flex gap-3">
              <Button variant="destructive">Report Issue</Button>
              <Button variant="outline">Reload Page</Button>
            </div>
          </div>
        </div>
        <div className="usage">
          ```tsx
          function CustomErrorFallback({ error, resetErrorBoundary }) {
            return (
              <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
                    Application Error
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We're sorry, but something went wrong. Our team has been notified.
                </p>
                <div className="flex gap-3">
                  <Button variant="destructive" onClick={() => reportError(error)}>
                    Report Issue
                  </Button>
                  <Button variant="outline" onClick={resetErrorBoundary}>
                    Reload Page
                  </Button>
                </div>
              </div>
            )
          }

          <ErrorBoundary FallbackComponent={CustomErrorFallback}>
            <YourComponent />
          </ErrorBoundary>
          ```
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Route Level Error Boundary</h3>
          <div className="usage">
            ```tsx
            // app/layout.tsx
            import { ErrorBoundary } from "@/components/error-boundary"

            export default function RootLayout({
              children,
            }: {
              children: React.ReactNode
            }) {
              return (
                <html>
                  <body>
                    <ErrorBoundary>
                      {children}
                    </ErrorBoundary>
                  </body>
                </html>
              )
            }
            ```
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-6">Component Level Error Boundary</h3>
          <div className="usage">
            ```tsx
            function DataComponent() {
              return (
                <ErrorBoundary>
                  <DataFetching />
                </ErrorBoundary>
              )
            }
            ```
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border">Prop</th>
                <th className="text-left p-2 border">Type</th>
                <th className="text-left p-2 border">Default</th>
                <th className="text-left p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">children</td>
                <td className="p-2 border">ReactNode</td>
                <td className="p-2 border">required</td>
                <td className="p-2 border">Components to be wrapped</td>
              </tr>
              <tr>
                <td className="p-2 border">FallbackComponent</td>
                <td className="p-2 border">ComponentType</td>
                <td className="p-2 border">DefaultFallback</td>
                <td className="p-2 border">Custom error UI component</td>
              </tr>
              <tr>
                <td className="p-2 border">onError</td>
                <td className="p-2 border">(error: Error) => void</td>
                <td className="p-2 border">undefined</td>
                <td className="p-2 border">Error callback function</td>
              </tr>
              <tr>
                <td className="p-2 border">resetKeys</td>
                <td className="p-2 border">Array</td>
                <td className="p-2 border">[]</td>
                <td className="p-2 border">Keys that will reset the error boundary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Place error boundaries strategically to isolate failures</li>
            <li>Provide meaningful error messages and recovery options</li>
            <li>Log errors for monitoring and debugging</li>
            <li>Consider different error states (network, runtime, etc.)</li>
            <li>Test error scenarios thoroughly</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 