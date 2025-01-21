import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  const keys = ["hi", "dataNerd", "passion", "music"] as const;
  return (
    <section>
      {keys.map((key) => (
        <h1 key={t(`${key}.title`)} className="mb-4 text-xl font-normal">
          {key == "music"
            ? t.rich(`${key}.value`, {
                musicLink: (chunks) => (
                  <a
                    className="text-blue-600 hover:text-red-400"
                    target="_blank"
                    href="https://notfromparismusic.com/"
                  >
                    {chunks}
                  </a>
                ),
              })
            : t(`${key}.value`)}
        </h1>
      ))}
    </section>
  );
}
