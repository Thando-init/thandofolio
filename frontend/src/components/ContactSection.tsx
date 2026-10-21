import { SectionHeading } from './SectionHeading';
import { socialLinks } from '../data/socialLinks';

/** Shows real contact links only when their corresponding details are supplied. */
export function ContactSection() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title="Let’s make something useful."
          titleId="contact-title"
          introduction="Open to conversations about opportunities, collaborations and practical problems worth solving."
        />
        <div className="contact-panel">
          <ul className="contact-list">
            {socialLinks.map((link) => {
              const href = link.value
                ? link.label === 'Email' ? `mailto:${link.value}` : link.value
                : undefined;
              return (
                <li key={link.label}>
                  {href ? (
                    <a href={href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'}>
                      <span>{link.label}</span>
                      {link.label === 'Email' && link.value ? <small className="contact-list__value">{link.value}</small> : null}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="contact-list__placeholder">
                      <span>{link.label}</span><small>{link.placeholder}</small>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
