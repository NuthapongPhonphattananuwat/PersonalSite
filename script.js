const allPrompts = document.querySelectorAll('.scroll-prompt');

const observerOptions = {
  root: null,
  threshold: 0.8,
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


const allSections = document.querySelectorAll('.fade-in-section');
const sectionObserverOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, sectionObserverOptions);

allSections.forEach(section => {
  sectionObserver.observe(section);
});