window.onload = function () {
  document.getElementById("form").reset();
};

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".navLinks");

menu.addEventListener("click", function () {
  console.log("HELLLO");
  if (navLinks.style.display === "none" || navLinks.style.display === "") {
    navLinks.classList.toggle("active");
  }
});

const tl = gsap.timeline();
const text = document.querySelector(".intro h2 span").textContent;
console.log(text);

tl.from(".navbar h1 , ul li", {
  opacity: 0,
  y: 30,
  duration: 0.3,
  delay: 0.1,
  stagger: 0.2,
});

tl.from(".intro h2,  .intro h3,  .intro div", {
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  ease: "elastic.out(1.6,0.8)",
  y: 40,
});

gsap.from("#about h2", {
  opacity: 0,
  scale: 2,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
    toggleActions: "play none none none",
  },
});

gsap.from(".main h3 , .main p , .main a", {
  opacity: 0,
  x: "-100%",
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%",
    toggleActions: "play none none none",
    ease: "bounce.out",
  },
});

gsap.from(".skillMain h3", {
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".skillMain",
    start: "top 60%",
    toggleActions: "play none none none",
  },
});

gsap.from(".skills button", {
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".skillMain",
    start: "top 60%",
    toggleActions: "play none none none",
  },
});

gsap.from("#projects h2", {
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#projects",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".projectMin", {
  opacity: 0,
  x: "-100%",
  duration: 0.6,
  scrollTrigger: {
    trigger: ".projectMin",
    start: "top 60%",
    toggleActions: "play none none none",
  },
});

gsap.from("#contact h2", {
  opacity: 0,
  duration: 0.6,
  scale: 2,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 85%",
    toggleActions: "play none none none",
  },
});

gsap.from("#form", {
  opacity: 0,
  x: "-100%",
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 75%",
    toggleActions: "play none none none",
  },
});
