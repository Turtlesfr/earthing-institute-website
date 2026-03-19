# Earthing Institute Website Audit
**URL:** https://earthinginstitute.net/
**Date:** March 19, 2026
**Purpose:** Complete site audit for redesign

---

## 1. PLATFORM & TECH STACK

- **CMS:** WordPress
- **Theme:** Custom theme (possibly Astra or GeneratePress based, with Elementor-style layout)
- **Developer Credit:** "Powered by Sara John" (footer)
- **Logo Format:** SVG (`/wp-content/uploads/2021/01/Earthing-Institute-Logo.svg`)
- **SSL:** Yes (HTTPS)
- **Course Platform:** LearnDash or similar LMS plugin (student dashboard, course progress tracking)
- **Donations:** PayPal buttons (not a modern donation platform like Stripe/Donorbox)
- **Email:** Mailing list signup (first name + email, "Subscribe" button) -- likely Mailchimp or similar
- **Search:** Built-in WordPress search

---

## 2. BRANDING

### Logo
- SVG format, circular green emblem with text "Earthing Institute"
- The emblem features a dark green circle with what appears to be a tree/earth motif
- Dimensions: 1177x500px (wide, landscape format)
- Location: Top-left of header

### Color Palette
| Role | Color | Hex (approx) |
|------|-------|---------------|
| Primary Green (headings, links, CTAs) | `rgb(0, 117, 39)` | `#007527` |
| Secondary Green (H1 headings) | `rgb(0, 117, 0)` | `#007500` |
| Background (body) | `rgb(244, 241, 232)` | `#F4F1E8` (warm cream/parchment) |
| Text (body) | `rgb(0, 0, 0)` | `#000000` |
| Text (secondary) | `rgb(30, 41, 59)` | `#1E293B` (dark slate) |
| Text (tertiary) | `rgb(51, 65, 85)` | `#334155` (slate) |
| White | `rgb(255, 255, 255)` | `#FFFFFF` |
| Dark overlay | `rgba(25, 25, 25, 0.96)` | Near-black |
| Link blue (rare) | `rgb(4, 92, 180)` | `#045CB4` |

### Typography
| Element | Font Family | Size | Weight |
|---------|------------|------|--------|
| Body text | Montserrat, sans-serif | 20px | 500 (medium) |
| H1 headings | Gelasio, sans-serif | 40px | 400 (regular) |
| H2 headings | Gelasio, sans-serif | 40px | 400 |
| H3 headings | Georgia, Times, serif | 24px | 400 |
| Navigation | Montserrat, sans-serif | ~15px | 500 |
| Other fonts present | Roboto, Open Sans | - | - |

### Imagery Style
- **Hero image:** Organic blob/leaf shape containing nature photography (bare feet on grass)
- **Stock photos:** Sourced from Unsplash (credited in footer): Kateryna Hliznitsova, Lucas Sankey, Felipe Giacometti, Nick Page
- **Style:** Natural, barefoot-in-nature scenes. Grass, earth, feet touching ground
- **Board photos:** Professional headshots of board members and advisors
- **Book covers:** Physical product shots (Earthing book)
- **Overall:** Clean, earthy, nature-focused with organic/rounded shapes

---

## 3. FULL SITE STRUCTURE (NAVIGATION MAP)

### Top Navigation Bar
```
[Logo] Home | Earthing Basics v | Success Stories v | Media v | Courses v | Blog | Research | About Us v | [Donate] [Search]
```

### Complete Page Hierarchy

#### HOME
- `/` - Homepage

#### EARTHING BASICS (dropdown)
- `/what-is-earthing/` - What is Earthing
- `/getting-started/` - Getting Started
- `/medical-and-medication-considerations/` - Medical and Medication Considerations
- `/brief-history-of-earthing/` - A Brief (and Incomplete) History of Earthing
- `/advisories/` - Advisories
- `/faqs/` - FAQs (Basics, Getting Started, Health, Products, Connecting, EMFs)

#### SUCCESS STORIES (dropdown)
- `/feedback-from-health-professionals/` - Feedback from Health Professionals
- `/an-a-to-z-of-testimonials-by-condition/` - Testimonials of Earthing Benefits (A to Z)
  - `/learn-more-about-stress-relief/` - Stress relief
  - `/reduced-pain/` - Pain/Inflammation reduction
  - `/lookfeelyounger/` - Look and feel more vibrant
  - `/better-sleep/` - Better sleep
  - `/speeds-healing-and-recovery/` - Speeds Healing and Recovery
  - `/sports-benefits/` - Earthing boosts performance, recovery, and healing
  - `/pet-health/` - Earthing is for Pets, too
  - `/aids-bodyworkers-2/` - Relief for bodyworkers

