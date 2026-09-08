import {
  animate,
  stagger,
  type AnimationOptions,
  type DOMKeyframesDefinition,
} from "motion";

// Base animation factory — returns a configured animation function
function createAnimation(
  keyframes: DOMKeyframesDefinition,
  defaultOptions: AnimationOptions = {},
) {
  return (target: Element | string, overrides: AnimationOptions = {}) => {
    return animate(target, keyframes, { ...defaultOptions, ...overrides });
  };
}

// Reusable primitives
export const fadeIn = createAnimation(
  { opacity: [0, 1] },
  { duration: 0.4, ease: "easeOut" },
);

export const slideUp = createAnimation(
  { opacity: [0, 1], y: [24, 0] },
  { duration: 0.5, ease: "easeOut" },
);

export const scaleIn = createAnimation(
  { opacity: [0, 1], scale: [0.95, 1] },
  { duration: 0.3, ease: "easeOut" },
);

// Composable — runs multiple animations together
export function animateEntrance(el: Element, delay = 0) {
  return slideUp(el, { delay });
}

// Higher-level pattern — animate a group with stagger
export function animateList(selector: string, delay = 0) {
  const els = document.querySelectorAll(selector);
  return animate(
    els,
    { opacity: [0, 1], y: [-16, 0] },
    {
      delay: stagger(0.08, { from: "first", startDelay: delay }),
      duration: 0.4,
    },
  );
}

// Scroll-triggered wrapper
export function onVisible(el: Element, animationFn: (el: Element) => void) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animationFn(el);
        observer.disconnect();
      }
    },
    { threshold: 0.1 },
  );
  observer.observe(el);
}
