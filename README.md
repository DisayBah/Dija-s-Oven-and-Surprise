# Dija's Oven & Surprise

Multi-page responsive website (phone, tablet, laptop). Plain HTML, CSS and JavaScript, no build step.

## Run
Open the folder in VS Code, right-click `index.html` and choose **Open with Live Server** (or double-click `index.html`).

## Structure
```
index.html              Home page
pages/                  our-story, menu, available, gallery, contact
css/style.css           All styles (colours and spacing at the top)
js/data.js              EDIT HERE: products, prices (NLe), phone, WhatsApp, address
js/layout.js            Shared header and footer (edit links once)
js/main.js              Builds product cards, gallery and photo viewer
assets/images/          Logo and photos
```

## Replace the photos
Product photos are real photos. `hero.jpg` is a collage of your products, so replace it with a photo of your shop or display if you have one. Save your own photos with the same file names
(for example `cake.jpg`, `hero.jpg`) and they appear automatically. Use landscape photos, about 1200 x 900 px
(hero and story: 1600 x 1000 px), and keep each under 300 KB.

## WhatsApp
Set `whatsappNumber` in `js/data.js` (country code first, no + or spaces, e.g. `23276123456`). Every Order button, the contact button and the floating WhatsApp icon use it.
