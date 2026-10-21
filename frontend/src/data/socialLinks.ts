import { profile } from './profile';

export interface SocialLink {
  label: string;
  value: string | null;
  placeholder: string;
  download?: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'Email', value: profile.contactEmail, placeholder: 'Email address to be added' },
  { label: 'LinkedIn', value: profile.linkedinUrl, placeholder: 'LinkedIn profile URL to be added' },
  { label: 'GitHub', value: profile.githubUrl, placeholder: 'GitHub profile URL to be added' },
  {
    label: 'Download CV (PDF)',
    value: profile.cvUrl,
    placeholder: 'CV PDF to be added',
    download: 'thando-majola-cv.pdf',
  },
];
