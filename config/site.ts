export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Sobre Nosotros",
      href: "/nosotros",
    },
    {
      label: "Que Ofrecemos",
      href: "/pricing",
    },
    {
      label: "Contactanos",
      href: "/blog",
    },

	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Sobre Nosotros",
      href: "/nosotros",
    },
    {
      label: "Que Ofrecemos",
      href: "/pricing",
    },
    {
      label: "Contactanos",
      href: "/blog",
    },	
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
