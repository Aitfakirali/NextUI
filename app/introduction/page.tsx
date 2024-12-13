export default function IntroductionPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Introduction</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to NexUI, a modern UI component library built with React, Radix UI, and Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is NexUI?</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              NexUI is a collection of reusable components built with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>React for component architecture</li>
              <li>Radix UI for accessibility and interactions</li>
              <li>Tailwind CSS for styling</li>
              <li>TypeScript for type safety</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid gap-4">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-primary/10 rounded-lg">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Accessibility First</h3>
                <p className="text-muted-foreground">
                  All components follow WAI-ARIA patterns and are keyboard navigable.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-primary/10 rounded-lg">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Dark Mode Support</h3>
                <p className="text-muted-foreground">
                  Built-in dark mode with system preference detection.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-primary/10 rounded-lg">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Customizable</h3>
                <p className="text-muted-foreground">
                  Easy to customize with Tailwind CSS utility classes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              To get started with NexUI, check out our:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Installation guide for setup instructions</li>
              <li>Components documentation for usage examples</li>
              <li>Theming guide for customization options</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 