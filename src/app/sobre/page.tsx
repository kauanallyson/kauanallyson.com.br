import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta, Container } from "@/components/sections";
import { about, site } from "@/content/site";

export const metadata: Metadata = {
	title: "Sobre",
	description: about.bio[0],
};

export default function AboutPage() {
	return (
		<>
			<section className="py-16 lg:py-24">
				<Container className="grid gap-12 lg:grid-cols-[1fr_380px]">
					<div>
						<p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
							{site.eyebrow}
						</p>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							{about.title}
						</h1>
						<p className="mt-4 text-lg text-muted-foreground">
							{about.subtitle}
						</p>
						<div className="mt-8 space-y-4 text-base leading-relaxed">
							{about.bio.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>

					<aside className="space-y-4">
						<div className="flex items-center gap-4 rounded-xl border bg-card p-4">
							<Image
								src="/kauan.webp"
								alt={`Foto de ${site.name}`}
								width={64}
								height={64}
								className="size-16 rounded-full border bg-muted object-cover"
							/>
							<div>
								<p className="font-semibold">{site.name}</p>
								<p className="text-sm text-muted-foreground">{site.eyebrow}</p>
							</div>
						</div>
						<dl className="grid gap-3">
							{about.facts.map((f) => (
								<div key={f.label} className="rounded-xl border bg-card p-4">
									<dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
										{f.label}
									</dt>
									<dd className="mt-1 font-semibold">{f.value}</dd>
									<dd className="text-sm text-muted-foreground">{f.detail}</dd>
								</div>
							))}
						</dl>
					</aside>
				</Container>
			</section>
			<ContactCta />
		</>
	);
}
