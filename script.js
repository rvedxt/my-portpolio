const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

window.addEventListener("load", () => {
  setTimeout(() => $("#loader")?.classList.add("hide"), 800);
});

$("#year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  $("#nav")?.classList.toggle("scrolled", window.scrollY > 30);
});

$("#menuBtn")?.addEventListener("click", () => {
  $("#navLinks")?.classList.toggle("open");
});

$$("#navLinks a").forEach(link => {
  link.addEventListener("click", () => $("#navLinks")?.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

$$(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("video").forEach(video => {
  const empty = video.parentElement.querySelector(".video-empty");

  video.addEventListener("loadeddata", () => {
    if (empty) empty.style.display = "none";
  });

  video.addEventListener("error", () => {
    if (empty) empty.style.display = "flex";
  });
});
