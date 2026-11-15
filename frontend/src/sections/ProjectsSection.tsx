import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

/** Lists the verified projects and clearly separates a future idea from work already built. */
export function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Projects that connect the pieces."
          titleId="projects-title"
          introduction="Open a case study for the details, or try the fictional ticket demo in the support-triage project."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={`0${index + 1}`} key={project.id} />
          ))}
        </div>
        <aside className="roadmap-card" aria-labelledby="roadmap-title">
          <p className="eyebrow">Planned · not built</p>
          <div>
            <h3 id="roadmap-title">Omnichannel support, with context intact.</h3>
            <p>A future concept: shared conversation context across email, website chat, and WhatsApp, with human handover that preserves the history. This is a roadmap idea, not an implemented feature.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
