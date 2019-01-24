// Simple file to edit all routes
// Pages
import home from '../views/pages/home.js';
import about from '../views/pages/about.js';
import projects from '../views/pages/projects.js';
import error from '../views/pages/error.js';

const routes = {
  '/': home,
  '/index.html': home,
  '/about': about,
  '/projects': projects,
  '/error': error,
};

export default routes;
