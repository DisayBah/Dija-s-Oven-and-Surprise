/* ==========================================================
   data.js - EDIT THIS FILE to change contact details, products
   and prices. Prices are in new Leones (NLe). 1 NLe = 1,000 old Le.
   ========================================================== */

/* IMPORTANT: put Dija's real WhatsApp number in whatsappNumber below. Format: country code + number, no "+", no spaces, no leading 0. Example: 23276123456 */
const SITE = {
  name: "Dija's Oven & Surprise",
  currency: "NLe",
  whatsappNumber: "23278759820",      // Dija's WhatsApp: +232 78 759 820
  phoneDisplay: "+232 78 759 820",
  instagram: "dijasoven",             // PLACEHOLDER
  address: "Freetown, Western Area, Sierra Leone",
  hours: "Monday to Saturday, 8:00 am to 10:00 pm"
};

const MENU = [
  { name: "Celebration Cake", desc: "Two-layer vanilla or chocolate cake with your message on top.", price: 450 - 1000, image: "cake.jpg" },
  { name: "Cupcake Box (6)", desc: "Soft cupcakes with buttercream in your choice of colours.", price: 150, image: "cupcakes.jpg" },
  { name: "Surprise Gift Box", desc: "Kraft gift boxes and pouches with your own thank-you sticker.", price: 100, image: "gift-box.jpg" },
  { name: "Doughnut", desc: "Glazed and sprinkled doughnuts, packed in a ribboned bag.", price: 100, image: "doughnuts.jpg" },
  { name: "Fish Roll Box", desc: "Fish rolls, waffles and pizza slices served in a bowl. Great for parties.", price: 100, image: "fish-roll.jpg" },
  { name: "Fresh Bread", desc: "Soft loaves and sliced bread, baked fresh and delivered warm.", price: 40, image: "bread.jpg" },
  { name: "Chinchin Bag", desc: "Crunchy Sierra Leonean chinchin in a 500 g bag.", price: 50, image: "chinchin.jpg" }
];

const AVAILABLE = [
  { name: "Fried rice and chicken", desc: "Fresly prepared and well seasoned chicken and rive with veggies on the side.", price: 150, image: "Fried rice and chicken with sides.jpg" },
  { name: "Bissap", desc: "Freshly prepared and flavored just for you, ready to go.", price: 40, image: "Bissap.JPG" }
];

const GALLERY = [
  { image: "cake.jpg", alt: "Pink celebration cake decorated with roses" },
  { image: "cupcakes.jpg", alt: "Box of six assorted cupcakes" },
  { image: "fried chicken.JPG", alt: "Spicy, well flavored fried chicken" },
  { image: "fish and chips.jpg", alt: "Chrispy Chips and well seasoned Fish" },
  { image: "fish-roll.jpg", alt: "Bowls of fish rolls, waffles and pizza slices" },
  { image: "FOOD PHOTO 01.JPG", alt: "White rice and seafood soup" }
];
