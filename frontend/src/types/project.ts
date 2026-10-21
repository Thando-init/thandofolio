export type TechnologyStatus = 'used' | 'to-confirm' | 'planned';

export interface ProjectTechnology {
  name: string;
  status: TechnologyStatus;
}

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

/** Describes one portfolio project and the facts shown in its case study. */
export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  technologies: ProjectTechnology[];
  caseStudy: CaseStudySection[];
  workflowSteps?: string[];
  screenshots?: ProjectScreenshot[];
  achievement?: string;
  imagePath?: string;
  repositoryUrl?: string;
  demoUrl?: string;
}
