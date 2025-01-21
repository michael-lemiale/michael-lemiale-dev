import Link from "next/link";
import Head from "next/head";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { RedTriangleIcon } from "./Icons";

export function Navbar() {
  const t = useTranslations("NavBar");
  const navItems: Array<"home" | "portfolio" | "cv"> = [
    "home",
    "portfolio",
    "cv",
  ];

  return (
    <aside className="-ml-[12px] mb-12 tracking-tight">
      <div>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
      </div>
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div id="nav-row-1" className="flex flex-row items-center">
            <RedTriangleIcon />
            <div className="flex flex-col items-start">
              <h1 className="mb-0 text-2xl font-bold tracking-normal">
                Michael Lemiale
              </h1>
              <h1 className="mb-0 text-lg tracking-tight">Data Engineer</h1>
            </div>
          </div>
          <div id="nav-row-2" className="flex flex-row">
            {navItems.map((key) => {
              return (
                <Link
                  key={key}
                  href={t(`${key}.url`)}
                  className="text-2xl font-black transition-all hover:text-red-400 flex align-middle relative mt-6 px-3 mr-2"
                >
                  {t(`${key}.title`)}
                </Link>
              );
            })}
          </div>
          <LocaleSwitcher />
        </nav>
      </div>
    </aside>
  );
}
