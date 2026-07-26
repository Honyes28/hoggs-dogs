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
    title: "Hoggs Dogs | Elizabeth City Hot Dog Food Truck",
    description:
      "Classic hot dogs, chilli, Italian hots and more from the family-run Hoggs Dogs food truck serving Elizabeth City, North Carolina.",
    icons: {
      icon: "/assets/hoggs-dogs-logo.png",
      shortcut: "/assets/hoggs-dogs-logo.png",
    },
    openGraph: {
      title: "Hoggs Dogs | Good Dogs. Great Times.",
      description:
        "Classic hot dogs and big flavor from our family-run food truck serving Elizabeth City, North Carolina.",
      type: "website",
      images: [
        {
          url: new URL("/og-v2.jpg", origin).toString(),
          width: 1200,
          height: 630,
          alt: "Hoggs Dogs food truck",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [new URL("/og-v2.jpg", origin).toString()],
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
