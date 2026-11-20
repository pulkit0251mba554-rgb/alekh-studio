# Alekh Studio — Custom Art & Online Ordering Web App

A responsive front-end web application concept for Alekh Studio, a handmade art and personalised commission venture.

## Features
- Responsive homepage and brand presentation
- Artwork gallery with category filters
- Product enquiry buttons that prefill the commission form
- Custom commission form with validation
- Enquiry summary generation and copy-to-clipboard action
- Mobile navigation
- About, process and contact sections

## Run locally
No build tools or dependencies are required.

1. Download and extract the project.
2. Open `index.html` in a browser.

For a local development server, you can use VS Code Live Server or run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy with Vercel
1. Create a new **public** GitHub repository named `alekh-studio`.
2. Upload `index.html`, `styles.css`, `script.js`, and this README to the repository root.
3. Open Vercel and choose **Add New → Project**.
4. Import the `alekh-studio` GitHub repository.
5. Keep the default settings; this is a static site with no build command and no output directory.
6. Deploy. Copy the generated public URL for the assignment.

## Important project scope
This version is a functional front-end prototype. It does not process payments, store orders in a database, or send enquiries to a business inbox. The enquiry form creates a summary in the browser that the customer can copy. Before using the site for real customer orders, connect a backend or a form service, add verified contact details, and replace sample gallery photos with the studio's own artwork.

## Customisation
- Update product names and starting prices in `index.html`.
- Replace the sample image URLs with photographs of original artwork.
- Add verified Instagram, WhatsApp, email and delivery details before public business use.
