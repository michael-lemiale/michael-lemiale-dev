"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState } from "react";
import { useWindowWidth } from "@wojtekmaj/react-hooks";
import { Document, Page as PDFPage, pdfjs } from "react-pdf";
import { ArrowIcon } from "../components/icons";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Page(fileName) {
  const [numPages, setNumPages] = useState(null);
  const width = useWindowWidth() ?? 800;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="w-fit">
      <a
        className="text-xl flex items-center transition-all hover:text-red-400 mb-16"
        rel="noopener noreferrer"
        download
        target="_blank"
        href="/michael-lemiale-resume-2025.pdf"
      >
        <ArrowIcon />
        <p className="ml-2 h-7">Download CV</p>
      </a>
      <div className="border-1 border-solid border-red-600 w-fit">
        <Document
          file="/michael-lemiale-resume-2025.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
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