#### MEDIA (dropdown)
- `/interviews/` - Interviews
- `/articles/` - Articles
- `/grounding-movies/` - Movies
- `/video-what-is-earthing/` - Educational Videos
- `/earthing-video-testimonials/` - Video Testimonials
- `/sports-benefits/` - Sports Recovery Videos

#### COURSES (dropdown)
- `/courses/` - Certification Courses
- `/student-dashboard/` - Student Dashboard
- `/student-dashboard/my-courses/` - View My Courses
- `/student-dashboard/` - Log In

#### BLOG
- `/blog/` - Blog listing page

#### RESEARCH
- `/research/` - Research page (single comprehensive page)

#### ABOUT US (dropdown)
- `/earthing-institute-mission/` - Our Vision & Mission
- `/board-of-directors/` - Earthing Institute Board of Directors
- `/contact-us/` - Contact Us
- `/joinourmailinglist/` - Join our Mailing List

### Footer Navigation
- Home
- Contact Us
- About Us (links to Board of Directors)
- Courses
- Blog
- Getting Started
- Join Our Mailing List

### Additional Pages (linked from content, not in main nav)
- `/donate/` - Donate page
- `/thank-you-to-our-supporters/` - Supporter recognition
- `/new-to-earthing-read-this/` - Beginner article
- 100+ individual testimonial condition pages (A-Z)
- Individual blog posts

---

## 4. HOMEPAGE CONTENT STRUCTURE

### Section 1: Hero
- **Heading (H1):** "Feel better, fast."
- **Subtext:** "Reconnect and experience the healing benefits of Mother Earth through earthing."
- **CTA:** "Learn More" -> links to Getting Started page
- **Visual:** Organic blob shape with photo of bare feet on grass

### Section 2: What is Earthing?
- **Headings (H1):** "What is Earthing?" + "What can it do for you?"
- **Body text:** Long paragraph explaining earthing/grounding concept
- **CTA:** "Learn More" -> What is Earthing page

### Section 3: Courses Promo
- **Heading (H1):** "Become Earthing Certified"
- **Body text:** Short promo for certification courses
- **CTA:** "View Certification Courses" -> Courses page

### Section 4: Benefits of Earthing
- **Heading (H1):** "Benefits of Earthing"
- Three benefit cards:
  1. **Decreased Pain** (H3) + description + "Read More"
  2. **Improved Sleep** (H3) + description + "Read More"
  3. **Faster Healing** (H3) + description + "Read More"

### Section 5: Supporters
- **Heading (H1):** "Thank you to our Supporters!"
- **Body text:** Non-profit acknowledgment
- **CTA:** "View our Donors"

### Section 6: Learn More About Earthing
- **Heading (H2):** "Learn More About Earthing"
- **The Earthing Movie** (H3) + "Watch the Full Movie" (YouTube link)
- **The Earthing Book** (H3) + book cover image + "Get the Book" (Amazon link)

### Section 7: Featured Posts
- **Heading (H2):** "Featured Posts"
- 3 blog post cards with titles and dates:
  1. Dr. Park's Barefoot Lecture 24 (Oct 20, 2025)
  2. Beware: Amazon Seller Claiming to be The Earthing Institute (Sep 20, 2023)
  3. Dr. Park Proposes Barefoot Walking to be Added to WHO's Global Action on Physical Activity (Jul 23, 2023)
- **CTA:** "Read All Posts"

### Section 8: Mailing List
- **Heading (H2):** "Join our Mailing List"
- First name field + Email field + Subscribe button

### Footer
- Image credits (Unsplash photographers)
- Footer navigation links
- "Copyright 2026 Earthing Institute | Powered by Sara John"

---

## 5. MISSION STATEMENT

**Page:** `/earthing-institute-mission/`

**Current Mission Statement (from the mission page):**
> "The Earthing Institute is a nonprofit research and education organization focused on understanding how direct physical connection with the Earth influences inflammation, nervous system regulation, and human health. Chronic inflammation underlies many of today's most costly and debilitating conditions. Over more than two decades, peer-reviewed research has explored grounding as a low-cost, non-invasive intervention with measurable physiological effects. The Institute exists to advance rigorous research, curate credible scientific findings, and responsibly educate the public and health professionals worldwide."

