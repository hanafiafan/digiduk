# MASTER PROMPT — INTERACTIVE AGENCY RATECARD WEBSITE

## 1. Project Identity

Build a premium, interactive, editorial-style agency ratecard website for a digital studio that offers:

1. Custom e-commerce websites
2. Product landing pages
3. Brand portfolio websites
4. Meta Ads management
5. Meta Pixel setup
6. Conversion API setup
7. Website maintenance and optional add-ons

The website must feel like a top-tier creative agency showcase, not a generic SaaS pricing page and not a basic corporate company profile.

The visual benchmark is:

- https://threedimensions-cloneable.webflow.io/

Use the reference only for its level of:
- immersion
- spatial composition
- oversized typography
- 3D interaction
- scroll choreography
- bold editorial layout
- premium agency feel

Do not copy the reference website literally.
Do not reuse its exact copy, layout, 3D objects, visual identity, or page structure.
Create a distinct visual system specifically for a professional digital agency ratecard.

---

# 2. Main Creative Direction

Create a clean, modern, bold, high-end agency website with a strong editorial hierarchy.

The design should combine:

- bold condensed or grotesk display typography
- elegant italic typography for emphasis
- oversized headlines
- large empty spaces
- clean modular grids
- restrained premium colors
- subtle 3D objects
- smooth kinetic typography
- carefully choreographed transitions
- modern price presentation
- interactive cards
- refined hover effects
- strong visual rhythm

The overall mood should feel:

- premium
- confident
- sharp
- modern
- minimal
- editorial
- artistic
- experimental but still usable
- professional enough for serious clients
- visually memorable without becoming noisy

Avoid:
- generic startup layouts
- colorful gradient overload
- glassmorphism everywhere
- neon cyberpunk styling
- template-looking sections
- random blobs
- excessive shadows
- cartoon icons
- overly playful motion
- cluttered pricing cards
- fake futuristic UI
- cheap-looking 3D
- too many colors
- a conventional long scrolling corporate website

---

# 3. Recommended Tech Stack

Use a modern React-based stack.

Required technologies:

- Next.js or React
- TypeScript
- Three.js
- React Three Fiber
- Drei
- Lenis for smooth scrolling
- Framer Motion for page and component animation
- GSAP ScrollTrigger only when advanced scroll choreography is needed
- Tailwind CSS or modular CSS
- Lucide icons or another minimal icon library
- optional Zustand for shared interaction state
- optional React Hook Form for inquiry forms

Important:
Framer Motion must handle interface transitions, card motion, reveals, menu animation, hover feedback, and micro-interactions.

Three.js or React Three Fiber must handle immersive 3D elements.

Lenis must control smooth scrolling across the experience.

Do not use Framer Motion as a substitute for Three.js.
Do not use Three.js for effects that can be handled more efficiently with CSS or Framer Motion.

---

# 4. Brand Personality

The brand voice should sound:

- direct
- intelligent
- confident
- modern
- concise
- transparent
- professional
- slightly provocative
- never overly formal
- never cheesy

The website should communicate that this studio does not sell cheap template websites.
It sells custom digital systems, clear strategy, and crafted user experiences.

Core positioning idea:

“Built to perform. Designed to be remembered.”

Alternative supporting lines:

- Digital systems with visual impact.
- Websites that work as hard as your brand.
- Strategy, interface, and performance in one system.
- Not another template. A digital asset built for growth.
- Clear scope. Real systems. No hidden technical mess.

Use English for prominent visual headlines if it improves the agency feel.
Use Indonesian for service details, pricing, inclusions, notes, and client-facing explanations.

---

# 5. Visual System

## Color Direction

Use a restrained palette.

Primary palette recommendation:

- warm off-white: #F2F0E9
- deep charcoal: #111111
- graphite: #222222
- muted gray: #A5A5A0
- accent violet: #6547F5

Optional secondary accent:
- muted electric blue
- muted acid green
- metallic silver

