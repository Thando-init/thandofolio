import { SectionHeading } from '../components/SectionHeading';
import { technicalFocus } from '../data/technicalFocus';

/** Separates confirmed project tools from current learning and longer-term interests. */
export function TechnicalFocusSection() {
  return (
    <section className="section technical-section page-shell" id="technical-focus" aria-labelledby="technical-title">
      <SectionHeading
        index="03"
        eyebrow="Technical focus"
        title="Learning how the pieces fit."
        titleId="technical-title"
        introduction="I’m building capability through projects and keeping the difference between hands-on use and areas I’m exploring clear."
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
