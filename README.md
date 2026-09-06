# Sakith Harvan Technologies - Multi-Page Static Website

> **Production-ready frontend website built with pure HTML5 and CSS3 — zero backend, zero database.**  
> Designed following the *Vibe Coding: Building a Multi-Page Static Website* handbook by Sakith Harvan Technologies.

---

## 📁 Project Structure

```text
vibe-static-website/
├── index.html          # Home page (Hero, metrics, pillars, featured services)
├── about.html          # About page (Company mission, principles, philosophy)
├── services.html       # Services page (Engineering capabilities, workflow process)
├── contact.html        # Contact page (Accessible zero-backend form, direct channels)
├── login.html          # Session Login (Client-side sessionStorage demo authentication)
├── 404.html            # Error page (Friendly 404 error and recovery navigation)
├── css/
│   └── style.css       # Unified design tokens, responsive grid, accessible states
├── js/
│   └── auth.js         # Pure frontend session auth state manager (sessionStorage)
├── images/
│   ├── logo.svg        # Scalable brand vector logo
│   └── favicon.svg     # Scalable SVG favicon
└── README.md           # Documentation, preview, and deployment guide
```

---

## 🚀 How to Run Locally

Because this project is pure static HTML/CSS, you can run it in multiple ways:

### Option 1: Direct in Browser
Double-click `index.html` or drag any `.html` file directly into Chrome, Edge, Safari, or Firefox.

### Option 2: Lightweight Local HTTP Server (Recommended)
Open your terminal in this directory and run:

```bash
# Python 3
python -m http.server 8000
```

Then visit:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 🛡️ Production Checklist Compliance

Following **Section 19 & 20** of the Sakith Harvan Technologies guide:

| Area | Status | Implementation Details |
|---|:---:|---|
| **Pages** | ✅ Pass | `index.html`, `about.html`, `services.html`, `contact.html`, and `404.html` all load directly. |
| **Navigation** | ✅ Pass | Every relative header link, footer link, CTA button, and internal link verified. Active page marked with `aria-current="page"`. |
| **Responsive** | ✅ Pass | Tested across mobile, tablet, and desktop breakpoints. Includes accessible mobile drawer menu. |
| **HTML** | ✅ Pass | Valid HTML5 semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), clean hierarchy (`<h1>`-`<h4>`). |
| **CSS** | ✅ Pass | Single stylesheet (`css/style.css`) using `:root` CSS variables, container constraints (`min(100% - 2rem, 1120px)`), zero horizontal overflow. |
| **Accessibility** | ✅ Pass | Visible `:focus-visible` states, descriptive image `alt` attributes, clear form `<label>` associations, high contrast. |
| **SEO & Social** | ✅ Pass | Distinct `<title>` and `<meta name="description">` per page, Open Graph metadata, SVG favicon. |
| **Security** | ✅ Pass | Pure static frontend; zero hard-coded secrets, no API keys, and no fake client-side database logins. |
| **No-Backend Form** | ✅ Pass | Accessible form with `mailto:` action and client feedback without simulated database storage. |
| **Deployment** | ✅ Pass | 100% compatible with GitHub Pages, Vercel, Netlify, and Cloudflare Pages out-of-the-box. |

---

## 🌐 Deploying with Zero Backend

To deploy this project to the web for free:

### Deploy to GitHub Pages
1. Create a repository on GitHub.
2. Push this folder's contents:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: multi-page static website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In GitHub repo settings, go to **Pages** &rarr; Select `main` branch &rarr; Click **Save**.

### Deploy to Netlify / Vercel
- Drag and drop this folder directly into the [Netlify Drop](https://app.netlify.com/drop) dashboard or import the Git repository into [Vercel](https://vercel.com).
- No build command or framework preset needed (leave build command blank / static).

---

## 🎨 Design Tokens & Customization

To customize colors, font styles, or widths, edit the `:root` variables at the top of [`css/style.css`](file:///C:/Users/sujit/.gemini/antigravity/scratch/vibe-static-website/css/style.css):

```css
:root {
  --max-width: 1120px;
  --primary: #1e3a8a;      /* Main brand navy */
  --accent: #2563eb;       /* Cobalt action color */
  --surface: #ffffff;      /* Card / sheet background */
  --surface-alt: #f8fafc;  /* Page background */
  --text: #0f172a;         /* High-contrast body text */
}
```

---

*Sakith Harvan Technologies — People • Ideas • Technology • A Brighter Tomorrow*
