import { useTranslations } from "next-intl";
import PDFDisplay from "@/components/PDFDisplay";

type Props = {
  params: { locale: string };
};

export default function CVPage(locale: Props) {
  const t = useTranslations("CV");
  const downloadStringLocalalized = t("value");

  return (
    <PDFDisplay
      locale={locale.params.locale}
      downloadStringLocalalized={downloadStringLocalalized}
    />
  );
}
