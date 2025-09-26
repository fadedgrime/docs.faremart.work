import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import Footer from '@/components/footer';
import RotatingQuotes from '@/components/rotating-quotes';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout {...baseOptions()}>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #071032 100%)', color: 'white' }}
      >
      {/* Hero */}
  <header style={{ background: 'transparent', color: 'white' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '7rem 1rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', margin: 0 }}>
            Creating a realistic shopping experience.
          </h1>
          <p style={{ marginTop: 12, color: '#cbd5e1', fontSize: '1.125rem' }}>
            Faremart is known for offering quality products at low prices, backed by excellent customer service and a wide variety of choices.
          </p>

          {/* Optional CTA area (kept minimal) */}
          <div style={{ marginTop: 20, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a
              href="/docs"
              style={{
                background: 'white',
                color: '#0f172a',
                padding: '0.6rem 1rem',
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              View our documentation
            </a>

          </div>

          {/* Accordion at the bottom of the hero */}
          <div style={{ marginTop: 36, textAlign: 'left' }}>
            <Accordions type="single">
              <Accordion title="What is Faremart?">Faremart is a realistic retail experience that offers everyday essentials at affordable prices. We are committed to prioritizing our community, meeting their needs, and supporting a healthy, fulfilling lifestyle. Our dedicated team members are the driving force behind our ability to deliver exceptional service to everyone we serve.</Accordion>
              <Accordion title="Who owns Faremart?">Faremart is currently owned by drevmourn and managed by our Leadership and Senior Management team. It is a proud subsidiary of Harvesta, overseen by the Harvesta Department of Subsidiaries.</Accordion>
            </Accordions>
          </div>
        </div>
      </header>

        <main className="flex-1 flex items-center justify-center">
          <RotatingQuotes interval={10000} />
          {children}
        </main>
        <Footer />
      </div>
    </HomeLayout>
  );
}
