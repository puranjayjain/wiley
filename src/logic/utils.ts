// @ts-ignore-next-line
import * as imagesLoaded from 'imagesLoaded';

// Preload images
const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), resolve);
  });
};

// Linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = (e: MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

export { preloadImages, lerp, getMousePos };
