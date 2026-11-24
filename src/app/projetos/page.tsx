import type { Metadata } from "next";
import { ContactCta, Container, ProjectCard } from "@/components/sections";
import { projects } from "@/content/site";

export const metadata: Metadata = {
	title: "Projetos",
	description:
		"Sites e sistemas desenvolvidos por Kauan Allyson para empresas e profissionais.",
};

export default function ProjectsPage() {
	return (
		<>
			<section className="py-16 lg:py-24">
				<Container>
					<div className="mb-12 max-w-2xl">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Projetos
						</h1>
						<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
							Sites que fiz para clientes. Todos estão no ar.
						</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((p) => (
							<ProjectCard key={p.slug} project={p} detailed />
						))}
					</div>
				</Container>
			</section>
			<ContactCta />
		</>
	);
}
