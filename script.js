const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

/* HERO SLIDESHOW */
const hero = document.getElementById("hero");
const heroImg = document.getElementById("hero-img");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");

const slides = [
  {
    bg: "https://uploads.onecompiler.io/43v5nyjh9/3xsprh8sp/Messenger_creation_DEC9BE9C-AA0A-406F-B315-7030B5A79195.png",
    img: "https://uploads.onecompiler.io/43v5nyjh9/3xsprh8sp/Messenger_creation_DEC9BE9C-AA0A-406F-B315-7030B5A79195.png",
    title: "Strawberry Care Dishwashing Liquid",
    desc: "Gentle on hands, tough on grease, with a sweet strawberry scent — Small ₱20, Medium ₱35, Large ₱45",
  },
  {
    bg: "https://uploads.onecompiler.io/43v5nyjh9/442d98qgw/b6861f85-100b-4508-ab2e-93911155ad54.jfif",
    img: "https://uploads.onecompiler.io/43v5nyjh9/442d98qgw/b6861f85-100b-4508-ab2e-93911155ad54.jfif",
    title: "Calamansi Bliss Dishwashing Liquid",
    desc: "Removes tough grease while leaving a refreshing calamansi scent — Small ₱20, Medium ₱35, Large ₱45",
  },
  {
    bg: "https://uploads.onecompiler.io/43v5nyjh9/442d98qgw/dd51d414-59b0-4db6-a7fe-2c8c03931131.jfif",
    img: "https://uploads.onecompiler.io/43v5nyjh9/442d98qgw/dd51d414-59b0-4db6-a7fe-2c8c03931131.jfif",
    title: "Lemon Fresh Dishwashing Liquid",
    desc: "Cleans deeply and leaves a zesty lemon fragrance — Small ₱20, Medium ₱35, Large ₱45",
  },
];

let current = 0;
setInterval(() => {
  current = (current + 1) % slides.length;
  hero.style.backgroundImage = `url(${slides[current].bg})`;
  heroImg.src = slides[current].img;
  heroTitle.textContent = slides[current].title;
  heroDesc.textContent = slides[current].desc;
}, 4000);
