import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    title: "Hoggs Dogs | Norfolk-Style Hot Dogs",
    description:
      "Classic hot dogs, chilli, Italian hots, and more from Norfolk's family-run Hoggs Dogs food truck.",
    icons: {
      icon: "/assets/hoggs-dogs-logo.png",
      shortcut: "/assets/hoggs-dogs-logo.png",
    },
    openGraph: {
      title: "Hoggs Dogs | Good Dogs. Great Times.",
      description:
        "Classic hot dogs, hearty chilli, and big Norfolk flavor—served fresh from our family-run food truck.",
      type: "website",
      images: [
        {
          url: new URL("/og.png", origin).toString(),
          width: 1200,
          height: 630,
          alt: "Hoggs Dogs food truck",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [new URL("/og.png", origin).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
