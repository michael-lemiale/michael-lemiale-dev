import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import BaseLayout from "@/components/BaseLayout";
import { host } from "@/config";
import { routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    metadataBase: new URL(host),
    title: {
      name: t("title"),
      default: "Michael Lemiale - Data Engineer",
      template: "%s | Michael Lemiale - Michael Lemiale - Data Engineer",
    },
    description: "Personal portfolio.",
    openGraph: {
      title: "Michael Lemiale - Data Engineer",
      description: "Personal portfolio.",
      url: host,
      siteName: "Michael Lemiale - Data Engineer",
      locale: locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
