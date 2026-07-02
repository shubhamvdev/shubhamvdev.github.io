import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Vishwakarma | Frontend / Full Stack Developer",
  description:
    "Modern portfolio of Shubham Vishwakarma, a Frontend and Full Stack Developer based in Bangalore, India.",
  openGraph: {
    title: "Shubham Vishwakarma | Portfolio",
    description:
      "React.js, Next.js, TypeScript, SaaS dashboards, real-time applications, and API integrations.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
