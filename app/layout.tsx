import clsx from "clsx"
import { Open_Sans } from "next/font/google"
import { FC, PropsWithChildren } from "react"

import { siteMetadata } from "@/data/siteMetaData"
import "@/styles/globals.css"
import Layout from "@/components/common/Layout"

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] })
export const metadata = siteMetadata

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={clsx(openSans.variable, "antialiased bg-neutral-100")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default RootLayout
