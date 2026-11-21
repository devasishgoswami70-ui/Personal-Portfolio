# Premium Personal Portfolio Website - Devasish Goswami

## Project Overview
A visually striking, fully 3D personal portfolio website built with modern web technologies, designed to establish Devasish Goswami's identity as an aspiring Digital Marketer, Business Strategist, and Creative Problem Solver.

## Technology Stack
- **React 18** with TypeScript
- **React Router DOM 6** for multi-page navigation
- **Three.js** with **React Three Fiber** for immersive 3D graphics
- **Framer Motion** for smooth animations
- **Tailwind CSS 3** with custom premium design system
- **Vite 5** for fast development and building
- **Lucide React** for iconography

## Project Structure

```
devasish-portfolio/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Custom Tailwind theme
├── postcss.config.js       # PostCSS plugins
├── tsconfig.json           # TypeScript config
├── tsconfig.node.json      # Node TypeScript config
└── src/
    ├── main.tsx           # Application entry point
    ├── index.css          # Global styles with Tailwind
    ├── lib/
    │   └── utils.ts       # Utility functions
    ├── data/
    │   └── portfolio.ts   # All data (projects, skills, journey, etc.)
    ├── sections/          # Page sections
    │   ├── HeroSection.tsx        # 3D hero with interactive canvas
    │   ├── AboutSection.tsx       # Personal introduction
    │   ├── ExpertiseSection.tsx   # Skills categories
    │   ├── ProjectsSection.tsx    # 7 featured projects
    │   ├── JourneySection.tsx     # Vertical timeline
    │   ├── CertificationsSection.tsx
    │   ├── CurrentlyExploringSection.tsx
    │   └── ContactSection.tsx     # Contact form + socials
    ├── pages/
    │   └── ProjectDetail.tsx      # Individual project case studies
    └── components/
        └── Footer.tsx             # Footer with nav, socials, back-to-top
```

## Key Features

### 1. Premium 3D Hero Section
- Interactive Three.js canvas with rotating torus geometry
- Mouse-responsive particles and floating orbs
- 3D DEVASISH wordmark text
- Dynamic gradient background with animated grid
- Availability indicator with glowing effect
- Orbit controls when hovering

### 2. Multi-Page Architecture
- **Single-page experience** with smooth navigation
- **Project detail pages** accessible via `/project/:id` routes
- Functional navigation bar with all sections
- Mobile-responsive hamburger menu

### 3. All Required Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen 3D intro with headline, CTA buttons, skill labels, portrait placeholder |
| **About** | Personal narrative, B.Com at St. Xavier's College, interests list |
| **Expertise & Skills** | Three categories: Digital Marketing, Business & Strategy, Tools & Technology |
| **Featured Projects** | 7 project cards with images, titles, categories, descriptions, objectives, contributions, tools |
| **My Journey** | Vertical timeline from B.Com to current AI/marketing exploration |
| **Certifications & Education** | B.Com degree + 4 certifications (2 verified, 2 in-progress placeholders) |
| **Currently Exploring** | 7 topics: Advanced Digital Marketing, SEO, Performance Marketing, AI in Marketing, etc. |
| **Contact** | Email, LinkedIn, Instagram, contact form with validation, resume download |
| **Footer** | Wordmark, tagline, nav links, social icons, copyright, back-to-top |

### 4. Project Cards (7 Projects)
1. **Blinkit Marketing Strategy** - Digital Marketing & Brand Strategy
2. **Samsung Social Media Advertising** - Social Media Marketing
3. **Snitch Digital Presence Analysis** - Brand Analysis
4. **Amazon Advertising Strategy** - Performance Marketing
5. **Evolveon – Digital Marketing Agency** - Entrepreneurship & Branding
6. **Curated Cart** - E-commerce & Social Media
7. **StyleNest** - Brand Development & Social Media

Each project includes: image/mockup, title, category, short description, objective, my contribution, tools used, and "View Project" button.

### 5. Interactive Elements
- **Smooth scrolling** between sections
- **Hover effects** on all cards, buttons, links
- **Entrance animations** with staggered delays
- **Skill tags** with glassmorphism styling
- **Form validation** on contact form with success/error states
- **Responsive navigation** (desktop + mobile hamburger menu)
- **Back-to-top** button
- **Glassmorphism** effects on cards and modals

