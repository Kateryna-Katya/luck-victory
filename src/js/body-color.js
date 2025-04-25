const sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const color = entry.target.dataset.color;
      document.body.style.backgroundColor = color;
    }
  });
}, options);

sections.forEach(section => observer.observe(section));