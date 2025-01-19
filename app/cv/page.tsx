'use client'

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useState } from 'react';
import { Document, Page as PDFPage, pdfjs } from 'react-pdf';
import { ArrowIcon } from '../components/icons'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Page(fileName) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <section>
            <a
                className="text-xl flex items-center transition-all hover:text-red-400 mb-12"
                rel="noopener noreferrer"
                download
                target="_blank"
                href="/michael-lemiale-resume-2025.pdf"
            >
                <ArrowIcon />
                <p className="ml-2 h-7">Download CV</p>
            </a>
            <Document file="/michael-lemiale-resume-2025.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                    <PDFPage key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </section>
    )
}
