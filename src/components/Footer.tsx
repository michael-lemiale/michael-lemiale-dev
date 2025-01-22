import { useTranslations } from "next-intl";
import { ArrowIcon, GithubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="text-xl flex items-center transition-all hover:text-red-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/michael-lemiale/"
          >
            <LinkedInIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="text-xl flex items-center transition-all hover:text-red-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/michael-lemiale"
          >
            <GithubIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="text-xl flex items-center transition-all hover:text-red-400"
            rel="noopener noreferrer"
            download
            target="_blank"
            href="/michael-lemiale-resume-2025.pdf"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{t("value")}</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
