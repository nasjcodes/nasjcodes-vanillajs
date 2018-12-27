class App {

  constructor() {
    this.navbar = null || document.getElementById("navbar");
    this.footer = null || document.getElementById("footer");
    this.content = null || document.getElementById("main_content");

    const loadAndRoute = () => {
      this.loadComponents();
      this.route(window.location.pathname);
    }

    // Load components and content once DOM is loaded
    document.addEventListener("DOMContentLoaded", loadAndRoute);

    // Forward and back buttons
    window.addEventListener("popstate", () => {
      this.loadPage(window.location.pathname, true);
    });
  }

  // Render navbar and footer
  loadComponents() {
    this.navbar.innerHTML = navbar;
    this.footer.innerHTML = footer;
  }

  route(request) {
    // Checks if ?redirent=___ is present in url
    // Attemps to load the respective page
    var urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has("redirect")) {
      this.loadPage(urlParams.get("redirect"), true);
    } else {
      this.loadPage(request, false);
    }
  }

  loadPage(page, isRedirect) {
    // Collapse nav bar
    this.collapseBar();

    // Display error page if not found
    if(routes[page] === undefined) {
      this.content.innerHTML = error;
      document.title = "Error";
    } else {
      this.content.innerHTML = routes[page]; // Displays the page view
      this.setDocTitle(page);
    }

    // Makes the url "nice"
    if(isRedirect || window.location.pathname === page) {
      window.history.replaceState({}, "", page);
    } else {
      window.history.pushState({}, "", page);
    }

  }

  setDocTitle(url) {
    url = url.substring(1);
    var title = "nasjcodes";

    if(url !== "") {
      title += " | " + url;
    }
    document.title = title;
  }

  collapseBar() {
    $('.collapse').collapse('hide');
  }

}


