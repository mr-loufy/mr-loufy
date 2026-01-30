export const metadata = {
  title: "Mr Loufy | Amazon KDP Publisher",
  description: "Professional Amazon KDP publishing services"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <nav style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
          <a href="/" style={{ marginRight: 16 }}>Home</a>
          <a href="/services" style={{ marginRight: 16 }}>Services</a>
          <a href="/portfolio" style={{ marginRight: 16 }}>Portfolio</a>
          <a href="/contact">Contact</a>
        </nav>

        <main style={{ padding: "24px" }}>
          {children}
        </main>
      </body>
    </html>
  )
}