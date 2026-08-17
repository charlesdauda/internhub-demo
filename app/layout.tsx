import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "InternshipHub",
  description:
    "InternshipHub connects students with real-world opportunities and helps companies hire skilled talent with expert HR support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this is the root layout, so it applies to every route, not a single page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-white text-ink">
        <Sidebar />
        <div className="flex min-h-screen flex-col lg:pl-72">
          <Navbar />
          <main className="flex-1 px-6 py-2 lg:px-4">
            {children}
            </main>
        </div>
      </body>
    </html>
  );
}