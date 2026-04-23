import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb } from 'pdf-lib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const locales = ['en', 'es', 'fr'];
const PORT = process.env.PORT || 4173;
const BASE_URL = `http://localhost:${PORT}`;

// Rosé Pine Dawn base color (#faf4ed)
const BG_COLOR = rgb(0xfa / 255, 0xf4 / 255, 0xed / 255);

async function addBackground(pdfBytes) {
	const srcDoc = await PDFDocument.load(pdfBytes);
	const outDoc = await PDFDocument.create();

	const pages = await outDoc.embedPages(srcDoc.getPages());

	for (const embeddedPage of pages) {
		const { width, height } = embeddedPage;
		const newPage = outDoc.addPage([width, height]);

		// Draw background first (behind content)
		newPage.drawRectangle({
			x: 0,
			y: 0,
			width,
			height,
			color: BG_COLOR
		});

		// Draw original page content on top
		newPage.drawPage(embeddedPage, { x: 0, y: 0 });
	}

	return outDoc.save();
}

async function generatePDFs() {
	console.log('🚀 Starting PDF generation...');

	const browser = await chromium.launch({ headless: true });

	try {
		for (const locale of locales) {
			console.log(`📄 Generating PDF for locale: ${locale}`);

			const context = await browser.newContext();
			const page = await context.newPage();

			const cvUrl = `${BASE_URL}/${locale}/cv`;
			console.log(`   Navigating to: ${cvUrl}`);

			await page.goto(cvUrl, {
				waitUntil: 'networkidle',
				timeout: 30000
			});

			await page.waitForLoadState('load');
			await page.waitForTimeout(1500);

			await page.emulateMedia({ media: 'print' });

			const pdfBytes = await page.pdf({
				format: 'Letter',
				printBackground: true,
				margin: {
					top: '1in',
					right: '1in',
					bottom: '0.75in',
					left: '1in'
				},
				preferCSSPageSize: false
			});

			// Add background color behind all content on every page
			const finalPdf = await addBackground(pdfBytes);

			const outputPath = `${__dirname}/../static/${locale}-cv-michael-lemiale-2025.pdf`;
			writeFileSync(outputPath, finalPdf);
			console.log(`   ✅ Saved: ${outputPath}`);

			await context.close();
		}
	} catch (error) {
		console.error('❌ Error generating PDFs:', error);
		process.exit(1);
	} finally {
		await browser.close();
	}

	console.log('✨ PDF generation complete!');
}

generatePDFs();
