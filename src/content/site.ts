// Todo o texto do site fica aqui. Edite este arquivo para atualizar o conteúdo.

export const site = {
	name: "Kauan Allyson",
	shortName: "Kauan",
	url: "https://kauanallyson.com.br",
	eyebrow: "Desenvolvedor Web",
	tagline:
		"Desenvolvedor de sites e aplicações web com Next.js. Estudante de Ciência da Computação na UEVA, em Sobral-CE.",
	description:
		"Kauan Allyson, desenvolvedor web em Sobral-CE. Sites com Next.js e TypeScript, sistemas com Java e Spring Boot.",
	location: "Sobral-CE",
	availability: "Disponível para projetos",
	tags: ["Sobral-CE", "UEVA"],
	highlights: [
		{ icon: "graduation", text: "Ciência da Computação na UEVA" },
		{ icon: "globe", text: "Sites e sistemas web" },
		{ icon: "coffee", text: "Java + Spring Boot no back-end" },
		{ icon: "zap", text: "Next.js + TypeScript no front-end" },
	],
	// Logos: devicon (MIT) em public/logos. As marcas pertencem aos seus donos.
	stack: [
		{ name: "Java", logo: "/logos/java.svg", detail: "Linguagem do back-end" },
		{
			name: "Spring Boot",
			logo: "/logos/spring.svg",
			detail: "APIs e sistemas",
		},
		{ name: "Next.js", logo: "/logos/nextjs.svg", detail: "Sites e front-end" },
		{
			name: "TypeScript",
			logo: "/logos/typescript.svg",
			detail: "Front-end e back-end",
		},
	],
} as const;

export const contact = {
	email: "kauanallysonrp@gmail.com",
	linkedin: "https://www.linkedin.com/in/kauan-allyson-rp/",
	github: "https://github.com/kauanallyson",
	githubUser: "kauanallyson",
	// Só usado para montar o link do WhatsApp; o número não aparece no site.
	whatsappNumber: "5588993831736",
	whatsappMessage:
		"Olá, Kauan! Vi seu portfólio e gostaria de conversar sobre um projeto.",
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export const nav = [
	{ href: "/", label: "Início" },
	{ href: "/sobre", label: "Sobre" },
	{ href: "/projetos", label: "Projetos" },
	{ href: "/contato", label: "Contato" },
] as const;

export type Project = {
	slug: string;
	name: string;
	category: string;
	summary: string;
	description: string;
	features: string[];
	tech: string[];
	url: string;
	image: string;
};

export const projects: Project[] = [
	{
		slug: "eleve",
		name: "Eleve Locações",
		category: "Catálogo online",
		summary:
			"Site e catálogo de uma locadora de escoras, andaimes e betoneiras em Sobral-CE.",
		description:
			"Site institucional com catálogo de equipamentos para uma locadora que atende Sobral, Tianguá, Preá, Camocim e região. Cada equipamento tem sua própria página, e os pedidos de orçamento vão direto para o WhatsApp.",
		features: [
			"Catálogo com página para cada produto",
			"Orçamento pelo WhatsApp com mensagem pronta",
			"Aviso de cookies",
		],
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		url: "https://elevelocacoes.com.br",
		image: "/projects/eleve.png",
	},
	{
		slug: "fiel",
		name: "Fiel Imóveis e Investimentos",
		category: "Site institucional",
		summary:
			"Site de uma consultoria imobiliária com venda de imóveis, consultoria BNB e avaliações.",
		description:
			"Site institucional para uma consultoria com mais de 20 anos no mercado de imóveis comerciais e corporativos. Apresenta os serviços de venda de imóveis, consultoria de crédito BNB e avaliação de imóveis, cada um com sua página.",
		features: [
			"Uma página para cada serviço",
			"Link para o portal de imóveis da empresa",
			"Botão de contato pelo WhatsApp",
		],
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		url: "https://www.fielnegocios.com.br",
		image: "/projects/fiel.png",
	},
	{
		slug: "tiago-victor",
		name: "Tiago Victor, Engenheiro Civil",
		category: "Site pessoal",
		summary:
			"Site pessoal de um engenheiro civil em Sobral-CE, com páginas para construtora e mentoria.",
		description:
			"Site profissional de um engenheiro civil e professor, com páginas para os serviços da construtora (obra, reforma e construção financiada) e para o programa de mentoria em investimento na construção.",
		features: [
			"Páginas de Construtora e Mentoria",
			"Contato pelo WhatsApp",
			"Foto e apresentação do engenheiro na página inicial",
		],
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		url: "https://eng.tiagovictor.com.br",
		image: "/projects/tiago.png",
	},
];

export const services = [
	{
		title: "Sistemas web",
		description:
			"Sistemas internos para empresas, com back-end em Java e Spring Boot e front-end em Next.js.",
		icon: "server",
	},
	{
		title: "Sites institucionais",
		description:
			"Site para apresentar a empresa, os serviços e as formas de contato.",
		icon: "building",
	},
	{
		title: "Catálogos online",
		description:
			"Catálogo de produtos com uma página para cada item e pedido pelo WhatsApp.",
		icon: "catalog",
	},
	{
		title: "Landing pages",
		description: "Página única para divulgar um produto, serviço ou campanha.",
		icon: "rocket",
	},
] as const;

export const about = {
	title: "Sobre Kauan Allyson",
	subtitle: "Desenvolvedor web e estudante de Ciência da Computação",
	bio: [
		"Sou o Kauan, desenvolvedor web de Sobral-CE e estudante de Ciência da Computação na UEVA (Universidade Estadual Vale do Acaraú).",
		"Faço sites e sistemas web para empresas e profissionais. No back-end uso Java e Spring Boot, e no front-end, Next.js e TypeScript.",
	],
	facts: [
		{ label: "Formação", value: "Ciência da Computação", detail: "UEVA" },
		{ label: "Localização", value: "Sobral-CE", detail: "Ceará, Brasil" },
		{
			label: "Foco",
			value: "Sites e sistemas web",
			detail: "Para empresas e profissionais",
		},
		{
			label: "Stack",
			value: "Java + Spring Boot",
			detail: "Next.js + TypeScript",
		},
	],
} as const;
