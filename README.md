# Glo Whips Bakery — Website

A complete, professional, mobile-first static website for **Glo Whips Bakery**.  
Built for GitHub Pages. No backend, no database, no build step required.

---

## Project Description

This website lets customers:

- Discover the bakery  
- Browse products with search, filters and sorting  
- View product details  
- See new arrivals and sale items  
- Add products to an order (cart)  
- Adjust quantities and see totals  
- Send the order via WhatsApp  
- Contact the bakery  
- View a gallery with lightbox  
- Read about the business and FAQs  

**Primary flow:** Discover → Browse → Choose → Order → Contact (WhatsApp)

---

## Features

- Responsive, mobile-first design  
- Central product database in `script.js` (easy to edit)  
- Working search, category filters and sorting  
- Dynamic product detail pages (`product.html?id=...`)  
- Order/cart system with localStorage  
- WhatsApp order and contact forms  
- New Arrivals and Sale pages  
- Gallery with lightbox (prev/next/close)  
- Floating WhatsApp button  
- FAQ accordion  
- Custom 404 page  
- Accessible markup and focus styles  
- SEO-friendly titles and meta descriptions  

---

## Technology Used

- HTML5  
- CSS3 (custom properties, Grid, Flexbox)  
- Vanilla JavaScript (no frameworks)  
- Google Fonts (Playfair Display + Inter)  
- localStorage for the order/cart  

No Node.js, no PHP, no database.

---

## Folder Structure

```
/
├── index.html
├── shop.html
├── product.html
├── new-arrivals.html
├── sale.html
├── about.html
├── gallery.html
├── order.html
├── contact.html
├── faq.html
├── 404.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── branding/          ← logo, hero, placeholder
    ├── products/
    │   ├── featured/
    │   ├── new/
    │   └── sale/
    ├── gallery/
    └── icons/
```

---

## How to Download / Clone

1. Download this project as a ZIP, **or**  
2. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

3. Open the folder on your computer.  
4. You can open `index.html` in a browser to preview locally.

---

## How to Add Images

1. Place product photos in the correct folder, for example:

   - `images/products/featured/chocolate-cake.jpg`  
   - `images/products/new/lemon-tart.jpg`  
   - `images/products/sale/red-velvet.jpg`  
   - `images/gallery/gallery-1.jpg`  
   - `images/branding/hero.jpg` (homepage hero background)  
   - `images/branding/placeholder.jpg` (fallback when an image is missing)  

2. In `script.js`, set the `image` path for each product to match the file name.  
3. Recommended size: roughly 800×800 px for products, 1600×900 px for hero.  
4. Use JPG or WebP for photos. Keep file sizes reasonable (under ~300 KB each if possible).

If an image is missing, the site shows a graceful fallback and does not break.

---

## How to Add Products

Open `script.js` and find the `products` array.

Copy an existing product object and change the values:

```js
{
  id: 11,                              // unique number
  name: "Your Product Name",
  category: "Cakes",                   // or Cupcakes, Desserts, etc.
  price: 150,
  oldPrice: null,                      // or a number if on sale
  image: "images/products/featured/your-image.jpg",
  description: "Short description of the product.",
  badge: "",                           // e.g. "Popular" or leave empty
  isNew: false,                        // true = shows on New Arrivals
  isSale: false,                       // true = shows on Sale page
  featured: true                       // true = shows in Featured on home
}
```

Save the file. The product will appear automatically on the relevant pages.

---

## How to Change Prices

In `script.js`, edit the `price` (and optional `oldPrice`) of the product object.  
No other files need to be changed.

---

## How to Mark Products as NEW

Set `isNew: true` on the product in `script.js`.  
It will appear on the New Arrivals page and get a “New” badge.

To remove the NEW status later, set `isNew: false`.

---

## How to Mark Products as SALE

1. Set `isSale: true`.  
2. Set `oldPrice` to the original price.  
3. Set `price` to the sale price.  

