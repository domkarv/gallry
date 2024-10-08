import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import { TopNav } from "~/components/top-nav";
import { cn } from "~/lib/utils";
import { Toaster } from "~/components/ui/sonner";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gallry App",
  description: "Place where you can group your photos.",
  keywords: [
    "gallery",
    "photos",
    "sharing",
    "images",
    "gallery app",
    "photos app",
    "sharing app",
    "images app",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen scroll-smooth font-poppins antialiased",
            font.variable,
          )}
        >
          <TopNav />
          <main className="container my-8">{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
