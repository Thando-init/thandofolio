import { SectionHeading } from '../components/SectionHeading';
import { profile } from '../data/profile';

/** Connects Thando's business background to the practical systems he is learning to build. */
export function AboutSection() {
  return (
    <section className="section about-section page-shell" id="about" aria-labelledby="about-title">
      <SectionHeading
        index="01"
        eyebrow="A little context"
        title="Business first. Systems next."
        titleId="about-title"
        introduction="A non-linear route into technology, shaped by the way real organisations work."
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