**From the Donate page (supplemental mission language):**
> "Our mission at The Earthing Institute is to disseminate this vital knowledge to as many people as we can throughout the world. We also want to further research regarding the health benefits of earthing, and to have our website serve as a repository of all information related to earthing."
>
> "We envision the day when every human being (and pet) on this planet will be earthed throughout their daily life. When that day comes, it will be common knowledge that earthing is as important for health as good nutrition, sleep, exercise, and a positive mental attitude."

**President:** Gaetan Chevalier, Ph.D. (Director of the Earthing Institute since 2009)

---

## 6. FUNDRAISING & DONATION ELEMENTS

### Donate Button
- **Location:** Top-right of navigation bar (green text, no background fill)
- **Link target:** Opens a donation interface (not a separate page in the nav)
- **Also linked from:** Research page, Supporters page

### Donate Page (`/donate/`)
- **Title:** "Donate To The Earthing Institute"
- **Payment:** PayPal buttons only (old-style PayPal "Donate" buttons with CC logos)
- **Tax status:** 501(c)(3) non-profit, donations are tax-deductible in the US
- **Goal:** "We are proud to announce that we have hit our goal of $10,000"

### Donation Tiers
| Level | Amount | Benefits |
|-------|--------|----------|
| Level 1 | $55 | Digital Brief Guide to Earthing, newsletter, thank you letter |
| Level 2 | $99 | Signed copy of Earthing book + Level 1 benefits |
| Bronze | $250 | Website recognition, virtual Meet & Greet with Dr. Chevalier & Clint Ober, Universal Mat Kit + Level 2 benefits |
| Silver | $1,000 | Website recognition, Earthing Essentials Kit + Bronze benefits |
| Gold | $5,000 | Whitepaper sponsorship, 2x Earthing Essentials Kits + Silver benefits |
| Platinum | $20,000 | Pilot/Full study sponsorship, publication recognition + Gold benefits |

### Impact Stats (on Donate page)
- 5.9 Million+ views of The Earthing Movie
- 30+ publications, many in peer-reviewed journals
- 17+ languages for the Earthing book
- 20+ years of grounding research

### Supporters Page (`/thank-you-to-our-supporters/`)
- Lists donor names by tier
- **Bronze ($250):** 7 named donors
- **Silver ($1,000):** 1 donor (Earthing Revolution)
- **Gold ($5,000):** 1 donor (Wags 2 Whiskers)
- **Platinum ($20,000):** None listed
- Includes PayPal donate button at bottom

### Other fundraising mentions
- Homepage section: "Thank you to our Supporters!" with link to supporter page
- Research page: "Consider supporting our mission... make a tax-deductible donation today" with "Donate Today" link

---

## 7. RESEARCH CONTENT & ORGANIZATION

**Page:** `/research/`

### Structure (Table of Contents)
1. Earthing studies
2. Earthing review articles
3. Earthing commentaries
4. Misinformation about Earthing
5. Earthing Institute instructional papers

### Earthing Studies (chronological, newest first)
Total: ~35 studies spanning 2000-2025

**Recent highlights:**
- Earthing effects on mitochondrial function: ATP production and ROS generation (2025)
- Randomized, double-blind, placebo-controlled study on sleep quality with Earthing mat (2025)
- Earthing as Lifestyle Medicine for Chronic Diabetic Wounds (2024)
- Prevention and Treatment of COVID-19 by Earthing (2023)
- Effect of Earthing Mat on Stress-Induced Anxiety in Rats (2023)
- Grounding as Universal Anti-Inflammatory Remedy (2022)
- Effects of Grounding on Meditation Quality (2022)
- Grounding Improves Sleep in Mild Alzheimer's Disease (2022)
- Grounding on Bodyworkers' Pain and Quality of Life (2019)
- Grounding Patients with Hypertension (2018)
- Electrical Grounding Improves Vagal Tone in Preterm Infants (2017)
- Blood Viscosity studies (2013, 2015)
- Cortisol/Sleep study (2004) -- the foundational study

**Earliest:** Initial Grounding Experimentation by Clint Ober, 2000

### Review Articles (~13)
- Spans 2011-2023
- Key topics: Anti-inflammatory remedy, lack of grounding and illness, electromagnetic hygiene, lifestyle medicine strategies

### Commentaries (~15)
- Various authors including Oschman, Chevalier, Sinatra
- Topics: acupressure, coronavirus, pain relief, women's health, free radicals, aging, historical perspectives

