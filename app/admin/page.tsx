"use client"
import { useEffect, useState } from "react"

export default function Admin() {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      window.location.href = "/admin/login"
    }
  }, [])

  const upload = async () => {
    if (!file) {
      alert("No file selected")
      return
    }

    setStatus("Uploading...