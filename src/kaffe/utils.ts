// Retired: this used to imperatively add `animate__active` and inline
// `visibility` to React-rendered nodes on scroll, which (a) left scroll-animate
// content at opacity:0 until JS ran - bad for SSR/SEO - and (b) mutated nodes
// React owns, producing hydration mismatches. Those elements are now revealed
// purely in CSS (see povu-overrides.css), so this is a no-op kept only so
// existing imports keep working.
export const scrollAnimation = () => {
  /* no-op: scroll reveal is handled in CSS now */
};

export const stickyNav = () => {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    const sticky = document.querySelectorAll('.kf-header');
    sticky.forEach((stick) => {
      if (offset > 10) {
        stick.classList.add('fixed');
      } else {
        stick.classList.remove('fixed');
      }
    });
  });
};
