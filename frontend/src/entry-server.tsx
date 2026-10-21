import { renderToString } from 'react-dom/server';
import { App } from './App';

/** Renders the public portfolio to static HTML during the Vite production build. */
export function render(): string {
  return renderToString(<App />);
}
