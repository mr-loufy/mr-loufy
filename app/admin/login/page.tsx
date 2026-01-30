"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const login = () => {
    if (password === "strongpassword123") {
      localStorage.setItem("admin", "true")
      router.push("/admin")
    } else {
      alert("Wrong password")
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
        type="password"
        placeholder="Admin password"
        className="border p-2 mr-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login} className="bg-accent text-white px-4 py-2">
        Login
      </button>
    </>
  )
}