"use strict";

let url = window.location.pathname.substring(0);
window.location = "/?redirect=true#" + url;