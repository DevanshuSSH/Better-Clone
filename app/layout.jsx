import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Better - Mortgages made simple",
  description: "Making homeownership simpler, faster, and more accessible for all Americans"
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


