import { router } from './router.js';
import Layout from './components/layout.js';
import HomePage from './pages/home.js';

function FourOhFourPage() {
  return `
    <div class="text-center">
      <h1 class="text-4xl font-bold">404</h1>
      <p class="text-xl">Page not found</p>
    </div>
  `;
}

router('#/', () => {
  const app = document.getElementById('app');
  app.innerHTML = Layout(HomePage());
});

import DiscoverPage from './pages/discover.js';

router('#/discover', () => {
  const app = document.getElementById('app');
  app.innerHTML = Layout(DiscoverPage());
});

import BookmarksPage from './pages/bookmarks.js';

router('#/bookmarks', () => {
  const app = document.getElementById('app');
  app.innerHTML = Layout(BookmarksPage());
});

router('#/community', () => {
  const app = document.getElementById('app');
  app.innerHTML = Layout('<h1>Community Page</h1>');
});

router('#/profile', () => {
  const app = document.getElementById('app');
  app.innerHTML = Layout('<h1>Profile Page</h1>');
});

router('#/404', () => {
  const app = document.getElementById('app');
  app.innerHTML = Layout(FourOhFourPage());
});
