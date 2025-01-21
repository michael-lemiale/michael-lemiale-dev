import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
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
        Work Experience - Elaborated
      </h1>
      <hr />
      <WorkElaborated />
    </section>
  );
}
