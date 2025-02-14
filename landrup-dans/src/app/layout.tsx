import DrawerMenu from "@/components/layout/DrawerMenu";
import { AuthProvider } from "@/contexts/AuthContext";
import { Metadata } from "next";
import React from "react";
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Landrup Dans',
  description: 'Dance app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
          <DrawerMenu />
        </AuthProvider>
      </body>
    </html>
  )
}