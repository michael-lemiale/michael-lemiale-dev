import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "es"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/portfolio": {
      en: "/portfolio",
      fr: "/dossier",
      es: "/dossier",
    },
    "/cv": {
      en: "/cv",
      fr: "/cv",
      es: "/cv",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
