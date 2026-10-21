import { profile } from '../data/profile';

/** Introduces Thando, the portfolio focus, his supplied portrait and the SafeRide achievement. */
export function Hero() {
  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span className="eyebrow__dot" />{profile.eyebrow}</p>
        <h1 id="hero-title">{profile.headline}</h1>
        <p className="hero__intro">{profile.introduction}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            Explore My Projects <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--text" href="#contact">
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </div>
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
          <span>Emerging Tech Professional</span>
        </figcaption>
        <span className="portrait-note" aria-hidden="true">01 / HUMAN SYSTEMS</span>
      </figure>
    </section>
  );
}