Use only one dominant accent color.
The accent should be used sparingly for:
- active states
- selected package
- cursor interaction
- pricing highlights
- buttons
- small 3D details
- section numbering

Do not turn the interface into a rainbow.

## Typography

Use a bold display font paired with a refined italic font.

Recommended pairing style:

Display:
- Neue Montreal
- Neue Haas Grotesk
- General Sans
- Satoshi
- Archivo
- Inter Tight
- Helvetica Now
- Space Grotesk

Italic accent:
- Instrument Serif Italic
- Cormorant Garamond Italic
- DM Serif Display Italic
- Editorial New Italic
- Playfair Display Italic

Use:
- uppercase condensed headings for authority
- large grotesk headings for clarity
- italic serif phrases for elegance and contrast
- monospace for labels, numbers, scope notes, and technical metadata

Suggested hierarchy:

- hero title: 9vw–14vw
- section headline: 6vw–10vw
- package price: 4vw–7vw
- body copy: 16–20px
- small labels: 11–13px uppercase
- technical notes: monospace 12–14px

Typography should be part of the visual composition, not just text placed inside boxes.

---

# 6. Page Experience

The website should feel like a sequence of interactive scenes rather than a stack of standard sections.

Use:
- sticky scenes
- horizontal motion inside vertical scrolling
- pinned pricing sequences
- oversized moving typography
- animated counters
- subtle camera movement
- floating cards
- perspective shifts
- text masks
- split-screen transitions
- section-to-section visual continuity

Scrolling must remain usable and readable.
Do not sacrifice clarity for animation.

Respect reduced-motion preferences.

---

# 7. Custom Cursor

Create a refined custom cursor for desktop.

Cursor states:

Default:
- small dot and subtle outer ring

On interactive objects:
- expands smoothly
- shows short labels such as:
  - VIEW
  - DRAG
  - EXPLORE
  - OPEN
  - SELECT

On pricing cards:
- becomes a soft circular highlight

On buttons:
- magnetic pull effect

Disable the custom cursor on touch devices.

---

# 8. Three.js Art Direction

Create one central 3D visual language that evolves throughout the site.

Recommended concept:

A modular “digital infrastructure object” made of:
- stacked panels
- floating frames
- interface fragments
- rounded metallic blocks
- grids
- translucent layers
- connected nodes

The object should symbolize:
- website systems
- CMS modules
- payment infrastructure
- shipping integration
- analytics
- advertising
- digital growth

Hero behavior:
- object slowly rotates
- responds subtly to cursor movement
- shifts perspective during scrolling
- emits a restrained accent glow
- maintains strong performance

Pricing behavior:
- object separates into modules
- each module maps to a service category
- selected service brings one module forward
- unselected modules fade or move backward

Meta Ads scene:
- use animated data points, orbiting nodes, or campaign pathways
- keep it abstract and premium
- do not create cliché social media logos floating in space

Pixel scene:
- visualize event tracking as subtle points moving through a system
- show browser-side and server-side pathways abstractly
- avoid technical clutter

Performance requirements:
- lazy-load heavy 3D
- use adaptive DPR
- compress textures
- keep polygon count controlled
- pause rendering when scene is offscreen
- provide a static fallback for weak devices
- avoid huge shaders unless necessary
- target smooth interaction on modern laptops and mobile devices

---

# 9. Navigation

Use a minimal fixed navigation.

Desktop navigation:

Left:
- agency wordmark or logo

Center or right:
- Services
- Pricing
- Process
- Add-ons
- Contact

Far right:
- “Start a Project” button

Optional:
- section progress indicator
- current scene number
- small sound toggle only if audio is actually implemented

Mobile:
- full-screen menu
- oversized links
- staggered entrance
- clear close button
- no unnecessary 3D in menu

---

# 10. Full Page Structure

## Scene 01 — Preloader

Create a short premium preloader.

Elements:
- numeric progress
- rotating typographic phrase
- subtle 3D wireframe preview
- agency logo reveal

