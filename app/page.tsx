export default function Home() {
  return (
    <>
      <section className="max-w-3xl mb-24">
        <h1 className="text-5xl font-bold mb-6">
          Amazon KDP Publishing for Serious Authors
        </h1>

        <p className="text-lg text-secondary mb-8">
          Professional book publishing, formatting, covers,
          and listing optimization for Amazon KDP.
        </p>

        <a
          href="/contact"
          className="inline-block bg-accent text-white px-8 py-4 rounded"
        >
          Start Your Project
        </a>
      </section>

      <section className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold mb-2">Clean Publishing</h3>
          <p className="text-secondary text-sm">
            Amazon compliant files with zero errors.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Professional Design</h3>
          <p className="text-secondary text-sm">
            Covers and interiors that look credible.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Sales Focused</h3>
          <p className="text-secondary text-sm">
            Optimized listings that convert.
          </p>
        </div>
      </section>
    </>
  )
}