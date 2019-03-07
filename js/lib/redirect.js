// Avoid loading one extra file to get the base path
const base = '';
const url = window.location.pathname.slice(base.length + 1) || 'home';
window.location = `/?redirect=${url}`;