Keep loading under 2–3 seconds when assets are ready.
Do not create a long cinematic intro.

Suggested text:
- BUILDING DIGITAL SYSTEMS
- LOADING EXPERIENCE
- STRATEGY / DESIGN / DEVELOPMENT

---

## Scene 02 — Hero

Main headline concept:

“DIGITAL SYSTEMS
BUILT TO PERFORM”

Use italic typography for one contrasting phrase:

“designed to be remembered.”

Supporting copy:

“Kami merancang website, sistem e-commerce, tracking, dan kampanye digital yang dibangun untuk bekerja—bukan sekadar terlihat bagus.”

Primary CTA:
- Explore Services

Secondary CTA:
- View Ratecard

Small metadata:
- Custom Website
- E-Commerce
- Meta Ads
- Tracking Setup
- Indonesia / Remote

3D centerpiece:
- modular digital infrastructure object
- responds to cursor
- changes depth on scroll

Hero should occupy at least 100vh.

---

## Scene 03 — Agency Statement

Use a bold editorial text sequence.

Example:

“YOUR WEBSITE
SHOULDN’T FEEL
LIKE A TEMPLATE.”

Italic insert:
“It should feel like your brand.”

Supporting Indonesian copy:

“Setiap proyek dirancang berdasarkan kebutuhan bisnis, alur pengguna, fitur, sistem operasional, dan target pertumbuhan.”

Use kinetic text masks and staggered reveals.

---

## Scene 04 — Services Overview

Create a horizontal or spatial service selector.

Service categories:

01. E-Commerce
02. Product Landing Page
03. Brand Portfolio
04. Meta Ads
05. Meta Pixel & CAPI
06. Maintenance & Add-ons

Interaction:
- hover or click changes the 3D module
- selected category reveals a concise description
- active index animates
- content transitions with Framer Motion
- optional drag interaction on desktop

Short descriptions:

E-Commerce:
“Website penjualan lengkap dengan CMS, produk, stok, checkout, pembayaran, pengiriman, dan dashboard operasional.”

Product Landing Page:
“Halaman konversi untuk kampanye, peluncuran produk, lead generation, dan penjualan.”

Brand Portfolio:
“Website presentasi brand dengan visual kuat, case study, layanan, dan sistem pengelolaan konten.”

Meta Ads:
“Pengelolaan kampanye Meta Ads berdasarkan objektif, budget, data, dan performa.”

Meta Pixel & CAPI:
“Implementasi tracking event untuk menghasilkan data kampanye yang lebih akurat.”

Maintenance:
“Dukungan teknis, pembaruan konten, monitoring, backup, dan pengembangan fitur lanjutan.”

---

# 11. Website Pricing Section

Do not use generic three-column SaaS cards.
Create cinematic, editorial pricing panels.

Each pricing package should have:

- package number
- category
- price
- ideal use case
- system scope
- inclusions
- third-party notes
- delivery estimate
- CTA
- package comparison trigger

Use sticky scrolling so each package takes over the screen one by one.

---

## A. Product Landing Page

### Package 01 — Essential

Public price:
Rp2.000.000

Positioning:
Entry-level landing page for focused campaigns and straightforward product presentation.

Include:

- one-page landing page
- up to 6–8 sections
- responsive desktop, tablet, and mobile
- hero section
- product benefits
- product showcase
- testimonial section
- FAQ
- CTA and WhatsApp integration
- contact or lead form
- simple CMS for text and images
- basic SEO setup
- Google Analytics
- Meta Pixel basic installation
- hosting or managed hosting for 1 year
- standard domain for 1 year
- SSL
- deployment
- 14-day bug warranty

Important pricing note:

The Rp2.000.000 package is an entry package and should use managed hosting or business hosting, not a dedicated VPS.

Exclude:
- advanced animation
- custom complex CMS
- paid stock assets
- premium domain
- copywriting
- product photography
- advanced tracking
- payment gateway
- complex integration

### Package 02 — Professional

Public price:
Rp3.500.000

