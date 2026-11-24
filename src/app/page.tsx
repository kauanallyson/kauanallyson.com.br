import {
	ArrowRight,
	Building2,
	Coffee,
	FolderGit2,
	Globe,
	GraduationCap,
	LayoutGrid,
	MapPin,
	Rocket,
	Server,
	Sparkles,
	Wrench,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	ContactCta,
	Container,
	ProjectCard,
	SectionHeading,
	WhatsappButton,
} from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, services, site } from "@/content/site";

const highlightIcons = {
	graduation: GraduationCap,
	globe: Globe,
	coffee: Coffee,
	zap: Zap,
} as const;
const serviceIcons = {
	server: Server,
	building: Building2,
	catalog: LayoutGrid,
	rocket: Rocket,
} as const;

export default function HomePage() {
	return (
		<>
			{/* Hero */}
			<section className="py-16 lg:py-24">
				<Container className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<div className="mb-6 flex flex-wrap gap-2">
							<Badge variant="outline">
								<MapPin aria-hidden="true" />
								{site.tags[0]}
							</Badge>
							<Badge variant="outline">
								<Sparkles aria-hidden="true" />
								{site.tags[1]}
							</Badge>
						</div>
						<p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
							{site.eyebrow}
						</p>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
							{site.name}
						</h1>
						<p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
							{site.tagline}
						</p>
						<ul className="mt-6 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
							{site.highlights.map((h) => {
								const Icon = highlightIcons[h.icon];
								return (
									<li key={h.text} className="flex items-center gap-2">
										<Icon
											className="size-4 shrink-0 text-muted-foreground"
											aria-hidden="true"
										/>
										{h.text}
									</li>
								);
							})}
						</ul>
						<div className="mt-8 flex flex-wrap gap-3">
							<Button asChild size="lg" className="h-10 px-5">
								<Link href="/projetos">
									<FolderGit2 className="size-4" />
									Ver Projetos
									<ArrowRight className="size-4" />
								</Link>
							</Button>
							<WhatsappButton variant="outline" />
						</div>
					</div>

					<div className="mx-auto w-full max-w-md space-y-4">
						<div className="relative">
							<div className="overflow-hidden rounded-2xl border bg-muted shadow-sm">
								<Image
									src="/kauan.webp"
									alt={`Foto de ${site.name}`}
									width={1080}
									height={1080}
									priority
									sizes="(min-width: 1024px) 448px, 90vw"
									className="aspect-square w-full object-cover"
								/>
							</div>
							<div className="absolute -right-3 -bottom-4 flex items-center gap-2 rounded-xl border bg-background px-4 py-3 text-xs font-medium shadow-md sm:-right-6">
								<span className="relative flex size-2">
									<span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
									<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
								</span>
								{site.availability}
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 pt-4">
							{site.stack.map((s) => (
								<div
									key={s.name}
									className="flex items-center gap-3 rounded-xl border bg-card p-4"
								>
									<span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
										<Image
											src={s.logo}
											alt=""
											width={20}
											height={20}
											unoptimized
											className="size-5"
										/>
									</span>
									<div>
										<p className="text-sm font-semibold">{s.name}</p>
										<p className="text-xs text-muted-foreground">{s.detail}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* Projetos */}
			<section className="py-20">
				<Container>
					<SectionHeading
						pill="Projetos em Destaque"
						pillIcon={<FolderGit2 aria-hidden="true" />}
						title="Projetos recentes"
						description="Sites que fiz para empresas e profissionais de Sobral e região."
					/>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((p) => (
							<ProjectCard key={p.slug} project={p} />
						))}
					</div>
					<div className="mt-10 flex justify-center">
						<Button asChild variant="outline">
							<Link href="/projetos">
								Ver todos os projetos
								<ArrowRight className="size-4" />
							</Link>
						</Button>
					</div>
				</Container>
			</section>

			{/* Serviços */}
			<section className="bg-muted/50 py-20">
				<Container>
					<SectionHeading
						pill="Serviços"
						pillIcon={<Wrench aria-hidden="true" />}
						title="O que eu faço"
						description="Os tipos de projeto que eu faço."
					/>
					<div className="grid gap-6 sm:grid-cols-2">
						{services.map((s) => {
							const Icon = serviceIcons[s.icon];
							return (
								<div key={s.title} className="rounded-xl border bg-card p-6">
									<span className="mb-4 flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
										<Icon className="size-5" aria-hidden="true" />
									</span>
									<h3 className="text-lg font-semibold tracking-tight">
										{s.title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
										{s.description}
									</p>
								</div>
							);
						})}
					</div>
				</Container>
			</section>

			<ContactCta />
		</>
	);
}