The site calculates the discount percentage automatically.

---

## How to Change the WhatsApp Number

At the top of `script.js`:

```js
const WHATSAPP_NUMBER = "YOUR_NUMBER_HERE";
```

Replace with the bakery’s number **including country code, no + or spaces**.

Example for South Africa: `27821234567`

This single variable is used for:

- Order form  
- Contact form  
- Floating WhatsApp button  
- Product “Order via WhatsApp” button  

---

## How to Change Social Media Links

In `script.js`:

```js
const INSTAGRAM_URL = "https://www.instagram.com/glo_whips_bakery_/";
const INSTAGRAM_JARCO_URL = "https://www.instagram.com/glowhipsjarco/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61568318670413";
```

Update these if the accounts change. Also update the links in the HTML footer/social sections if needed.

---

## How to Change Contact Details

In `script.js` at the top:

```js
const PHONE_NUMBER = "YOUR_PHONE_HERE";
const EMAIL_ADDRESS = "YOUR_EMAIL_HERE";
const LOCATION = "YOUR LOCATION / SERVICE AREA HERE";
const BUSINESS_HOURS = "YOUR BUSINESS HOURS HERE";
```

Also update the placeholder text on `contact.html` so visitors see the correct details.

---

## How to Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `glo-whips-bakery`).  
2. Upload all project files (or push via Git).  
3. Go to **Settings → Pages**.  
4. Under **Source**, select the branch (usually `main`) and folder `/ (root)`.  
5. Save. After a minute or two your site will be live at:

   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

6. If you use a project site (not a user/organisation site), relative paths already work correctly.

---

## How to Update the Website

1. Edit products, text or settings in the files.  
2. Commit and push the changes to GitHub.  
3. GitHub Pages will update automatically (usually within 1–2 minutes).

---

## How to Troubleshoot Broken Images

- Check the file path in `script.js` matches the actual file name and folder.  
- Paths are case-sensitive on GitHub Pages.  
- Ensure the image was uploaded to the repository.  
- Use the browser’s Network tab (F12) to see which image URL fails.  
- A missing image will fall back to `images/branding/placeholder.jpg` if you provide one.

---

## How to Troubleshoot GitHub Pages Paths

- Always use **relative** paths (`images/...`, `style.css`, `script.js`).  
- Do not use absolute paths like `/Users/you/...` or `C:\...`.  
- If the site is in a subfolder (`username.github.io/repo-name/`), relative paths still work because they are relative to the current page.  
- Clear the browser cache or do a hard refresh if styles/scripts seem outdated.

---

## How to Connect a Custom Domain Later

1. In your domain registrar, add a CNAME record pointing to `YOUR_USERNAME.github.io`.  
2. In the GitHub repository: **Settings → Pages → Custom domain**, enter your domain.  
3. Enable “Enforce HTTPS” once the certificate is ready.  
4. Optionally add a `CNAME` file in the root of the repository with your domain name.

---

## Connecting a Real Form Service (Optional)

The contact and order forms currently open WhatsApp.  
If you later want traditional email forms, you can:

- Use a free service such as Formspree, Netlify Forms, or Basin.  
- Replace the form `action` and remove the WhatsApp JavaScript handler.  
- See the chosen service’s documentation for the exact setup.

---

## Business Settings (Single Place to Edit)

Everything important is at the top of `script.js`:

```js
// ======================================
// GLO WHIPS BAKERY — BUSINESS SETTINGS
// EDIT THESE VALUES
// ======================================
```

Change the WhatsApp number, phone, email, location, hours and social links there.

---

## Demo Products

The products currently in `script.js` are **DEMO PRODUCTS**.  
Replace them with the bakery’s real products, prices and images before going live.

---

## Licence / Credit

Built for Glo Whips Bakery.  
You are free to edit and use this project for the business.

© 2026 Glo Whips Bakery. All rights reserved.
