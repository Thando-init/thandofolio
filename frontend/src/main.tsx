import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './styles/variables.css';
import './styles/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('The page is missing its React root element.');
}

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
