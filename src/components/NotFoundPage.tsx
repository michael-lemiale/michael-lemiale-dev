import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
    </section>
  );
  // return <p className="max-w-[460px]">{t("description")}</p>;
}
