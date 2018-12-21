class Router {

  constructor(app) {
    this.app = app;

    const loadAndRoute = () => {
      this.route();
      this.app.loadComponents();
    }

    document.addEventListener("DOMContentLoaded", loadAndRoute);

    // Don't need to reload components after first load
    window.addEventListener("hashchange", this.route);
  }

  route() {

    // #/name -> ["#", "name"]
    let hash = window.location.hash.split("/");
    let url = "/";

    if(hash[0] !== "") {
      url = url + hash[1];
    }

    app.loadPage(url);
  }

}