// Avoid loading one extra file to get the base path
const base = '';
const url = window.location.pathname.slice(base.length);
window.location = `/?redirect=${url}`;