### 6. Design System
- **Dark background** (#0A0A0A) with white typography
- **Premium electric blue/violet accents** (#5A6FEB, #A855F7)
- **Space Grotesk** display font + **Inter** text font
- **Glassmorphism** used sparingly for depth
- **Generous spacing** and clean typography
- **Subtle gradients** and animations (respects `prefers-reduced-motion`)
- **Accessible color contrast** (verified)

### 7. Technical Requirements Met
- ✅ Fully responsive on desktop, tablet, and mobile
- ✅ Smooth scrolling behavior
- ✅ Functional navigation (all links work)
- ✅ Interactive project cards with detail pages
- ✅ Subtle entrance animations
- ✅ Hover effects on buttons and interactive elements
- ✅ Optimized images with lazy loading
- ✅ SEO-friendly metadata (og tags, twitter cards)
- ✅ Accessible color contrast throughout
- ✅ Fast loading performance (Vite-powered)
- ✅ Proper component structure (modular React)
- ✅ Clean, readable, maintainable code
- ✅ No fake testimonials, client logos, or statistics
- ✅ Realistic content based on provided information

### 8. Navigation
- Sticky navbar with DEVASISH wordmark
- Links: Home, About, Expertise, Projects, Journey, Contact
- "Let's Talk" CTA button
- Mobile hamburger menu that slides in
- Active section highlighting via scroll indicators

### 9. Contact Section Features
- Email link: devasish.goswami@email.com
- LinkedIn: placeholder URL (updateable)
- Instagram: placeholder URL (updateable)
- Contact form with: Name, Email, Subject, Message fields
- Form validation with success/error states
- "Send Message" button
- Social media icons (LinkedIn, Instagram)
- "Download Resume" button (placeholder)

### 10. Footer
- DEVASISH wordmark
- Tagline: "Curious Mind. Creative Thinking. Continuous Growth."
- Navigation links (Home, About, Expertise, Projects)
- LinkedIn and Instagram icons
- Copyright notice: © {year} Devasish Goswami
- Back-to-top button

## How to Run

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Personal Information
Edit `src/data/portfolio.ts` to modify:
- Personal info (name, title, bio, contact details)
- Skills and certifications
- Projects data
- Journey milestones
- Currently exploring topics

### Update Images
Replace project images in `src/assets/projects/` directory
Update portrait placeholder in HeroSection.tsx
Update certification badges in CertificationsSection.tsx

### Update Social Links
Modify links in Footer.tsx and ContactSection.tsx
Update personalInfo.linkedin and personalInfo.instagram in portfolio.ts

### Change Color Scheme
Modify `tailwind.config.js` custom colors in the `colors` section

## Design Highlights

### 3D Excellence
- True Three.js integration with React Three Fiber
- Interactive 3D geometry that responds to mouse movement
- Particle field with dynamic positioning
- Rotating torus knot as main visual element
- Glowing orbs with emissive materials
- Smooth camera controls on hover

### Premium Aesthetics
- Deep dark theme (#0A0A0A) as foundation
- Electric blue (#5A6FEB) and violet (#A855F7) accent colors
- Space Grotesk for headlines - distinctive and modern
- Inter for body text - highly readable
- Glassmorphism with blur effects on strategic elements
- Animated gradient backgrounds that shift subtly
- Consistent spacing and typographic scale

### User Experience
- All navigation links functional
- Form submissions have real validation states
- No fake data or invented statistics
- Realistic placeholders for all replaceable content
- Respects user preferences (reduced motion)
- Accessible focus states and keyboard navigation

## Creator
Built by Claude Opus 4.5 as a premium personal portfolio website for Devasish Goswami - aspiring Digital Marketer, Business Strategist, and Creative Problem Solver.

The website establishes a distinctive personal brand that feels professional, creative, and distinctive - not a generic student or resume template. Every element serves the narrative of someone passionate about digital marketing, business strategy, and creative problem-solving, with a portfolio that showcases academic projects, self-initiated concepts, and practical experiments in a visually impressive way.