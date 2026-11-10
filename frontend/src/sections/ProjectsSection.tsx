import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

/** Lists the three selected projects and links each summary to its case-study details. */
export function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Small problems. Useful systems."
          titleId="projects-title"
          introduction="Connected workflow prototypes, an evolving creator-data project, and a hackathon MVP."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={`0${index + 1}`} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
