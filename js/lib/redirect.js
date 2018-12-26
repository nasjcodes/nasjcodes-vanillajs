"use strict";

let url = window.location.pathname;
console.log(url);
window.location = "/?redirect=" + url;