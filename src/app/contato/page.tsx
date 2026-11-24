import { ArrowUpRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import { CopyEmailButton } from "@/components/copy-email";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { Container } from "@/components/sections";
import { contact, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
	title: "Contato",
	description:
		"Fale com Kauan Allyson por WhatsApp, e-mail ou LinkedIn para orçar seu site ou sistema.",
};

const channels = [
	{
		label: "WhatsApp",
		detail: "Abre uma conversa com uma mensagem já escrita.",
		action: "Chamar no WhatsApp",
		href: whatsappUrl,
		Icon: WhatsappIcon,
	},
	{
		label: "LinkedIn",
		detail: "Meu perfil profissional.",
		action: "Ver perfil",
		href: contact.linkedin,
		Icon: LinkedinIcon,
	},
	{
		label: "GitHub",
		detail: `Meus repositórios em @${contact.githubUser}.`,
		action: "Ver GitHub",
		href: contact.github,
		Icon: GithubIcon,
	},
];

export default function ContactPage() {
	return (
		<section className="py-16 lg:py-24">
			<Container className="max-w-3xl">
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
					Vamos conversar?
				</h1>
				<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
					Me chame para falar sobre um site, catálogo ou sistema para sua
					empresa.
				</p>

				<h2 className="mt-12 mb-4 text-sm font-semibold tracking-wide">
					Informações de Contato
				</h2>

				<div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-card p-6">
					<div className="flex items-center gap-4">
						<span className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
							<Mail className="size-5" aria-hidden="true" />
						</span>
						<div>
							<p className="text-sm text-muted-foreground">E-mail</p>
							<a
								href={`mailto:${contact.email}`}
								className="font-semibold break-all hover:underline"
							>
								{contact.email}
							</a>
						</div>
					</div>
					<CopyEmailButton email={contact.email} />
				</div>

				<ul className="mt-4 grid gap-4 sm:grid-cols-3">
					{channels.map(({ label, detail, action, href, Icon }) => (
						<li key={label}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
							>
								<Icon className="size-5" />
								<p className="mt-4 font-semibold">{label}</p>
								<p className="mt-1 text-sm text-muted-foreground">{detail}</p>
								<span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium group-hover:underline">
									{action}
									<ArrowUpRight className="size-4" aria-hidden="true" />
								</span>
							</a>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
