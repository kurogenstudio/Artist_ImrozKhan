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


/* =====================================================
   ABOUT SECTION SETTINGS
   ===================================================== */

const ABOUT_CONFIG = {

  // ---------------------------------------------------
  // IMAGES
  // ---------------------------------------------------

  mainImage: "assets/artist-main.jpg",

  photo1: "assets/artist-photo-1.jpg",

  photo2: "assets/artist-photo-2.jpg",


  // ---------------------------------------------------
  // HEADING
  // ---------------------------------------------------

  heading: `
    WORDS<br>
    PEOPLE<br>
    AND PLACES
  `,


  // ---------------------------------------------------
  // PARAGRAPHS
  // ---------------------------------------------------

  paragraph1: `
    Imroz Khan is a live performance artist, working across
    spoken word, poetry, storytelling and ghazals. A law student
    who commands narratives both in the courtroom and on stage,
    he is known for sharp wit, impeccable comic timing, and
    powerful social commentary expressed through Hindi, Urdu,
    Marathi and English.
  `,

  paragraph2: `
    With 3+ years of active performance experience, he has
    performed at leading platforms across the country, curated
    cultural spaces, written for theatre, and continues to explore
    new ways of using words to question, connect and create
    conversations.
  `,


  // ---------------------------------------------------
  // STATISTICS
  // ---------------------------------------------------

  stat1Number: "3+",
  stat1Label: `
    YEARS<br>
    PERFORMING LIVE
  `,

  stat2Number: "20+",
  stat2Label: `
    PLATFORMS<br>
    &amp; EVENTS
  `,

  stat3Number: "MULTI",
  stat3Label: `
    LANGUAGE<br>
    PERFORMER
  `,

  stat4Number: "1000+",
  stat4Label: `
    AUDIENCE<br>
    CONVERSATIONS
  `

};


/* =====================================================
   APPLY ABOUT SETTINGS
   ===================================================== */


// Images

document.getElementById("aboutMainImage").src =
  ABOUT_CONFIG.mainImage;

document.getElementById("aboutPhoto1").src =
  ABOUT_CONFIG.photo1;

document.getElementById("aboutPhoto2").src =
  ABOUT_CONFIG.photo2;


// Heading

document.getElementById("aboutHeading").innerHTML =
  ABOUT_CONFIG.heading;


// Paragraphs

document.getElementById("aboutParagraph1").innerHTML =
  ABOUT_CONFIG.paragraph1;

document.getElementById("aboutParagraph2").innerHTML =
  ABOUT_CONFIG.paragraph2;


// Statistics

document.getElementById("stat1Number").textContent =
  ABOUT_CONFIG.stat1Number;

document.getElementById("stat1Label").innerHTML =
  ABOUT_CONFIG.stat1Label;


document.getElementById("stat2Number").textContent =
  ABOUT_CONFIG.stat2Number;

document.getElementById("stat2Label").innerHTML =
  ABOUT_CONFIG.stat2Label;


document.getElementById("stat3Number").textContent =
  ABOUT_CONFIG.stat3Number;

document.getElementById("stat3Label").innerHTML =
  ABOUT_CONFIG.stat3Label;


document.getElementById("stat4Number").textContent =
  ABOUT_CONFIG.stat4Number;

document.getElementById("stat4Label").innerHTML =
  ABOUT_CONFIG.stat4Label;
