class App {

  constructor() {

  }

  // Render Header and footer
  loadComponents() {
    this.header = null || document.getElementById("header_content");
    this.footer = null || document.getElementById("footer_content");

    this.header.innerHTML = navbar;
    this.footer.innerHTML = footer;

  }

  loadPage(url) {
    this.content = null || document.getElementById("main_content");

    if(routes[url] === undefined) {
      this.content.innerHTML = routes["/error"];

      // Hide redirect information after moving to error page
      if(this.isRedirect() === true) {
        window.history.replaceState({}, "", url);
      }

      document.title = "Error ):";

    } else {
      this.content.innerHTML = routes[url];
      window.history.replaceState({}, "", url);
      this.setDocTitle(url);
    }

  }

  isRedirect() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.has("redirect");
  }

  setDocTitle(url) {
    url = url.substring(1);
    var title = "nasjcodes";

    if(url !== "") {
      title += " | " + url;
    }
    document.title = title;
  }

}


