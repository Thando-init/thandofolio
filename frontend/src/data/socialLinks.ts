import { profile } from './profile';

export interface SocialLink {
  label: string;
  value: string | null;
  placeholder: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'Email', value: profile.contactEmail, placeholder: 'Email address to be added' },
  { label: 'LinkedIn', value: profile.linkedinUrl, placeholder: 'LinkedIn profile URL to be added' },
  { label: 'GitHub', value: profile.githubUrl, placeholder: 'GitHub profile URL to be added' },
  { label: 'CV', value: profile.cvUrl, placeholder: 'CV link to be added' },
];
