/* =========================================================
   WEBSITE SETTINGS — EDIT ONLY THIS SECTION
   ========================================================= */

const SITE_CONFIG = {

  // =======================================================
  // 1. ARTIST
  // =======================================================

  // Put the artist's image inside:
  // assets/artist.jpg
  //
  // Or change this to your own image filename/path.
  artistImage: "assets/artist.jpg",

  // Artist's name
  artistName: "IMROZ KHAN",


  // =======================================================
  // 2. SOCIAL MEDIA + BOOKING LINKS
  // =======================================================

  // Instagram icon
  instagramUrl: "https://instagram.com/",

  // YouTube icon
  youtubeUrl: "https://youtube.com/",

  // BOOK IMROZ button
  bookUrl: "https://example.com/book",


  // =======================================================
  // 3. WATCH PERFORMANCE BUTTON
  // =======================================================

  // Put the YouTube/video link here
  watchPerformanceUrl: "https://youtube.com/"
};


/* =========================================================
   DON'T EDIT BELOW THIS LINE
   ========================================================= */


// ---------------------------------------------------------
// ARTIST IMAGE
// ---------------------------------------------------------

const artistImage = document.querySelector(".hero-image");

if (artistImage && SITE_CONFIG.artistImage) {
  artistImage.style.backgroundImage = `
    url("${SITE_CONFIG.artistImage}")
  `;
}


// ---------------------------------------------------------
// ARTIST NAME
// ---------------------------------------------------------

document.querySelectorAll("[data-artist-name]").forEach((element) => {
  element.textContent = SITE_CONFIG.artistName;
});


// Get first name automatically
// Example:
// "IMROZ KHAN" → "IMROZ"
// "RAHUL SHARMA" → "RAHUL"

const firstName = SITE_CONFIG.artistName
  .trim()
  .split(/\s+/)[0];

document.querySelectorAll("[data-artist-first-name]").forEach((element) => {
  element.textContent = firstName;
});


// ---------------------------------------------------------
// LINKS
// ---------------------------------------------------------

const instagramLink = document.getElementById("instagramLink");
const youtubeLink = document.getElementById("youtubeLink");
const bookLink = document.getElementById("bookLink");
const watchLink = document.getElementById("watchLink");


if (instagramLink) {
  instagramLink.href = SITE_CONFIG.instagramUrl;
}


if (youtubeLink) {
  youtubeLink.href = SITE_CONFIG.youtubeUrl;
}


if (bookLink) {
  bookLink.href = SITE_CONFIG.bookUrl;
}


if (watchLink) {
  watchLink.href = SITE_CONFIG.watchPerformanceUrl;
}


// ---------------------------------------------------------
// ACTIVE NAVIGATION
// ---------------------------------------------------------

const sections = [
  ...document.querySelectorAll(".placeholder-section, #home")
];

const navLinks = [
  ...document.querySelectorAll(".nav-link")
];


const observer = new IntersectionObserver(
  (entries) => {

    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort(
        (a, b) =>
          b.intersectionRatio - a.intersectionRatio
      )[0];


    if (!visible) return;


    const id = visible.target.id;


    navLinks.forEach((link) => {

      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${id}`
      );

    });

  },
  {
    threshold: [0.15, 0.35, 0.6],
  }
);


sections.forEach((section) => {
  observer.observe(section);
});