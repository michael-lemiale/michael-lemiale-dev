import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const locale = await params;
  // Enable static rendering
  setRequestLocale(locale.locale);

  const t = await getTranslations("HomePage");
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
      <Image
        src="/michael-lemiale-headshot.jpeg"
        alt="Michael Lemiale"
        className="justify-self-start"
        width={400}
        height={600}
      />
    </section>
  );
}