Include:

- custom UI design
- up to 10 sections
- CMS
- lightweight custom animation
- lead form
- WhatsApp integration
- Google Analytics
- Meta Pixel
- basic SEO
- optional blog or mini catalog
- hosting and domain for 1 year
- two major revision rounds
- 30-day bug warranty

### Package 03 — Interactive

Public price:
Starting from Rp5.000.000

Include:

- custom art direction
- scroll animation
- micro-interactions
- interactive cursor
- advanced transitions
- product storytelling
- CMS
- advanced analytics setup
- optimization for Core Web Vitals
- VPS or premium hosting for 1 year
- domain for 1 year
- 45-day bug warranty

Pricing label:
“STARTING FROM”

Add note:
“Final price follows page complexity, animation level, content volume, and integration scope.”

---

## B. Brand Portfolio Website

### Package 01 — Essential

Public price:
Starting from Rp6.500.000

Include:

- custom UI/UX
- homepage
- about
- services
- portfolio overview
- project detail or case study
- clients or partners
- testimonials
- contact
- custom CMS
- portfolio management
- responsive design
- basic SEO
- analytics
- Meta Pixel
- inquiry form
- WhatsApp integration
- VPS or premium hosting for 1 year
- standard domain for 1 year
- SSL
- deployment
- 30-day bug warranty

### Package 02 — Professional

Public price:
Starting from Rp8.000.000

Additional scope:

- stronger custom art direction
- richer project filtering
- advanced CMS structure
- team or career module
- refined animations
- page transitions
- more flexible case study components
- enhanced performance optimization
- extended support

### Package 03 — Interactive Agency Style

Public price:
Starting from Rp10.000.000

Additional scope:

- advanced motion design
- GSAP or Framer Motion choreography
- horizontal scroll scenes
- interactive cursor
- Three.js elements
- immersive project presentation
- bespoke transitions
- advanced visual storytelling

Add warning:
“Interactive 3D, heavy motion, multilingual content, and custom third-party integrations are quoted separately.”

---

## C. Custom E-Commerce

Use two commercial formats:

### Package 01 — E-Commerce Core

Public price:
Starting from Rp12.500.000

Include:

- custom UI/UX
- responsive storefront
- custom CMS
- admin dashboard
- product management
- category management
- product variants
- stock management
- shopping cart
- checkout
- order management
- customer data
- promo code
- invoice
- Xendit payment gateway integration
- RajaOngkir integration
- shipping cost calculation
- order status
- Google Analytics
- Meta Pixel basic
- basic SEO
- SSL
- VPS for 1 year
- standard domain for 1 year
- testing
- deployment
- 30-day bug warranty

Third-party notes:

Xendit:
- no annual subscription should be displayed as part of the base project cost
- transaction fees are charged per successful transaction according to the payment method
- transaction fees are paid by the merchant

RajaOngkir:
- Enterprise subscription should be presented separately unless explicitly bundled
- estimated annual package reference: around Rp2.500.000–Rp3.000.000 per year
- final fee must follow the current official Komerce or RajaOngkir quotation

### Package 02 — E-Commerce Complete

Public price:
Starting from Rp15.900.000

Include everything in E-Commerce Core plus:

- RajaOngkir Enterprise subscription for 1 year
- subscription setup and administration
- enhanced sales dashboard
- richer promo controls
- extended testing
- priority onboarding

Important:
Clearly state that third-party pricing can change and renewal is billed separately.

### Package 03 — E-Commerce Growth

Public price:
Starting from Rp18.000.000

Additional scope:

- multi-admin
- admin role permissions
- advanced sales reports
- wishlist
- customer management
- advanced coupon rules
- return or refund workflow
- loyalty point or membership
- WhatsApp integration
- custom reports
- multi-warehouse simple workflow
- priority support

Price label:
“CUSTOM QUOTE”

Do not promise unlimited features.

---

# 12. E-Commerce Cost Breakdown Scene

Create an interactive cost breakdown module.

