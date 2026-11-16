# Assignment 1: Personal Portfolio Website

A responsive, high-performance personal portfolio built exclusively with **pure semantic HTML5** and **modern CSS3 (Flexbox & CSS Grid)** without relying on external frameworks, CDN libraries, or React.

## 👤 Developer Profile
- **Name & Role:** Prahadeesh Kalimuthu — Information Technology Student & Software Developer
- **Higher Education:** Sri Krishna College of Engineering and Technology (SKCET), Coimbatore (B.Tech IT, 2025–Present, 8.95 CGPA)
- **Schooling:** SRB AKD Dharmaraja Boys' Higher Secondary School, Rajapalayam (2018–2025)
  - 1st Rank Holder & School First for 10th, 11th, and 12th standards
  - School Pupil Leader (SPL), Class Representative, Discipline Committee Member
- **Phone:** +91 8778197031
- **Email:** prahadeeshkalimuthu@gmail.com
- **Handles:**
  - GitHub: [Praha-Razr](https://github.com/Praha-Razr)
  - LinkedIn: [prahadeesh-kalimuthu](https://www.linkedin.com/in/prahadeesh-kalimuthu-9b3b6a353/)
  - LeetCode: [Praha-Razr](https://leetcode.com/u/Praha-Razr)
  - HackerRank: [Praha_Razr](https://hackerrank.com/profile/Praha_Razr)
  - Instagram (Photography): [@itz_razr_clicks](https://instagram.com/itz_razr_clicks)

---

## 🚀 Features & Architecture

### 1. Semantic HTML5 Structure
- Structured hierarchy utilizing `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, and `<footer>`.
- Complete ARIA attributes (`aria-label`, `aria-expanded`, `role="alert"`, `aria-live="polite"`).
- Inline scalable vector graphics (SVG) for lightning-fast loads and zero CDN dependencies.

### 2. Modern CSS3 Layouts
- **CSS Grid:**
  - Featured Projects Showcase (`grid-template-columns: repeat(2, 1fr)`).
  - Technical Skills categorizations.
  - Hackathons track record cards.
  - Contact details and interactive form columns.
- **CSS Flexbox:**
  - Sticky blurred header with brand logo and navigation menu.
  - Hero visual stage with enlarged circular photo (250px), Alexa-inspired concentric acoustic vibration ripples, rotating chromatic glow ring, live audio equalizer frequency bars, and floating smart chips.
  - Hero statistics counter badges and interactive action buttons.
  - Timeline items and action buttons.
- **Design Tokens & Theme:**
  - CSS Custom Properties (`:root` variables) for deep dark theme, accents, and spacing.
  - Glassmorphic navigation bar with `backdrop-filter`.
  - Fully responsive breakpoints for Desktop, Tablet, and Mobile devices.

### 3. Continuous Learning & Certifications (Coursera)
- **40 Verified Professional Credentials** completed across 4 thematic domains:
  1. **AI Agents & Autonomous Systems (11):** Agent fundamentals, tool usage, memory/state, production deployment, Gemini Enterprise agents.
  2. **Generative AI & Prompt Engineering (10):** Prompt engineering essentials, art of prompting, human-centered AI, responsible AI.
  3. **AI Development & Workflows (9):** LLM-empowered Python, AI app building, deployment, research, and communication.
  4. **Python, Data Analytics & Databases (10):** Hands-on Python for AI, data analytics foundations, RDBMS, SQL, and Copilot.

### 4. Featured Projects
1. **Civic-Connect:** Citizen grievance logging and redressal platform with live GPS geotagging and administrative workflows. ([GitHub](https://github.com/Praha-Razr/Civic-Connect))
2. **Sahaaya Grid:** Real-time emergency reporting and volunteer micro-dispatch web platform for high-density crowds and festivals, featuring zero-install QR scanning (<5s), Server-Sent Events (SSE), and spatiotemporal clustering. ([GitHub](https://github.com/Praha-Razr/sahaaya-grid) | [Live Demo](https://sahaaya-grid.onrender.com))
3. **Waste Guard AI:** Computer-vision-powered smart waste classification and community recycling rewards. ([GitHub](https://github.com/Praha-Razr/WasteGuardAl))
4. **UniServ:** Cross-platform on-demand service assurance platform (React Native Expo & React 19) built on the Multi-State Cooperative Societies framework, featuring 80/10/6/4 fair wage model, integrated PayPal escrow payments, and Dual-OTP verification. ([GitHub](https://github.com/Praha-Razr/UniServ) | [Live Demo](https://uni-serv.vercel.app/))

### 4. Hackathons, Workshops & Research
- **Flipkart GRID 8.0:** National Semi-Finalist (Intelligent Logistics & Robotics)
- **Smart India Hackathon 2026 (Internal):** Team Lead for UniServ (PS 26089, Pre-Screening Cleared)
- **Samsung Solve for Tomorrow 2026:** Design Thinking & Social Innovation (Samsung India)
- **PayPal AI Hackathon:** Cross-Border Escrow & Autonomous AI Settlement (PayPal APIs & LLM Agent)
- **HACK-KERALA at TECHAVAM 2026:** Team Lead for Sahaaya Grid (Emergency Crowd Safety)
- **Adobe University Hackathon:** Team Lead (Competitive Coding & Problem Solving)
- **CodeHeist:** Team Lead (Technical Quiz, Creative Programming Puzzles & Coding Challenges)
- **Vibe Coding Workshop 2026:** Hands-On AI Development (StartupTN & Google for Developers, NICHE)
- **CRYPTERA 2026:** Technical Research Paper Presentation at Coimbatore Institute of Technology (CIT)

### 5. Interactive Contact Form & Direct Email Routing
- Client-side validation for Name, valid Email syntax, Subject, and Message length (>=10 chars).
- Direct email routing to `prahadeeshkalimuthu@gmail.com` via FormSubmit with reply-to binding.
- Dynamic loading spinner feedback and confirmation message.
- Automatic graceful fallback to native `mailto:` client if offline or blocked by browser extensions.

### 6. Tactile Pop-Up & Text Animation Suite
- **Scroll-Triggered Tactile Pop-Ups:** All cards, section headers, timeline events, and contact panels smoothly pop into view as you scroll down (`IntersectionObserver` with spring-like `cubic-bezier(0.34, 1.25, 0.64, 1)` and automatic grid stagger).
- **Typewriter Text Animation:** Hero subtitle dynamically cycles between key professional identities with a smooth blinking cursor.
- **Name Shimmer Flow:** Fluid multi-stop chromatic gradient sweep across the hero name.
- **Counter Rollup:** Numerical rollup animation for hero metrics (8.95 CGPA, 4+ Projects, 7+ Hackathons, 40+ Certifications) using cubic ease-out.
- **Accessible:** Native `@media (prefers-reduced-motion: reduce)` support.

---

## 📂 File Structure
```
Assignment-1/
├── index.html      # Semantic HTML5 document
├── style.css       # Pure modern CSS3 (Variables, Flexbox, Grid)
├── script.js       # Lightweight vanilla JS for mobile menu & form
└── README.md       # Project documentation
```

## 🌐 How to View
Open `index.html` in any modern web browser or run a simple local HTTP server:
```bash
npx serve .
# or
python -m http.server 3000
```
