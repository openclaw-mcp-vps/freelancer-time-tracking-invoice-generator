import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeTrack Pro — Time Tracking & Auto Invoice Generator",
  description: "Track time across projects with screenshot verification and automatically generate branded invoices for your clients."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7cb78313-3a0b-460a-a9d5-da55eff765f2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