Purpose:
Help clients understand that project pricing is made of system development, infrastructure, integration, and support.

Suggested internal HPP visualization:

- UI/UX and system architecture
- frontend development
- backend and database
- custom CMS
- product and inventory system
- cart and checkout
- Xendit API integration
- RajaOngkir API integration
- invoice and transaction notification
- testing and deployment
- infrastructure
- warranty and support

Do not expose highly sensitive internal profit calculations in the public website by default.

Provide two display modes:

Client view:
- System Development
- Infrastructure
- Integration
- Deployment
- Support

Internal admin or hidden proposal view:
- detailed HPP estimates
- cost percentages
- markup
- gross margin

Use animated bars or modular 3D blocks.

---

# 13. Third-Party Services Section

Create a transparent third-party pricing section.

## Xendit

Display:

- integration fee is included in selected e-commerce packages
- no fixed annual subscription is assumed in the base pricing
- Xendit charges transaction fees based on successful transactions and selected payment methods
- merchant bears transaction fees
- activation approval and account verification remain subject to Xendit policies

Use wording:

“Biaya transaksi Xendit dibebankan langsung kepada merchant berdasarkan metode pembayaran yang digunakan.”

Do not hard-code all transaction rates because rates can change.

Provide a small “View Current Provider Rate” link placeholder.

## RajaOngkir / Komerce

Display:

- API integration is included in selected packages
- Enterprise subscription can be billed separately or bundled
- annual fee reference is approximately Rp2.500.000–Rp3.000.000
- final price follows the current provider quotation
- renewal after year one is paid by the client

Use wording:

“Biaya berlangganan shipping gateway mengikuti paket dan harga aktif dari Komerce atau RajaOngkir.”

## Hostinger

Display:

- VPS or hosting plan depends on project scope
- domain and hosting are included only when stated
- renewal after year one is the client’s responsibility
- premium domains are excluded
- upgrades caused by traffic growth are billed separately

---

# 14. Meta Ads Ratecard

Create a separate dark scene with data-driven motion.

Headline:

“PAID MEDIA
WITH A SYSTEM.”

Italic line:
“Not random boosting.”

Service scope:

- campaign setup
- campaign structure
- ad set setup
- audience research
- objective planning
- daily monitoring
- budget optimization
- A/B testing
- limited creative briefing
- weekly reporting
- monthly reporting
- 30-day management period

Display tiers in a vertically stacked animated table.

## Tier 1

Ad budget:
Rp1.000.000–Rp10.000.000 per month

Internal rate:
Rp1.500.000

External/public rate:
Rp2.500.000

## Tier 2

Ad budget:
Above Rp10.000.000–Rp50.000.000 per month

Internal rate:
Rp2.500.000

External/public rate:
Rp3.500.000

## Tier 3

Ad budget:
Above Rp50.000.000–Rp100.000.000 per month

Internal rate:
Rp3.500.000

External/public rate:
Rp5.000.000

## Tier 4

Ad budget:
Above Rp100.000.000 per month

Internal base rate:
Rp4.500.000

External/public rate:
Starting from Rp6.500.000 or 5% of ad spend, whichever is higher

Meta Ads exclusions:

- advertising budget
- photo production
- video production
- talent
- studio
- influencer
- landing page
- advanced tracking setup
- catalog production
- social media management
- copywriting beyond limited ad direction

Recommended note:

“Minimum tiga bulan direkomendasikan untuk proses learning, testing, dan optimasi yang lebih stabil.”

Do not promise guaranteed ROAS, guaranteed sales, or guaranteed leads.

---

# 15. Meta Pixel & Conversion API Ratecard

Create an interactive event-tracking diagram.
Use moving dots or particles to represent events.

## Pixel Basic Setup

Internal:
Rp350.000

External/public:
Rp750.000

Include:

- create or connect Meta Pixel
- installation on one website
- PageView event
- domain verification
- testing in Meta Events Manager
- basic troubleshooting
- short documentation

