import routes from './routes.js';

class App {
  constructor() {
    this.navbar = null || document.getElementById('navbar');
    this.footer = null || document.getElementById('footer');
    this.content = null || document.getElementById('main_content');

    const loadAndRoute = () => {
      // this.loadComponents();
      this.route(window.location.pathname);
    };

    // Load components and content once DOM is loaded
    document.addEventListener('DOMContentLoaded', loadAndRoute);

    // Forward and back buttons
    window.addEventListener('popstate', () => {
      this.loadPage(window.location.pathname, true);
    });

    window.route = this.route.bind(this);
    window.toggleMenu = App.toggleMenu;
  }

  // TODO: delete
  // Render navbar and footer
  // loadComponents() {
  //   this.navbar.innerHTML = navbar;
  //   this.footer.innerHTML = footer;
  // }

  route(request) {
    // Checks if ?redirent=___ is present in url
    // Attemps to load the respective page
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('redirect')) {
      this.loadPage(urlParams.get('redirect'), true);
    } else {
      this.loadPage(request, false);
    }
  }

  loadPage(page, isRedirect) {
    // Collapse nav bar
    const menuElem = document.getElementById('menu');

    if (menuElem.classList.contains('change')) {
      App.toggleMenu(menuElem);
    }

    // Display error page if not found
    if (routes[page] === undefined) {
      this.content.innerHTML = routes['/error'];
      document.title = 'Error';
    } else {
      this.content.innerHTML = routes[page]; // Displays the page view
      App.setDocTitle(page);
    }

    // Makes the url "nice"
    if (isRedirect || window.location.pathname === page) {
      window.history.replaceState({}, '', page);
    } else {
      window.history.pushState({}, '', page);
    }
  }

  // Use static because 'this' is not used
  static setDocTitle(url) {
    const pageName = url.substring(1);
    let title = 'nasjcodes';

    if (url !== '') {
      title += ` |  ${pageName}`;
    }
    document.title = title;
  }

  static toggleMenu(elem) {
    elem.classList.toggle('change');
    document.getElementById('navlinks').classList.toggle('change');
  }
}

export default App;
