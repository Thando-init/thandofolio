import { SectionHeading } from '../components/SectionHeading';
import { technicalFocus } from '../data/technicalFocus';

/** Separates verified project stacks from the areas Thando is still developing. */
export function TechnicalFocusSection() {
  return (
    <section className="section technical-section page-shell" id="technical-focus" aria-labelledby="technical-title">
      <SectionHeading
        index="03"
        eyebrow="Tools I work with"
        title="Tech, with context."
        titleId="technical-title"
        introduction="Stacks I have used in projects—and the skills I am continuing to build."
      />
      <div className="focus-list">
        {technicalFocus.map((group, index) => (
          <article className="focus-row" key={group.label}>
            <span className="focus-row__index">0{index + 1}</span>
            <div className="focus-row__heading">
              <h3>{group.label}</h3>
              <p>{group.description}</p>
            </div>
            <ul className="focus-row__items">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
