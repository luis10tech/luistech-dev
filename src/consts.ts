import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Luis Tech Dev",
  DESCRIPTION:
    "Bienvenido a mi website, acá podrás ver mi portafolio y blog todo relacionado al mundo IT.",
  AUTHOR: "LuisTech Dev.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Escribo sobre temas que me apasionan.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos recientes en los que he trabajado",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Busca posts y proyectos con palabras claves.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "luis10tech@gmail.com",
    HREF: "mailto:luis@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "luis10tech",
    HREF: "https://github.com/luis10tech",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "luiscolm",
    HREF: "https://www.linkedin.com/in/luis10tech/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "luisdev00",
    HREF: "https://twitter.com/luis10tech",
  },
];
