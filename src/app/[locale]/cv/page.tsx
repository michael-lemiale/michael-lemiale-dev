import { useTranslations } from "next-intl";
import PDFDisplay from "@/components/PDFDisplay";

export default function FAQEntry() {
  const t = useTranslations("CV");

  return <PDFDisplay />;
}
