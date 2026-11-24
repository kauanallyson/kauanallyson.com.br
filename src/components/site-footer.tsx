import { MapPin } from "lucide-react";
import Link from "next/link";
import { contact, nav, projects, site, whatsappUrl } from "@/content/site";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";

const linkClass =
	"text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
	return (
		<footer className="border-t-2 border-dotted border-border/60 bg-background">
			<div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
					<div className="col-span-2 space-y-6 sm:col-span-3 lg:col-span-1">
						<Link
							href="/"
							className="flex items-center gap-2 font-semibold tracking-tight"
						>
							<span className="flex size-7 items-center justify-center rounded-md bg-foreground text-xs font-bold text-background">
								KA
							</span>
							<span className="text-lg">{site.shortName}</span>
						</Link>
						<p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
							{site.tagline}
						</p>
						<p className="flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin className="size-4 shrink-0" aria-hidden="true" />
							{site.location}
						</p>
						<div className="flex items-center gap-4">
							<a
								href={contact.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="p-1 text-muted-foreground transition-colors hover:text-foreground"
							>
								<GithubIcon className="size-4" />
							</a>
							<a
								href={contact.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="p-1 text-muted-foreground transition-colors hover:text-foreground"
							>
								<LinkedinIcon className="size-4" />
							</a>
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
								className="p-1 text-muted-foreground transition-colors hover:text-foreground"
							>
								<WhatsappIcon className="size-4" />
							</a>
						</div>
					</div>

					<div className="space-y-4">
						<h2 className="text-sm font-semibold tracking-wide">Navegação</h2>
						<ul className="space-y-3">
							{nav.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className={linkClass}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-4">
						<h2 className="text-sm font-semibold tracking-wide">Projetos</h2>
						<ul className="space-y-3">
							{projects.map((p) => (
								<li key={p.slug}>
									<a
										href={p.url}
										target="_blank"
										rel="noopener noreferrer"
										className={linkClass}
									>
										{p.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-4">
						<h2 className="text-sm font-semibold tracking-wide">Contato</h2>
						<ul className="space-y-3">
							<li>
								<a href={`mailto:${contact.email}`} className={linkClass}>
									E-mail
								</a>
							</li>
							<li>
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={linkClass}
								>
									WhatsApp
								</a>
							</li>
							<li>
								<a
									href={contact.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className={linkClass}
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href={contact.github}
									target="_blank"
									rel="noopener noreferrer"
									className={linkClass}
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 border-t pt-8 text-sm text-muted-foreground">
					© 2026 {site.name}. Todos os direitos reservados.
				</div>
			</div>
		</footer>
	);
}
