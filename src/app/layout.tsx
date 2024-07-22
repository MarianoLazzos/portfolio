import type { Metadata } from "next";
import Layout from '@/components/layout';

export const metadata: Metadata = {
  title: "Mariano Lazzos"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}
