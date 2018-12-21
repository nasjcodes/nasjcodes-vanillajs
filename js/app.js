"use strict";

const routes = {
  '/'           : home,
  'index.html?' : home,
  'projects'    : projects,
};

const router = () => {
  const content = null || document.getElementById('main_content');

  //Remove # from url hash
  let url = window.location.hash.substring(1);

  if(!url) {
    url = '/';  
    window.location.hash = '#' + url;
  }

  content.innerHTML = routes[url];
  window.history.pushstate({}, "test", "test.html");

}

const loadComponents = () => {
  const header = null || document.getElementById('header_content');
  const footer = null || document.getElementById('footer_content');

  //Render Header and footer
  header.innerHTML = navbar;

  router();
}

document.addEventListener('DOMContentLoaded', loadComponents);

window.addEventListener('hashchange', router);