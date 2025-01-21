import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

type Props = {
  children: ReactNode;
  locale: string;
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
