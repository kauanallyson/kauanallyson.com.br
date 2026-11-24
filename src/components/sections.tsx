import { ArrowRight, ArrowUpRight, CircleCheck, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project, whatsappUrl } from "@/content/site";
import { WhatsappIcon } from "./icons";

export function Container({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={`mx-auto max-w-6xl px-6 lg:px-8 ${className}`}>
			{children}
		</div>
	);
}

export function SectionHeading({
	pill,
	pillIcon,
	title,
	description,
}: {
	pill: string;
	pillIcon?: ReactNode;
	title: string;
	description?: string;
}) {
	return (
		<div className="mx-auto mb-12 max-w-2xl text-center">
			<Badge variant="outline" className="mb-4 bg-background">
				{pillIcon}
				{pill}
			</Badge>
			<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
			{description ? (
				<p className="mt-4 text-base leading-relaxed text-muted-foreground">
					{description}
				</p>
			) : null}
		</div>
	);
}

export function WhatsappButton({
	label = "Chamar no WhatsApp",
	variant = "default",
}: {
	label?: string;
	variant?: "default" | "outline";
}) {
	return (
		<Button asChild size="lg" variant={variant} className="h-10 px-5">
			<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
				<WhatsappIcon className="size-4" />
				{label}
			</a>
		</Button>
	);
}

export function ProjectCard({
	project,
	detailed = false,
}: {
	project: Project;
	detailed?: boolean;
}) {
	return (
		<article className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md">
			<div className="relative aspect-video overflow-hidden border-b bg-muted">
				<Image
					src={project.image}
					alt=""
					fill
					sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
					className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
				/>
			</div>
			<div className="flex flex-1 flex-col p-6">
				<Badge variant="secondary" className="mb-3">
					{project.category}
				</Badge>
				<h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
				<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
					{detailed ? project.description : project.summary}
				</p>
				{detailed ? (
					<ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
						{project.features.map((f) => (
							<li key={f} className="flex items-center gap-2">
								<CircleCheck className="size-4 shrink-0" aria-hidden="true" />
								{f}
							</li>
						))}
					</ul>
				) : null}
				<div className="mt-4 flex flex-wrap gap-1.5">
					{project.tech.map((t) => (
						<Badge key={t} variant="outline">
							{t}
						</Badge>
					))}
				</div>
				<div className="mt-auto pt-6">
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
					>
						Ver site
						<ArrowUpRight className="size-4" aria-hidden="true" />
						<span className="sr-only"> de {project.name}</span>
					</a>
				</div>
			</div>
		</article>
	);
}

export function ContactCta() {
	return (
		<section className="py-20">
			<Container>
				<div className="rounded-2xl border bg-gradient-to-b from-muted/50 to-muted/10 px-6 py-14 text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Vamos conversar?
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
						Precisa de um site ou de um sistema para sua empresa? Me mande uma
						mensagem.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<WhatsappButton />
						<Button asChild size="lg" variant="outline" className="h-10 px-5">
							<Link href="/contato">
								<Mail className="size-4" />
								Outras formas de contato
								<ArrowRight className="size-4" />
							</Link>
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
