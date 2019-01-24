'use strict';

const url = window.location.pathname;
window.location = `/?redirect=${url}`;
