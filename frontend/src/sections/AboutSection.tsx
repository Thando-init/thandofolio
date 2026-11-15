import { SectionHeading } from '../components/SectionHeading';
import { profile } from '../data/profile';

/** Connects Thando's business background to the systems and workflows she builds. */
export function AboutSection() {
  return (
    <section className="section about-section page-shell" id="about" aria-labelledby="about-title">
      <SectionHeading
        index="01"
        eyebrow="About me"
        title="Business thinking. Systems building."
        titleId="about-title"
        introduction="A business background, applied to software and systems integration."
      />
      <p className="about-section__positioning">{profile.positioning}</p>
      <div className="about-section__body">
        {profile.about.map((paragraph, index) => (
          <p className={index === profile.about.length - 1 ? 'about-section__closing' : ''} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
