const allPrompts = document.querySelectorAll('.scroll-prompt');

const observerOptions = {
  root: null,
  threshold: 0.5,
};

allPrompts.forEach(prompt => {
  const parentSection = prompt.closest('section');

  if (!parentSection) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        prompt.classList.remove('fade-out');
      } else {
        prompt.classList.add('fade-out');
      }
    });
  }, observerOptions);

  observer.observe(parentSection);
});