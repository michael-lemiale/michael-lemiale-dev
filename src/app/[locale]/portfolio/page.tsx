import { getTranslations, setRequestLocale } from "next-intl/server";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { WorkElaborated } from "@/components/WorkElaborated";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PortfolioPage({ params }: Props) {
  const locale = await params;
  // Enable static rendering
  setRequestLocale(locale.locale);

  const t = await getTranslations("PortfolioPage");
  return (
    <section>
      <h1 className="font-bold title text-4xl mb-1 tracking-tighter">
        {t("projects.value")}
      </h1>
      <hr />
      <Projects locale={locale.locale} />

      <h1 className="font-bold title text-4xl mb-1 mt-12 tracking-tighter">
        {t("workExperience.value")}
      </h1>
      <hr />
      <WorkElaborated locale={locale.locale} />

      <h1 className="font-bold title text-4xl mb-1 mt-12 tracking-tighter">
        {t("education.value")}
      </h1>
      <hr />
      <Education locale={locale.locale} />
    </section>
  );
}
