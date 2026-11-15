import { profile } from '../data/profile';

/** Introduces Thando, the systems-integration focus, one supplied portrait, and the verified SafeRide achievement. */
export function Hero() {
  return (
    <section className="hero hero--split" id="home" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span className="eyebrow__dot" />{profile.eyebrow}</p>
        <h1 id="hero-title">{profile.headline}</h1>
        <p className="hero__intro">{profile.introduction}</p>
        <p className="hero__meta">Backend APIs · Data · Workflow automation</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            Explore projects <span aria-hidden="true">→</span>
          </a>
          <a className="button button--text" href="#contact">
            Let’s connect <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className="hero__demo-link" href="#try-a-ticket">Curious how a workflow behaves? Try a sample ticket ↓</a>
        <a className="achievement" href="#project-saferide">
          <span className="achievement__index">05</span>
          <span>
            <strong>5th Place — Lovable Startup Week</strong>
            <small>SafeRide · a rapid MVP exploring travel safety</small>
          </span>
          <span className="achievement__arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <figure className="hero__portrait">
        <img src={profile.portraitPath} alt="Portrait of Thando Majola wearing a dark blazer and glasses." />
        <figcaption>
          <span>Thando Majola</span>
          <span>South Africa</span>
        </figcaption>
      </figure>
    </section>
  );
}
