import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: `${site.name} | ${site.eyebrow}`,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: site.url,
		siteName: site.name,
		title: `${site.name} | ${site.eyebrow}`,
		description: site.description,
		images: [{ url: "/kauan.webp", width: 1080, height: 1080, alt: site.name }],
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="pt-BR"
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
		>
			<body className="flex min-h-screen flex-col">
				<SiteHeader />
				<main className="flex-1">{children}</main>
				<SiteFooter />
			</body>
		</html>
	);
}
