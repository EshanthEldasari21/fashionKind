export default function ComingSoonPage() {
  return (
    <div className="min-h-100 flex items-center justify-center bg-gradient-to-b from-background to-muted/30 " >
      <div className="max-w-2xl w-full" >
        <div className="rounded-[2rem] border bg-background/90 backdrop-blur shadow-xl p-10 text-center" style={{height: "85vh", marginTop: "20px"}}>
          <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium">
            ✨ Launching Soon
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Coming Soon
          </h1>

          <p className="text-muted-foreground text-md leading-8 max-w-xl mx-auto mb-10">
            We’re crafting this module to deliver a faster, smarter, and more delightful workflow experience. Stay tuned for something amazing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-3xl border p-5 text-left shadow-sm">
              <p className="text-base font-semibold mb-2">⚡ Fast Workflows</p>
              <p className="text-sm text-muted-foreground leading-6">
                Optimized user journeys built for speed and operational efficiency.
              </p>
            </div>

            <div className="rounded-3xl border p-5 text-left shadow-sm">
              <p className="text-base font-semibold mb-2">📈 Smart Insights</p>
              <p className="text-sm text-muted-foreground leading-6">
                Better visibility with analytics, summaries, and performance tracking.
              </p>
            </div>

            <div className="rounded-3xl border p-5 text-left shadow-sm">
              <p className="text-base font-semibold mb-2">🌍 Global Ready</p>
              <p className="text-sm text-muted-foreground leading-6">
                Fully aligned with your multi-language dashboard experience.
              </p>
            </div>
          </div>

          <button className="rounded-2xl px-6 py-3 text-sm font-medium border hover:bg-muted transition-colors">
            Notify Me When Live
          </button>
        </div>
      </div>
    </div>
  )
}
