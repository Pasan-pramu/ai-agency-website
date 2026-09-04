/*
 * jQuery slideUp / slideDown / slideToggle, reimplemented without jQuery.
 *
 * theme.js:65-69 drives the mobile submenus with:
 *     ...siblings().children('ul.sub-menu').slideUp();          // jQuery default 400ms
 *     ...next('ul.sub-menu').stop(true, true).slideToggle(350);  // 350ms
 *
 * Both durations are preserved. jQuery's default easing is "swing", which is
 * exactly (1 - cos(p*PI)) / 2 — a sinusoidal ease-in-out. CSS `ease-in-out`
 * (cubic-bezier(.42,0,.58,1)) is close but not the same curve, so the easing is
 * evaluated per frame here rather than handed to CSS.
 *
 * jQuery's end states are reproduced too: slideDown finishes with inline
 * `display: block` and the animated properties cleared; slideUp finishes with
 * inline `display: none`.
 */

const swing = (p: number) => 0.5 - Math.cos(p * Math.PI) / 2;

type Running = { raf: number; finish: () => void };

const running = new WeakMap<HTMLElement, Running>();

/** jQuery's .stop(true, true): drop the queue and jump to the end. */
export function stopAndFinish(el: HTMLElement) {
  const current = running.get(el);
  if (current) {
    cancelAnimationFrame(current.raf);
    running.delete(el);
    current.finish();
  }
}

function animateHeight(
  el: HTMLElement,
  from: number,
  to: number,
  duration: number,
  finish: () => void,
) {
  const start = performance.now();
  el.style.overflow = "hidden";

  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    if (p < 1) {
      el.style.height = `${from + (to - from) * swing(p)}px`;
      running.set(el, { raf: requestAnimationFrame(step), finish });
    } else {
      running.delete(el);
      finish();
    }
  };

  running.set(el, { raf: requestAnimationFrame(step), finish });
}

export function slideDown(el: HTMLElement, duration: number) {
  stopAndFinish(el);

  // Measure the natural height with the element laid out but not visible.
  el.style.display = "block";
  el.style.height = "";
  const target = el.scrollHeight;

  const finish = () => {
    el.style.height = "";
    el.style.overflow = "";
    el.style.display = "block";
  };

  el.style.height = "0px";
  animateHeight(el, 0, target, duration, finish);
}

export function slideUp(el: HTMLElement, duration: number) {
  stopAndFinish(el);

  const finish = () => {
    el.style.height = "";
    el.style.overflow = "";
    el.style.display = "none";
  };

  animateHeight(el, el.scrollHeight, 0, duration, finish);
}

/** True when the element is currently laid out (jQuery's :visible test). */
export function isVisible(el: HTMLElement) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

export function slideToggle(el: HTMLElement, duration: number) {
  // jQuery decides the direction *after* .stop(true, true) has jumped to the
  // end of any in-flight animation, so the finish runs first.
  stopAndFinish(el);
  if (isVisible(el)) slideUp(el, duration);
  else slideDown(el, duration);
}