### Misinformation Section (5 items)
- Beware of Earthing Misinformation
- Earthing and Ground Currents
- Grounding Does Not Turn You Into an Antenna for EMFs
- Earthing and "dirty electricity"
- PureGround EMF Filtering Cord critique

### Instructional Papers (5 items)
- How to Measure Effect of Earthing on Body Voltage
- Indoor Grounding Safety
- Brief Guide to Earthing
- Earthing Plant Experiment for School
- Basic Physics of Earthing

### Format
- Studies listed as linked titles with year
- Links go to PDF downloads or external journal pages (PubMed, ScienceDirect, Dove Press, etc.)
- No abstracts or summaries on the page itself -- just titles and links
- Intro paragraph explains research context
- Donation CTA embedded in intro text

---

## 8. COURSES

**Page:** `/courses/`

### Available Courses (9 total, 3 levels x 3 languages)

**English:**
- Level 1 Earthing Certification (1 hour, 9 lessons)
- Level 2 Earthing Certificate (1 hour, 12 lessons)
- Level 3 Earthing Certificate (1 hour, 6 lessons)

**Spanish (Espanol):**
- Nivel 1 Certificacion Earthing (1 hour, 9 lessons)
- Nivel 2 Certificacion Earthing (1 hour, 12 lessons)
- Nivel 3 Certificacion Earthing (1 hour, 6 lessons)

**French (Francais):**
- Certificat de mise a la terre niveau 1 (1 hour, 9 lessons)
- Certificat de mise a la terre niveau 2 (1 hour, 12 lessons)
- Certificat de mise a la terre niveau 3 (1 hour, 6 lessons)

### Course Overview Pages
- English, Spanish, and French overview pages linked from the courses page
- Student dashboard for enrolled students
- LMS with progress tracking

---

## 9. BLOG CONTENT

**Page:** `/blog/`

### Post Frequency
- Very sporadic posting: latest post October 2025, previous posts in 2024, 2023
- Archive dates range from January 2015 to October 2025
- ~20 total posts visible

### Blog Categories
- Advisories (6)
- Conditions: A-Z (multiple categories by letter, each with 1-14 posts)
- Earthing Stories (2)
- Feedback from Health Professionals (15)
- Medical and Medication Considerations (1)
- News (20)
- Research (8)
- Misinformation (3)
- Testimonials (1)
- Uncategorized (8)

### Blog Sidebar
- Search
- Filter by Date (dropdown)
- Filter by Category (dropdown)
- Recent Posts list

### Recent Post Topics
- Dr. Park's Barefoot Lectures (Korean barefoot walking movement)
- Grounded Yoga events
- Media appearances (CBS News Baltimore)
- Amazon seller warning
- WHO barefoot walking proposal
- Community stories (Namibia, personal stories)
- Misinformation rebuttals

---

## 10. KEY PEOPLE

### Board of Directors
- **Gaetan Chevalier, Ph.D.** -- President. 45-year career in engineering physics, biophysics, electrophysiology. Director since 2009.
- **Dr. Katerina Brzovic** -- Treasurer. Chilean veterinarian, acupuncturist, founder of Contacto Tierra (Latin America/Spain earthing education).
- **Dr. Richard Kotz** -- CFO. Retired FDA statistician (25 years), reviewed clinical trials for medical devices. FDA Lifetime Achievement Award 2016.

### Scientific Advisors
- James Oschman, Ph.D. -- Nature's Own Research Association
- Tracy Latz, M.D., M.S. -- Integrative psychiatrist
- Pawel Sokal, M.D., Ph.D. -- Neurosurgeon (Poland), earthing research pioneer
- Tina Michaud-Gray, RN, LMT -- Pain/soft tissue specialist
- Charles Munier, D.M.D. -- Retired dentist, TMJ treatment with earthing
- Cimone Kamei, D.Ac. -- Acupuncturist (Hawaii)

### Sports & Performance Advisor
- Jeffrey Spencer, M.A., D.C. -- Former Olympic cyclist, Tour de France team chiropractor

### In Memoriam
- Martin Zucker, author (1937-2020) -- Co-author of the Earthing book
- Stephen Sinatra, M.D. (1946-2022) -- Integrative cardiologist, discovered earthing as anti-inflammatory and blood thinner
- Karol Sokal, M.D., Ph.D. (1944-2023) -- Pioneer of earthing research since 1989

