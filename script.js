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
  threshold: 0.15, // Trigger when 15% of the section is visible
  rootMargin: "0px 0px -50px 0px" // Start loading a little before it's fully in view
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, sectionObserverOptions);

allSections.forEach(section => {
  sectionObserver.observe(section);
});