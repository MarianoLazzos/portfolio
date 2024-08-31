import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepago"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
