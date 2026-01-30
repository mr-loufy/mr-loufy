"use client"
import { useEffect, useState } from "react"

export default function Admin() {
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      window.location.href = "/admin/login"
    }
  }, [])

  const upload = async () => {
    if (!file) return

    const form = new FormData()
    form.append("file", file)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    })

    const data = await res.json()
    alert("Uploaded: " + data.secure_url)
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={upload}
        className="ml-2 bg-accent text-white px-4 py-2"
      >
        Upload Image
      </button>
    </>
  )
}