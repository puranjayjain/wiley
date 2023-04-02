import { preloadImages } from './utils';
import { Panel } from './panel';
import Cursor from './cursor';

// Preload all images
export const init = () => {
  const panels = [...document.querySelectorAll('.panel')];

  preloadImages().then(() => {
    // remove loader (loading class)
    document.body.classList.remove('loading');

    panels.forEach((panel) => new Panel(panel));

    // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // mouse effects on all links and others
    [...document.querySelectorAll('a, .panel__item-imgwrap, button')].forEach((link) => {
      link.addEventListener('mouseenter', () => cursor.enter());
      link.addEventListener('mouseleave', () => cursor.leave());
    });
  });
};