Ideal for:
- company profile
- simple landing page

## Pixel Conversion Setup

Internal:
Rp750.000

External/public:
Rp1.500.000

Include:

- all Basic features
- event mapping
- ViewContent
- Lead
- Contact
- AddToCart
- InitiateCheckout
- Purchase or CompleteRegistration
- custom conversions
- event prioritization
- basic UTM structure
- testing
- basic deduplication review
- documentation

Ideal for:
- sales landing page
- small e-commerce
- lead generation

## Pixel + Conversion API

Internal:
Rp1.500.000

External/public:
Starting from Rp2.500.000

Include:

- browser-side Meta Pixel
- server-side Conversion API
- event ID
- event deduplication
- purchase value and currency
- product or content ID mapping
- hashed customer data parameters
- event quality testing
- domain verification
- Aggregated Event Measurement setup
- custom conversions
- debugging
- technical documentation

Ideal for:
- custom e-commerce
- serious performance campaigns
- businesses that need stronger tracking resilience

## Pixel Audit & Repair

Internal:
Rp500.000

External/public:
Starting from Rp1.000.000

Include:

- pixel audit
- duplicate event diagnosis
- purchase value review
- currency review
- domain ownership review
- event mapping repair
- retesting
- audit report

Add note:

“Final rate depends on website platform, access availability, event complexity, and existing implementation quality.”

---

# 16. Meta Ads Bundles

Display optional bundles.

- Meta Ads Tier 1 + Pixel Basic — Rp3.000.000
- Meta Ads Tier 1 + Pixel Conversion — Rp3.750.000
- Meta Ads Tier 2 + Pixel Conversion — Rp4.750.000
- Meta Ads Tier 2 + Pixel + CAPI — Rp5.500.000
- Meta Ads Tier 3 + Pixel + CAPI — Rp7.000.000

Promotional rule:

“Pixel Basic dapat diberikan tanpa biaya untuk kontrak Meta Ads minimal tiga bulan.”

Clarify:
- only standard installation is free
- e-commerce events
- purchase tracking
- dynamic product IDs
- server-side CAPI
- debugging
remain paid services

---

# 17. Add-On Ratecard

Create a modular add-on explorer.

Use expandable rows instead of generic cards.

Add-ons:

- Standard additional page — starting from Rp350.000 per page
- Custom additional page — starting from Rp600.000 per page
- Landing page copywriting — starting from Rp750.000
- Additional product upload — Rp10.000–Rp25.000 per product
- Multi-language system — starting from Rp1.500.000
- WhatsApp API integration — starting from Rp1.000.000
- Membership system — starting from Rp2.000.000
- Loyalty point system — starting from Rp1.500.000
- Blog system — starting from Rp750.000
- Booking system — starting from Rp2.000.000
- Custom analytics dashboard — starting from Rp2.500.000
- Monthly maintenance — Rp750.000–Rp2.500.000
- Emergency technical support — Rp250.000 per hour
- UI/UX design only — starting from Rp2.500.000
- Monthly SEO — starting from Rp2.500.000
- Content production — custom quotation

Every add-on should show:
- a short benefit
- estimated complexity
- whether it is one-time or recurring

---

# 18. Process Section

Create a five-step process.

01. Discovery
- goals
- audience
- references
- technical requirements
- scope

02. Strategy
- sitemap
- user flow
- feature planning
- content hierarchy
- system architecture

03. Design
- visual direction
- wireframe
- UI design
- motion direction
- approval

04. Development
- frontend
- backend
- CMS
- integration
- responsive implementation

05. Launch & Support
- testing
- deployment
- analytics
- documentation
- warranty
- maintenance option

Interaction:
Each step transforms the main 3D object.

---

# 19. Scope Guard Section

This section is important.

Headline:

“CLEAR SCOPE.
NO PROJECT CHAOS.”

Explain:

Project prices depend on:
- number of pages
- amount of content
- CMS complexity
- animation level
- number of products
- number of admin roles
- integrations
- revisions
- language count
- data migration
- deadline urgency

