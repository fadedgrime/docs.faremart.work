import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Banner } from 'fumadocs-ui/components/banner';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Banner id="welcome">We are in the process of setting up our documentation center, so some documents may not be available yet. Thank you for your patience as we get everything ready.</Banner>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
