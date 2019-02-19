import App from './lib/app.js';

// Pages
import home from './views/pages/home.js';
import about from './views/pages/about.js';
import projects from './views/pages/projects.js';
import contact from './views/pages/contact.js';
import error from './views/pages/error.js';

// Misc. functionality
import toggleMenu from './lib/togglemenu.js';

window.toggleMenu = toggleMenu;

const app = new App();

// Allow links to call route() function with 'app' context
window.route = app.route.bind(app);

app.addRoutes(
  ['/', home],
  ['/index.html', home],
  ['/about', about],
  ['/projects', projects],
  ['/contact', contact],
  ['/error', error],
);

// Load content once DOM is loaded
document.addEventListener('DOMContentLoaded', app.route.call(app, window.location.pathname));