### Key External Figure
- **Clint Ober** -- Earthing pioneer, cable TV industry veteran. Not on the board but central to the movement. Author of the Earthing book. Started investigating grounding in 1998.

---

## 11. TESTIMONIALS CONTENT

### A-Z Testimonial Index (`/an-a-to-z-of-testimonials-by-condition/`)
- Comprehensive alphabetical listing of conditions with testimonials
- Links to 100+ individual condition pages
- Each letter has its own heading section
- Conditions range from Abscess to Weight Loss
- Cross-references between related conditions
- Covers: pain conditions, autoimmune disorders, sleep issues, mental health, skin conditions, cardiovascular, neurological, pets, sports recovery, and more

### Health Professional Feedback
- Separate page at `/feedback-from-health-professionals/`
- 15 entries in the category

### Benefit-Specific Pages
- Stress relief
- Pain/Inflammation reduction
- Look and feel more vibrant
- Better sleep
- Speeds Healing and Recovery
- Sports benefits
- Pet health
- Relief for bodyworkers

---

## 12. FAQs STRUCTURE

**Page:** `/faqs/` (very large page)

### FAQ Categories (6 sections, ~55+ questions total)
1. **Earthing Basics** (~13 questions) -- What is earthing, shoes, water, floor types
2. **Getting Started** (~12 questions) -- Installation, initial sensations, sleep, socks
3. **Earthing and Health** (~10 questions) -- How it works, pain, pacemakers, stroke, blood pressure
4. **Earthing Products** (~7 questions) -- Where to buy, safety, pets, electricity
5. **Connecting & Conductivity** (~15 questions) -- Home/office/motorhome/boat setups, outlets, international use, ground rods
6. **Electromagnetic (EMF) Related** (~7 questions) -- EMFs, ground currents, dirty electricity, 5G, electro-sensitivity

---

## 13. OVERALL VIBE & DESIGN ASSESSMENT

### Visual Tone
- **Earthy and warm** -- cream/parchment background (`#F4F1E8`), green accents
- **Nature-focused** -- barefoot imagery, grass, organic shapes
- **Clean but dated** -- well-organized but feels like a 2020-2021 WordPress theme
- **Text-heavy** -- many pages are long-form text with minimal visual breaks
- **Minimal multimedia** -- few embedded videos or interactive elements on most pages

### Content Tone
- **Blend of scientific and accessible** -- references peer-reviewed studies but uses simple language
- **Health/wellness focused** -- positioned as both scientific research and practical wellness advice
- **Advocacy oriented** -- strong belief in earthing's benefits, sometimes bordering on claims
- **Non-commercial** -- as a nonprofit, they reference products but don't sell directly (link to Amazon)
- **International reach** -- courses in English, Spanish, French; board members from Chile, Poland, Hawaii

### Strengths
- Extensive research repository (30+ studies)
- Comprehensive testimonial database (100+ conditions)
- Multilingual courses
- Clear organizational structure
- Strong credentialing (PhD president, FDA statistician on board, peer-reviewed publications)

### Weaknesses
- Very text-heavy pages with minimal visual design
- Outdated donation system (PayPal buttons only)
- Blog is barely maintained (sporadic posts over years)
- No modern interactive elements (no video embeds on research page, no infographics)
- Hero section uses static imagery rather than video
- Mobile navigation uses toggle buttons that may be confusing
- Some broken/outdated links (e.g., "End of Life" testimonial links to wp-admin)
- The "Donate" button in nav has no background fill and is easy to miss
- No social media integration visible
- Footer is minimal -- no social links, no secondary content
- Getting Started page reads like a product catalog for Clint Ober's products
- Page load likely slow due to large images and long pages
- Heading hierarchy is inconsistent (multiple H1s on homepage)
- Some pages feel like marketing copy rather than objective research communication

---

## 14. SCREENSHOTS TAKEN

All saved to `/home/apn/Python/Earthing Institute/new-website/screenshots/`:

1. `homepage-viewport.png` -- Homepage above the fold
2. `homepage-full.png` -- Full homepage (very tall)
3. `research-page.png` -- Research page above the fold
4. `mission-page.png` -- Vision & Mission page
5. `board-of-directors.png` -- Board of Directors page
6. `courses-page.png` -- Courses listing page
7. `blog-page.png` -- Blog listing page
8. `donate-page.png` -- Donate page
9. `getting-started-page.png` -- Getting Started page
10. `supporters-page.png` -- Thank You to Supporters page
11. `testimonials-page.png` -- A-Z Testimonials index page
