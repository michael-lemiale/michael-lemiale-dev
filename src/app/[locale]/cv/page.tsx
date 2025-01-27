import { getTranslations } from "next-intl/server";
import PDFDisplay from "@/components/PDFDisplay";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CVPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("CV");
  const downloadStringLocalalized = t("value");

  return (
    <PDFDisplay
      locale={locale}
      downloadStringLocalalized={downloadStringLocalalized}
    />
  );
}
