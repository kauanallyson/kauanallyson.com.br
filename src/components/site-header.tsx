"use client";

import { FolderGit2, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

const icons = {
	"/": Home,
	"/sobre": User,
	"/projetos": FolderGit2,
	"/contato": Mail,
} as const;

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 h-16 border-b border-dotted border-border/60 bg-background/80 backdrop-blur">
			<div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-8">
				<Link
					href="/"
					className="flex items-center gap-2 font-semibold tracking-tight"
				>
					<span className="flex size-7 items-center justify-center rounded-md bg-foreground text-xs font-bold text-background">
						KA
					</span>
					<span className="text-lg">{site.shortName}</span>
				</Link>

				<nav aria-label="Principal">
					<ul className="flex items-center gap-1 rounded-full border bg-background p-1 shadow-xs">
						{nav.map((item) => {
							const Icon = icons[item.href];
							const active =
								item.href === "/"
									? pathname === "/"
									: pathname.startsWith(item.href);
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										aria-current={active ? "page" : undefined}
										className={cn(
											"flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
											active && "border bg-muted/60 text-foreground",
										)}
									>
										<Icon className="size-3.5" aria-hidden="true" />
										<span className={cn(!active && "sr-only sm:not-sr-only")}>
											{item.label}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
}
