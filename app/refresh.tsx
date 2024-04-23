'use client'

import checkAuth from "@/lib/POST/Auth/refresh_token"
import { useEffect } from "react"

export default function Refresh() {
  useEffect(() => {
    setInterval(() => {
      checkAuth()
    }, 2 * 60 * 1000)
  }, [])
  return (
    <div></div>
  )
}