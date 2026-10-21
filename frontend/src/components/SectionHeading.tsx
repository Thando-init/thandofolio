interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  titleId?: string;
  introduction?: string;
}

/** Keeps section labels and heading hierarchy consistent across the page. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  titleId,
  introduction,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__label">
        <span className="section-heading__index">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__content">
        <h2 id={titleId}>{title}</h2>
        {introduction ? <p>{introduction}</p> : null}
      </div>
    </div>
  );
}
