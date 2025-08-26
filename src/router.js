import { renderHomePage } from './home.js';
import { renderAboutPage } from './about.js';
import { renderMenuPage } from './menu.js';

const routes = {
    '/': renderHomePage,
    '/about': renderAboutPage,
    '/menu': renderMenuPage,
};

function renderPage(path) {
    const container = document.getElementById('container');
    const renderFunction = routes[path] || routes['/'];
    renderFunction(container);
}

export function navigateTo(path) {
    history.pushState(null, null, path);
    renderPage(path);
}

window.addEventListener('DOMContentLoaded', () => {
    renderPage(window.location.pathname);
});

window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
});