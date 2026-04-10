import { Geist, Geist_Mono } from "next/font/google"
import "@workspace/ui/globals.css"
import I18nProvider from "../components/providers/i18nProvider"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import {
  SidebarProvider,

} from "@workspace/ui/components/sidebar"
import AppSidebar from "../components/layout/AppSidebar";
import Navbar from "../components/layout/navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        geist.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>
          <I18nProvider>
          <SidebarProvider>
            <AppSidebar />

            <main className="flex-1">
             <Navbar />
              {children}
            </main>
          </SidebarProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}