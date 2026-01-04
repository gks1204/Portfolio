
"use client"

import Image from 'next/image';
import ThemeToggle from './components/ThemeToggle';
import AnimatedHero from './components/AnimatedHero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export default function Home() {
  return (
    <main className="container">
      <header className="root-header">
        <div>
          <h1>Nishima Oberoi</h1>
          <h2>UX / UI Designer</h2>
        </div>
        <div className="top-row">
          <nav aria-label="primary actions">
            <a href="mailto:nishi.oberoi24@gmail.com" className="btn">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <AnimatedHero />

      <section>
        <h3>About Me</h3>
        <p>
          I specialize in delivering intuitive user experiences and compelling
          visual identities. My work blends creativity, strategy, and technical
          expertise rooted in research-driven design.
        </p>
      </section>

      <Skills />

      <Experience />

      <Projects />

      <ContactInfo />

      <section>
        <h3>Contact</h3>
        <ContactForm />
      </section>

      <footer>
        <p>© 2026 Nishima Oberoi</p>
      </footer>
    </main>
  );
}
