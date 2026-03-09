// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: window.innerWidth < 640 ? 120 : 80,
});

// DOM Elements
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const topBar = document.querySelector("header > div");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
const allHashLinks = document.querySelectorAll('a[href^="#"]');

// Get scroll offset based on header height
const getScrollOffset = () => {
  const topBarHeight = topBar
    ? Math.ceil(topBar.getBoundingClientRect().height)
    : 0;
  const extraOffset = window.innerWidth < 640 ? 16 : 10;
  return topBarHeight ? topBarHeight + extraOffset : 84;
};

// Set CSS variable for scroll offset
const setScrollOffset = () => {
  document.documentElement.style.setProperty(
    "--header-offset",
    `${getScrollOffset()}px`,
  );
};

// Smooth scroll to section with offset
const scrollToSection = (hash, updateHistory = true) => {
  const targetElement = document.querySelector(hash);
  if (!targetElement) {
    return;
  }

  const targetTop =
    targetElement.getBoundingClientRect().top +
    window.scrollY -
    getScrollOffset();
  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  });

  if (updateHistory) {
    history.pushState(null, "", hash);
  }
};

// Initialize scroll offset
setScrollOffset();
window.addEventListener("load", setScrollOffset);
window.addEventListener("resize", setScrollOffset);

// Observe header height changes
if ("ResizeObserver" in window && topBar) {
  const headerObserver = new ResizeObserver(() => {
    setScrollOffset();
  });
  headerObserver.observe(topBar);
}

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.classList.toggle("hidden");
  setScrollOffset();
});

// Close mobile menu when clicking a link
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.add("hidden");
    setScrollOffset();
  });
});

// Search functionality for Berita section (index.html only)
const searchInput = document.getElementById("searchBerita");
const beritaContainer = document.getElementById("beritaContainer");

if (searchInput && beritaContainer) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const articles = beritaContainer.querySelectorAll("article");

    articles.forEach((article) => {
      const title =
        article.querySelector("h3")?.textContent.toLowerCase() || "";
      const content =
        article
          .querySelector("p:not(.text-xs)")
          ?.textContent.toLowerCase() || "";
      const category =
        article.querySelector(".text-xs")?.textContent.toLowerCase() ||
        "";

      if (
        title.includes(searchTerm) ||
        content.includes(searchTerm) ||
        category.includes(searchTerm)
      ) {
        article.style.display = "";
      } else {
        article.style.display = "none";
      }
    });
  });
}

// Handle hash link clicks for smooth scrolling
allHashLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") {
      return;
    }

    const targetElement = document.querySelector(hash);
    if (!targetElement) {
      return;
    }

    event.preventDefault();
    requestAnimationFrame(() => {
      scrollToSection(hash);
    });
  });
});

// Handle hash on page load
if (window.location.hash) {
  window.setTimeout(() => {
    setScrollOffset();
    scrollToSection(window.location.hash, false);
  }, 120);
}

// Handle hash changes
window.addEventListener("hashchange", () => {
  if (window.location.hash) {
    scrollToSection(window.location.hash, false);
  }
});
