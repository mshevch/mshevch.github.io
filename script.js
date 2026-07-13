// ============================================
// Portfolio site behavior
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initGalleryFilter();
  initLightbox();
  initContactForm();
});

/* Mobile nav toggle */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // close menu when a link is tapped (mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

/* Works page: category filter */
function initGalleryFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".art-card");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });
}

/* Works page: click a card to open a simple lightbox */
function initLightbox() {
  const cards = document.querySelectorAll(".art-card");
  const lightbox = document.getElementById("lightbox");
  if (!cards.length || !lightbox) return;

  const titleEl = lightbox.querySelector(".lightbox-title");
  const mediumEl = lightbox.querySelector(".lightbox-medium");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector(".title")?.textContent ?? "";
      const medium = card.querySelector(".medium")?.textContent ?? "";
      titleEl.textContent = title;
      mediumEl.textContent = medium;
      lightbox.classList.add("open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

/* Contact page: basic client-side form handling (no backend attached) */
function initContactForm() {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in every field before sending.";
      status.style.color = "#c0392b";
      return;
    }

    // No backend is wired up yet. This is where you'd send the data to
    // a form service (e.g. Formspree, Netlify Forms) or your own API.
    status.style.color = "";
    status.textContent = `Thanks, ${name} — this form isn't connected to an inbox yet, but your message was captured.`;
    form.reset();
  });
}
