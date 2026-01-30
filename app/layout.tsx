import "./globals.css"

export const metadata = {
  title: "Mr Loufy | Amazon KDP Publisher",
  description: "Professional Amazon KDP publishing services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-primary">
        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-lg">Mr Loufy</span>
            <nav className="space-x-6 text-sm">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16">
          {children}
        </main>

        <footer className="border-t text-sm text-center py-6 text-secondary">
          © {new Date().getFullYear()} Mr Loufy
        </footer>
      </body>
    </html>
  )
}