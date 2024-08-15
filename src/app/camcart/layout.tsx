import type { Metadata } from "next";
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: "Camcart"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}
