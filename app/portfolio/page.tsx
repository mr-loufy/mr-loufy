import { portfolioItems } from "@/lib/data"
import PortfolioCard from "@/components/PortfolioCard"

export default function Portfolio() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {portfolioItems.map((item, i) => (
          <PortfolioCard key={i} {...item} />
        ))}
      </div>
    </>
  )
}