Create an interactive “What changes the price?” calculator.

Inputs:
- project type
- number of pages
- animation level
- CMS complexity
- integrations
- product count
- timeline
- support duration

Output:
- indicative range only
- not a binding quote

Use wording:
“Estimasi ini bukan penawaran final. Harga resmi diberikan setelah scope disepakati.”

---

# 20. Terms and Payment

Display elegantly in a structured legal-style editorial block.

Terms:

- 50% down payment before work begins
- 30% after design and core system completion
- 20% before public launch
- maximum two major revision rounds unless otherwise stated
- revisions outside scope are charged separately
- source code is transferred after full payment
- domain and third-party services should preferably be registered under the client’s name
- renewal after the first year is paid by the client
- timeline starts after deposit and complete project materials are received
- client delays can shift the project timeline
- additional features require a new quotation
- third-party provider prices can change
- provider approval is outside the developer’s control
- bug warranty does not include new features, content changes, or third-party policy changes

Add a checkbox before inquiry submission:
“I understand that final pricing follows the approved project scope.”

---

# 21. Inquiry Experience

Do not use a boring contact form.

Create a multi-step project inquiry.

Step 1:
Select service

Step 2:
Select budget range

Step 3:
Select timeline

Step 4:
Select required features

Step 5:
Client details

Fields:

- name
- company
- WhatsApp
- email
- service
- budget
- launch target
- project description
- reference links
- file upload placeholder

Show a dynamic summary before submission.

CTA:
“Build My Project Brief”

Success state:
- animated confirmation
- summary reference number
- WhatsApp follow-up button
- email confirmation placeholder

---

# 22. Footer

Create a bold typographic footer.

Main line:

“LET’S BUILD
SOMETHING USEFUL.”

Italic line:
“and impossible to ignore.”

Include:
- email
- WhatsApp
- Instagram
- Behance or portfolio
- location
- current year
- service links
- privacy
- terms

Use a large moving marquee:
“STRATEGY × DESIGN × DEVELOPMENT × PERFORMANCE ×”

---

# 23. Motion System

Use Framer Motion for:

- page entrances
- staggered typography
- menu transitions
- pricing panel transitions
- accordion motion
- hover feedback
- modal animation
- form step animation
- shared layout transitions
- magnetic buttons
- section labels

Use Lenis for:
- smooth inertial scrolling
- synchronized scroll progress
- elegant section movement

Use Three.js for:
- central 3D object
- spatial service selection
- subtle depth and lighting
- event tracking visualization
- hero interaction

Use GSAP only for:
- pinned cinematic sequences
- advanced timeline synchronization
- difficult scroll-based 3D choreography

Motion rules:

- no animation should block reading
- use subtle easing
- avoid bounce-heavy motion
- use spring animation only for direct interaction feedback
- reduce motion on mobile
- support prefers-reduced-motion
- no forced scroll hijacking
- no autoplay audio
- no excessive parallax

---

# 24. Responsive Behavior

Desktop:
- full immersive experience
- cursor interaction
- advanced 3D
- pinned scenes
- horizontal transformations

Tablet:
- simplify camera motion
- reduce particle count
- maintain strong typography
- preserve price comparison

Mobile:
- stack content clearly
- use touch-friendly controls
- disable custom cursor
- simplify 3D or use fallback image
- remove complex horizontal drag where usability suffers
- keep CTA always accessible
- maintain fast loading
- avoid tiny text
- pricing tables must remain readable

---

# 25. Accessibility

Required:

- semantic HTML
- logical heading order
- keyboard navigation
- visible focus states
- adequate color contrast
- aria labels
- reduced-motion support
- text alternatives for meaningful imagery
- no information conveyed only through color
- accessible forms
- clear error messages
- touch targets at least 44px

---

# 26. Performance

Target:

