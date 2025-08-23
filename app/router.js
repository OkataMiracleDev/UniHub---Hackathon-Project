const routes = {};

function router(path, template) {
  routes[path] = template;
}

function navigate(path) {
  window.location.hash = path;
}

function handleRouteChange() {
  const path = window.location.hash || '#/';
  const template = routes[path] || routes['#/404'];
  const app = document.getElementById('app');
  if (template) {
    app.innerHTML = template();
  }
}

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);

export { router, navigate };
