import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Bouquet Flowers VE | Fresh Floral Designs & Delivery',
  description: 'Discover exquisite, handcrafted floral arrangements and reliable flower delivery for every occasion. Experience beauty with Bouquet Flowers VE.',
  keywords: ["flower shop, floral design, flower delivery, bouquets, custom flowers, event decor, fresh flowers, Caracas, Venezuela"],
  openGraph: {
    "title": "Bouquet Flowers VE | Fresh Floral Designs & Delivery",
    "description": "Discover exquisite, handcrafted floral arrangements and reliable flower delivery for every occasion. Experience beauty with Bouquet Flowers VE.",
    "url": "https://www.bouquetflowersve.com",
    "siteName": "Bouquet Flowers VE",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/selective-focus-flower-bouquet-green-weathered-wooden-background_23-2147940451.jpg",
        "alt": "Luxurious flower bouquet"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Bouquet Flowers VE | Fresh Floral Designs & Delivery",
    "description": "Discover exquisite, handcrafted floral arrangements and reliable flower delivery for every occasion. Experience beauty with Bouquet Flowers VE.",
    "images": [
      "http://img.b2bpic.net/free-photo/selective-focus-flower-bouquet-green-weathered-wooden-background_23-2147940451.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