- Lighthouse performance score above 85 on production where practical
- responsive images
- lazy-loaded media
- route-level code splitting
- compressed 3D models
- optimized fonts
- no unnecessary JavaScript
- minimal layout shift
- preload only essential hero assets
- defer noncritical integrations
- use static fallback if WebGL is unavailable

Do not let the 3D experience destroy conversion performance.

---

# 27. CMS Requirements

Create a custom or headless CMS structure for:

- service categories
- packages
- pricing
- feature lists
- add-ons
- portfolio or case studies
- testimonials
- FAQs
- terms
- contact settings
- third-party pricing notes
- promotional banners

Admin capabilities:

- edit package prices
- mark packages as featured
- update service scope
- reorder features
- update third-party fee notes
- change CTA labels
- activate or deactivate packages
- manage inquiry submissions

Do not hard-code all business data into visual components.

---

# 28. Data Structure Guidance

Create reusable data models.

Service:
- id
- name
- slug
- category
- summary
- description
- icon
- visual scene reference

Package:
- id
- service id
- name
- public price
- internal price optional
- price type
- ideal client
- features
- exclusions
- delivery estimate
- warranty
- featured status
- third-party notes
- CTA

Add-on:
- name
- description
- price
- billing type
- complexity level

Third-party service:
- provider
- service
- pricing model
- estimated cost
- renewal note
- official link
- last updated

---

# 29. Content Rules

- Use “mulai dari” for variable-scope services.
- Never present third-party rates as permanently fixed.
- Do not promise unlimited revisions.
- Do not promise unlimited pages.
- Do not promise guaranteed sales.
- Do not promise guaranteed ROAS.
- Do not imply hosting renewal is lifetime.
- Do not hide exclusions.
- Keep public pricing understandable.
- Keep internal HPP information hidden from public visitors unless an admin mode is used.
- Do not use fake testimonials.
- Do not invent client logos.
- Do not fabricate metrics.

---

# 30. Final Build Quality

The final website should look like it could be featured on:
- Awwwards
- CSS Design Awards
- Godly
- SiteInspire

But it must still work as a practical ratecard and lead-generation website.

The build must balance:
- creative direction
- commercial clarity
- strong information architecture
- performance
- accessibility
- conversion

The result should not feel like a design experiment with prices pasted onto it.

It should feel like a complete agency sales experience.

---

# 31. Builder Execution Instructions

When this markdown is supplied to an AI website builder:

1. Treat every section as part of one connected visual experience.
2. Preserve the ratecard numbers and service scope.
3. Do not replace the pricing with generic placeholder values.
4. Do not simplify the website into a standard template.
5. Do not remove Three.js, Lenis, or Framer Motion.
6. Do not copy the benchmark website literally.
7. Keep the design clean and restrained.
8. Use bold sans-serif typography mixed with elegant italic typography.
9. Prioritize desktop immersion while preserving mobile usability.
10. Build reusable components and CMS-ready structures.
11. Use realistic Indonesian copy.
12. Keep third-party prices editable.
13. Clearly separate project fees, recurring fees, and transaction fees.
14. Hide internal pricing from public visitors.
15. Add a public/client mode and an optional internal proposal mode.
16. Provide production-ready structure, not a static visual mockup.
17. Include all empty, loading, error, hover, selected, submitted, and fallback states.
18. Maintain fast loading despite the 3D experience.
19. Use the reference as a quality benchmark, not as a template.
20. The final output must look original, premium, and commercially credible.

---

# 32. Short Prompt to Use Together With This File

Use this short prompt after uploading the markdown:

“Build the complete interactive agency ratecard website based on the attached master brief. Preserve all prices, package details, visual direction, motion rules, and technical requirements. Use Three.js, React Three Fiber, Lenis, and Framer Motion. Make it feel like a premium experimental agency website with bold grotesk typography, elegant italic accents, cinematic scroll transitions, and a clean original visual identity. Use the reference website only as a quality benchmark, not as a layout to copy. Deliver a responsive, CMS-ready, production-oriented website with excellent performance and accessibility.”
