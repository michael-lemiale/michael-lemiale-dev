"use client";

import { useState } from "react";
import { Document, Page as PDFPage, pdfjs } from "react-pdf";
import { useWindowWidth } from "@wojtekmaj/react-hooks";
import { ArrowIcon } from "./Icons";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type Props = {
  locale: string;
  downloadStringLocalalized: string;
};

export default function PDFDisplay({
  locale,
  downloadStringLocalalized,
}: Props) {
  const [numPages, setNumPages] = useState(null);
  const width = useWindowWidth() ?? 800;
  const localePDF = "/" + locale + "-cv-michael-lemiale-2025.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  console.log("\n\n" + locale["locale"]);
  return (
    <section className="w-fit">
      <a
        className="text-xl flex items-center transition-all hover:text-red-400 mb-16"
        rel="noopener noreferrer"
        download
        target="_blank"
        href={localePDF}
      >
        <ArrowIcon />
        <p className="ml-2 h-7">{downloadStringLocalalized}</p>
      </a>
      <div className="border-1 border-solid border-red-600 w-fit">
        <Document file={localePDF} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <PDFPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={Math.min(width * 0.9, 800)} // width: 90vw; max-width: 800px
            />
          ))}
        </Document>
      </div>
    </section>
  );
}
