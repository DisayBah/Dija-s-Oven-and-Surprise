/* layout.js - shared header and footer. Edit the links here once and every page updates. */
(function () {
  "use strict";
  const root = document.body.dataset.root || "";
  const links = [
    ["Our Story", "pages/our-story.html"],
    ["Pre-order Menu", "pages/menu.html"],
    ["Available", "pages/available.html"],
    ["Gallery", "pages/gallery.html"],
    ["Contact", "pages/contact.html"]
  ];
  const current = location.pathname.split("/").pop();

  const nav = links.map(([label, href]) => {
    const active = href.endsWith(current) && current !== "" ? ' aria-current="page"' : "";
    return `<a href="${root}${href}"${active}>${label}</a>`;
  }).join("");

  document.getElementById("site-header").outerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${root}index.html" aria-label="Dija's Oven and Surprise, home">
          <img src="${root}assets/images/logo.png" alt="Dija's Oven & Surprise" width="260" height="75">
        </a>
        <nav class="main-nav" aria-label="Main">${nav}</nav>
      </div>
    </header>`;

  document.getElementById("site-footer").outerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p class="footer-brand"><img src="${root}assets/images/icon-192.png" alt="" width="44" height="44">&copy; ${new Date().getFullYear()} Dija's Oven &amp; Surprise. Freetown, Sierra Leone.</p>
        <a href="${root}pages/contact.html">Contact us</a>
      </div>
    </footer>`;

  const wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hello Dija's Oven & Surprise, I would like to place an order.")}`;
  wa.target = "_blank"; wa.rel = "noopener";
  wa.setAttribute("aria-label", "Chat with us on WhatsApp");
  wa.innerHTML = `<img src="${root}assets/images/whatsapp-icon.png" alt="" width="60" height="60">`;
  document.body.appendChild(wa);
})();
