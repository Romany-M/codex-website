import type { Metadata } from "next"
import "./globals.css"
import Loader from "@/components/Loader"
import Cursor from "@/components/Cursor"

export const metadata: Metadata = {
  title: "Codex Software",
  description: "Modern software development company",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Cursor />

        <Loader>
          {children}
        </Loader>

      </body>
    </html>
  )
}