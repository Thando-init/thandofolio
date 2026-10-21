import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { TechnicalFocusSection } from './sections/TechnicalFocusSection';

/** Composes the one-page public portfolio from its reusable page sections. */
export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <TechnicalFocusSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
