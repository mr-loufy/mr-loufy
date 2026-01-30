export const metadata = {
  title: "Mr Loufy | Amazon KDP Publisher",
  description: "Professional Amazon KDP publishing services for authors and publishers"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "system-ui, Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#111111"
      }}>
        <header style={{
          padding: "20px 24px",
          borderBottom: "1px solid #eaeaea"
        }}>
          <strong>Mr Loufy</strong>
          <nav style={{ float: "right" }}>
            <a href="/" style={{ marginRight: 16 }}>Home</a>
            <a href="/services" style={{ marginRight: 16 }}>Services</a>
            <a href="/portfolio" style={{ marginRight: 16 }}>Portfolio</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 24px"
        }}>
          {children}
        </main>

        <footer style={{
          borderTop: "1px solid #eaeaea",
          padding: "20px",
          textAlign: "center",
          fontSize: "14px"
        }}>
          © {new Date().getFullYear()} Mr Loufy. Amazon KDP Publishing.
        </footer>
      </body>
    </html>
  )
}