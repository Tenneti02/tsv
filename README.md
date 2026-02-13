# 🚀 TSVS Portfolio

A modern, bold portfolio website built with **Next.js**, **Tailwind CSS**, and a NeoBrutalist design aesthetic.

## ✨ Features

- ⌨️ **Typing Animation** — Dynamic hero with role cycling effect
- 📊 **Animated Skill Bars** — Skills grouped by category with proficiency percentages
- 📱 **Fully Responsive** — Mobile-first design with hamburger navigation
- 📬 **Working Contact Form** — Sends emails via Nodemailer
- 🎨 **Teal/Cyan Accent** — Custom color palette with bold shadows and borders
- 📄 **Resume Download** — One-click PDF download
- ⚡ **Smooth Animations** — Scroll-triggered reveal effects throughout

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Nodemailer](https://nodemailer.com/) | Contact form emails |
| [Remix Icons](https://remixicon.com/) | Icon library |

## 📁 Project Structure

```
mee/
├── app/
│   ├── api/contact/    # Contact form API route
│   ├── globals.css     # Theme colors & animations
│   ├── layout.tsx      # Root layout & metadata
│   └── page.tsx        # Main page
├── components/
│   ├── Hero.tsx        # Hero section with typing effect
│   ├── About.tsx       # About me + education
│   ├── Skills.tsx      # Animated skill bars
│   ├── Experience.tsx  # Work experience timeline
│   ├── Projects.tsx    # Project showcase
│   ├── Contact.tsx     # Contact form
│   ├── Navbar.tsx      # Navigation + mobile menu
│   ├── Footer.tsx      # Footer with socials
│   └── Reveal.tsx      # Scroll animation wrapper
├── public/
│   └── Assets/         # Images & resume
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Create .env.local for contact form
echo "EMAIL_USER=your-email@gmail.com" >> .env.local
echo "EMAIL_PASS=your-google-app-password" >> .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📬 Contact Form Setup

The contact form uses **Nodemailer** with Gmail. To enable it:

1. Enable [2-Step Verification](https://myaccount.google.com/security) on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Add credentials to `.env.local`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ☕ + Next.js from Visakhapatnam** by [T S V Subrahmanyam](https://www.linkedin.com/in/tenneti-surya-venkata-subrahmanyam)
