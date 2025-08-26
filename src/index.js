import { navigateTo } from './router.js';
import "./styles.css";

document.getElementById('home-button').addEventListener('click', () => navigateTo('/'));
document.getElementById('about-button').addEventListener('click', () => navigateTo('/about'));
document.getElementById('menu-button').addEventListener('click', () => navigateTo('/menu'));