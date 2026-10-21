import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="site-footer page-shell">
      <p>{profile.name} <span aria-hidden="true">·</span> {profile.location}</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
