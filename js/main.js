import App from './lib/app.js';

// Pages
import home from './views/pages/home.js';
import about from './views/pages/about.js';
import projects from './views/pages/projects.js';
import error from './views/pages/error.js';

const app = new App();

app.addRoutes(
  ['/', home],
  ['/index.html', home],
  ['/about', about],
  ['/projects', projects],
  ['/error', error],
);
