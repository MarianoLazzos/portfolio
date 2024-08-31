import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from '@/theme/theme-provider'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
