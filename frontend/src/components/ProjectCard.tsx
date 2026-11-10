import type { PortfolioProject } from '../types/project';
import { WorkflowDiagram } from './WorkflowDiagram';

interface ProjectCardProps {
  project: PortfolioProject;
  index: string;
}

const technologyLabels = {
  used: 'Used in prototype',
  'to-confirm': 'To confirm',
  planned: 'Exploratory',
} as const;

/** Presents one project summary and its accessible, expandable case study. */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasVerifiedLink = Boolean(project.repositoryUrl || project.demoUrl);

  return (
    <article className="project-card" id={`project-${project.id}`}>
      <div className="project-card__number" aria-hidden="true">{index}</div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="status-pill">{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>

        {project.achievement ? (
          <p className="project-card__achievement"><span aria-hidden="true">✳</span> {project.achievement}</p>
        ) : null}

        <ul className="technology-list" aria-label={`${project.title} technologies and verification status`}>
          {project.technologies.map((technology) => (
            <li key={technology.name} data-status={technology.status}>
              <span aria-hidden="true">{technology.status === 'used' ? '●' : '○'}</span>
              {technology.name}
              {technology.status !== 'used' ? <small>{technologyLabels[technology.status]}</small> : null}
            </li>
          ))}
        </ul>

        {hasVerifiedLink ? (
          <div className="project-links">
            {project.repositoryUrl ? (
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source repository on GitHub (opens in a new tab)`}>
                View on GitHub ↗
              </a>
            ) : null}
            {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo ↗</a> : null}
          </div>
        ) : null}

        <details className="case-study">
          <summary>Read case study <span aria-hidden="true">＋</span></summary>
          <div className="case-study__body">
            {project.achievement ? (
              <div className="case-study__achievement">
                <span className="eyebrow">Achievement</span>
                <strong>{project.achievement}</strong>
                <p>Built SafeRide, a rapid MVP exploring a practical approach to travel safety.</p>
              </div>
            ) : null}
            {project.caseStudy.map((section) => (
              <section className="case-study__section" key={section.heading}>
                <h4>{section.heading}</h4>
                <p>{section.body}</p>
              </section>
            ))}
            {project.workflowSteps ? <WorkflowDiagram steps={project.workflowSteps} label={`${project.title} workflow`} /> : null}
            {project.screenshots?.length ? (
              <section className="case-study__gallery" aria-labelledby={`gallery-${project.id}`}>
                <h4 id={`gallery-${project.id}`}>Demo screenshots</h4>
                <div className="case-study__gallery-grid">
                  {project.screenshots.map((screenshot) => (
                    <figure key={screenshot.src}>
                      <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                      <figcaption>{screenshot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </details>
      </div>
    </article>
  );
}
