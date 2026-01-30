export default function PortfolioCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 border rounded">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  )
}