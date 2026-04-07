export const scrollAnimation = () => {
  const elements = document.querySelectorAll('.scroll-animate');
  const triggerBottom = window.innerHeight - 20;
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      (el as HTMLElement).style.visibility = 'visible';
      el.classList.add('animate__active');
    }
  });
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
