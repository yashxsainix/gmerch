# GMerch

GMerch is a mobile-first, pastel-themed static pet merch website built with vanilla HTML, Tailwind CSS via CDN, custom CSS, and vanilla JavaScript. It is designed to run perfectly on GitHub Pages with no build step.

## Files

```text
.
├── index.html
├── shop.html
├── about.html
├── gallery.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── three-hero.js
├── assets/
│   └── gallery/
└── README.md
```

## Features

- Sticky glassmorphism navigation with mobile drawer
- Brand ambassador gallery page with real pet photos and stories
- Shared cart modal with localStorage persistence
- Real Three.js hero canvas on the homepage
- GSAP motion and Vanilla Tilt hover effects
- Dog/cat product tabs, filters, and masonry product layout
- Blog article modal
- Responsive layout with accessible labels and keyboard-friendly buttons
- Zero build step and GitHub Pages friendly
- Mobile-safe homepage fallback when 3D is not ideal for the device

## Quick start

1. Create a new GitHub repository.
2. Add the files exactly as shown in the project structure above.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, set:
   - **Source** = `Deploy from a branch`
   - **Branch** = `main`
   - **Folder** = `/root`
6. Save the settings.
7. GitHub Pages will publish the site at:
   - `https://your-username.github.io/your-repo-name/`

## Using a custom domain like gmerch.com

1. In **Settings → Pages**, add your custom domain.
2. Create a `CNAME` file in the repo root containing:

```text
gmerch.com
```

3. In your DNS provider, point the domain to GitHub Pages using the standard GitHub Pages DNS records.
4. Enable HTTPS in GitHub Pages once the domain is connected.

## Local preview

You can open `index.html` directly in a browser, but a local server is better for testing.

### Python

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

### VS Code Live Server

Right-click `index.html` and choose **Open with Live Server**.

## Notes

- Tailwind is loaded through the Play CDN, so there is no build pipeline.
- The cart uses `localStorage`, so items stay in the browser until cleared.
- Replace image URLs any time with your own pet photos or licensed merch photography.
- The fake checkout button intentionally shows a playful “coming soon” message.

## CDN dependencies

The site uses these browser-loaded libraries:

- Tailwind CSS Play CDN
- GSAP
- Vanilla Tilt
- canvas-confetti
- Three.js r134
- Google Fonts: Fredoka and Poppins

## Recommended next enhancements

- Add a real checkout flow with Stripe or Shopify Buy Buttons
- Move product data into a separate JSON file if the catalog grows
- Add a dedicated blog page or CMS-backed articles
- Add a newsletter form connected to a serverless endpoint

## License

Use and customize freely for personal or demo projects. Review image licensing if you swap in commercial photography.
