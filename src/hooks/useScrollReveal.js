import { useEffect } from 'react';

export default function useScrollReveal(dependency) {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observers = [];

    root.classList.add('reveal-ready');

    const runReveal = () => {
      const main = document.querySelector('.portfolio-app main');
      if (!main) return;

      const revealTargets = main.querySelectorAll([
        '.page-intro',
        '.editorial-card',
        'article',
        'section',
        'header',
        'table',
        'img',
      ].join(','));

      const elements = [...revealTargets];

      const showIfInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        const verticallyVisible = rect.top < viewportHeight * 0.96 && rect.bottom > 0;
        const horizontallyVisible = rect.left < viewportWidth && rect.right > 0;
        return verticallyVisible && horizontallyVisible;
      };

      elements.forEach((element) => {
        element.classList.add('reveal');
        element.classList.remove('reveal-pending');
        if (element.classList.contains('editorial-card')) element.classList.add('hover-lift');

        if (reduceMotion || showIfInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
          element.classList.add('reveal-pending');
        }
      });

      if (reduceMotion || !('IntersectionObserver' in window)) {
        elements.forEach((element) => {
          element.classList.add('is-visible');
          element.classList.remove('reveal-pending');
        });
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

      elements
        .filter((element) => element.classList.contains('reveal-pending'))
        .forEach((element) => observer.observe(element));

      observers.push(observer);
    };

    const firstFrame = window.requestAnimationFrame(runReveal);
    const afterTabTransition = window.setTimeout(runReveal, 520);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.clearTimeout(afterTabTransition);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [dependency]);
}
