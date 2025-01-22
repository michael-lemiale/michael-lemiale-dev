import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {t("title")}
      </h1>
      <p className="mb-4">{t("message")}</p>
    </section>
  );
}
