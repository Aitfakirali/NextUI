export default function ColorsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Colors</h1>
        <p className="text-xl text-muted-foreground">
          Our color system is designed to be accessible and consistent across all platforms.
        </p>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Primary Colors</h2>
          <div className="grid gap-4">
            <div className="p-6 bg-primary rounded-lg">
              <div className="flex justify-between items-center text-primary-foreground">
                <span className="font-semibold">Primary</span>
                <span className="font-mono text-sm">bg-primary</span>
              </div>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <div className="flex justify-between items-center text-secondary-foreground">
                <span className="font-semibold">Secondary</span>
                <span className="font-mono text-sm">bg-secondary</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}