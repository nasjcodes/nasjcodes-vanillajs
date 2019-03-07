import toggleMenu from './togglemenu.js';

class App {
  constructor() {
    this.base = '';
    this.routes = {};
    this.components = {};
    this.navbar = document.getElementById('navbar');
    this.footer = document.getElementById('footer');
    this.mainDiv = document.getElementById('main_content');
    this.header = document.getElementById('header');
    this.content = document.getElementById('content');

    // Forward and back buttons
    window.addEventListener('popstate', () => {
      const link = window.location.pathname.slice(this.base.length + 1);
      this.route(link);
      // const page = this.routes[link];
      // this.loadPage(page, link, true);
    });
  }

  // Render navbar and footer
  loadComponents() {
    this.navbar.innerHTML = this.components.navbar;
    this.footer.innerHTML = this.components.footer;
  }

  setBase(base) {
    this.base = base;
  }

  addRoutes(routes) {
    this.routes = routes;
  }

  addComponents(components) {
    this.components = components;
  }

  route(request) {
    // Default to error page
    let page = this.routes.error;
    let link = request || 'home';
    let isRedirect = false;

    // Checks if ?redirect=___ is present in url
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('redirect')) {
      link = urlParams.get('redirect');
      isRedirect = true;
    }

    // Find page in routes
    if (this.routes[link]) {
      page = this.routes[link];
    }

    this.loadPage(page, link, isRedirect);
  }

  loadPage(page, link, isRedirect) {
    window.scrollTo(0, 0);
    App.collapseNavBar();
    this.setUrl(link, isRedirect);
    this.displayPage(page);
  }

  displayPage(page) {
    App.setDocTitle(page.title);

    // Add/remove attributes to main div
    if (page.centerX) {
      this.addAttrib('center-x');
    } else {
      this.removeAttrib('center-x');
    }

    if (page.centerY) {
      this.addAttrib('center-y');
    } else {
      this.removeAttrib('center-y');
    }

    // Display content
    this.header.innerHTML = page.header;
    this.content.innerHTML = page.content;
  }

  addAttrib(attrib) {
    this.mainDiv.classList.add(attrib);
  }

  removeAttrib(attrib) {
    this.mainDiv.classList.remove(attrib);
  }

  static collapseNavBar() {
    const menuElem = document.getElementById('menu');
    if (menuElem.classList.contains('change')) {
      toggleMenu(menuElem);
    }
  }

  setUrl(link, isRedirect) {
    const url = `${this.base}/${link === 'home' ? '' : link}`;

    if (isRedirect || window.location.pathname === url) {
      window.history.replaceState({}, '', url);
    } else {
      window.history.pushState({}, '', url);
    }
  }

  // Use static because 'this' is not used
  static setDocTitle(pageName) {
    let title = 'Jian Sheng';

    if (pageName !== '') {
      title += ` |  ${pageName}`;
    }
    document.title = title;
  }
}

export default App;
