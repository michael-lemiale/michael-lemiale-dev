import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { WorkElaborated } from "@/components/WorkElaborated";

type Props = {
  params: { locale: string };
};

export default function PortfolioPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PortfolioPage");
  return (
    <section>
      <h1 className="font-bold title text-4xl mb-1 tracking-tighter">
        {t("projects.value")}
      </h1>
      <hr />
      <Projects locale={locale} />

      <h1 className="font-bold title text-4xl mb-1 mt-12 tracking-tighter">
        {t("workExperience.value")}
      </h1>
      <hr />
      <WorkElaborated locale={locale} />

      <h1 className="font-bold title text-4xl mb-1 mt-12 tracking-tighter">
        {t("education.value")}
      </h1>
      <hr />
      <Education locale={locale} />
    </section>
  );
}
