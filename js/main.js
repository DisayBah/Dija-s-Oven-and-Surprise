/* main.js - builds product cards, gallery, contact details and the photo viewer */
(function () {
  "use strict";
  const root = document.body.dataset.root || "";
  const IMG = `${root}assets/images/`;
  const price = (n) => `${SITE.currency} ${n.toLocaleString("en-US")}`;

  function orderLink(item) {
    const msg = `Hello ${SITE.name}, I would like to order: ${item.name} (${price(item.price)}).`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  const card = (item) => `
    <article class="card">
      <img src="${IMG}${item.image}" alt="${item.name}" loading="lazy" width="900" height="900">
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="card-foot">
          <span class="price">${price(item.price)}</span>
          <a class="btn btn-primary btn-sm" href="${orderLink(item)}" target="_blank" rel="noopener">Order</a>
        </div>
      </div>
    </article>`;

  const photo = (g) => `
    <button class="gallery-item" type="button" data-src="${IMG}${g.image}" data-alt="${g.alt}">
      <img src="${IMG}${g.image}" alt="${g.alt}" loading="lazy" width="1200" height="900">
    </button>`;

  const sources = { menu: [MENU, card], available: [AVAILABLE, card], gallery: [GALLERY, photo] };
  document.querySelectorAll("[data-render]").forEach((el) => {
    const [list, template] = sources[el.dataset.render];
    el.innerHTML = list.slice(0, Number(el.dataset.limit) || list.length).map(template).join("");
  });

  const set = (key, fn) => document.querySelectorAll(`[data-site="${key}"]`).forEach(fn);
  set("address", (el) => (el.textContent = SITE.address));
  set("hours", (el) => (el.textContent = SITE.hours));
  set("phone-link", (el) => { el.textContent = SITE.phoneDisplay; el.href = `tel:+${SITE.whatsappNumber}`; });
  set("instagram-link", (el) => { el.textContent = `@${SITE.instagram}`; el.href = `https://instagram.com/${SITE.instagram}`; el.target = "_blank"; el.rel = "noopener"; });
  set("whatsapp-link", (el) => (el.href = `https://wa.me/${SITE.whatsappNumber}`));

  const box = document.getElementById("lightbox");
  const big = box.querySelector("img");
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-item");
    if (btn) { big.src = btn.dataset.src; big.alt = btn.dataset.alt; box.showModal(); }
    else if (e.target === box || e.target.closest(".lightbox-close")) box.close();
  });
})();
