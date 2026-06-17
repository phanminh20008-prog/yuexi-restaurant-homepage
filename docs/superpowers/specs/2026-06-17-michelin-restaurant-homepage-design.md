# Michelin Restaurant Homepage Design Spec

Date: 2026-06-17

## Project Goal

Build a small public-facing website reference for a Michelin-level restaurant homepage. The site should feel like a real external restaurant website, not an internal operations note or a generic template.

The approved direction is a modern Chinese fine dining restaurant with a cinematic courtyard hero, Michelin-style trust cues, seasonal tasting menu storytelling, tea and wine pairing, private dining, and a clear reservation path.

## Reference Signals

The design draws from current high-end restaurant website patterns:

- [Eleven Madison Park](https://www.elevenmadisonpark.com/) uses a direct reservation link, About/Team/Events/Stories sections, dining imagery, address/contact details, newsletter signup, wine list, FAQs, gift cards, and press/accolades navigation.
- [Le Bernardin](https://www.le-bernardin.com/) is used as a reference for classic fine dining restraint and institutional credibility.
- [MICHELIN Guide](https://guide.michelin.com/us/en) is used as the credibility context for awards, guide language, and restaurant discovery expectations.

These references inform structure and tone only. The site must not copy their text, photography, logo system, or brand identity.

## Brand Concept

Working restaurant name: **YUE XI 月汐**

Positioning: Modern Chinese fine dining.

Core line: **一席山海，入夜成宴**

English support line: **Modern Chinese Fine Dining**

Brand feeling:

- Elegant, restrained, cinematic, and trust-building.
- Contemporary Chinese rather than traditional red-and-gold banquet style.
- Quietly premium: the site should feel expensive because of spacing, hierarchy, photography, material color, and concise copy.

Visual palette:

- Ink black for depth and first-screen drama.
- Warm ivory for content sections.
- Deep jade or muted green as a subtle Chinese signal.
- Aged brass for accents, dividers, and small labels.
- No dominant purple, beige-only, orange/brown-heavy, or blue-slate theme.

Typography direction:

- Serif display face for brand name and hero headline.
- Clean sans-serif for navigation, body text, labels, and operational details.
- Chinese text should be generous in line height and avoid crowded blocks.

## Homepage Structure

The homepage is a single polished landing page with anchored sections.

1. Hero

- Full-bleed cinematic restaurant/dining-room image.
- Top navigation: brand mark, Menu, Chef, Private Dining, Visit, Reserve.
- Hero text: "一席山海，入夜成宴".
- Supporting copy: "以二十四节气为线索，将海味、山珍、茶与酒带入一间安静的当代中式餐室。"
- Primary action: Reserve a Table.
- Secondary action: View Seasonal Menu.

2. Trust Strip

- Three compact credibility points immediately below the hero.
- Suggested items:
  - MICHELIN-inspired dining reference.
  - 8-course seasonal tasting menu.
  - Private dining and concierge service.
- This section should reassure visitors before they scroll into storytelling.

3. Seasonal Menu

- Present the tasting menu as an editorial experience, not a long list.
- Include 4-6 representative course cards such as:
  - 山海开席
  - 潮汐海味
  - 炭火时蔬
  - 清汤与陈皮
  - 主厨主菜
  - 茶点收尾
- Include pairing options: Tea Pairing and Wine Pairing.
- Include menu price as a refined operational detail if it fits visually.

4. Chef Philosophy

- Short section for the chef's point of view.
- Focus on seasonality, restraint, Chinese ingredients, and service ritual.
- Include a chef portrait or kitchen-detail image.
- Keep copy concise and credible.

5. Dining Rooms And Private Dining

- Showcase main dining room, chef's counter, and private room.
- Explain operational use cases:
  - anniversaries
  - executive dining
  - hosted tastings
  - private celebrations
- Include a contact or inquiry action for private dining.

6. Visit And Reservation

- Address, hours, reservation policy, dress guidance, cancellation note, and contact.
- Primary reservation button repeats here.
- Include a simple newsletter or updates signup only if it does not distract from reservation.

7. Footer

- Brand mark.
- Navigation links.
- Address and contact.
- Social link placeholder.
- Accessibility and privacy links as footer-level operational polish.

## Components

The implementation should keep components simple and reusable:

- SiteHeader: fixed or overlay navigation with mobile menu.
- HeroSection: image-backed first viewport with primary actions.
- TrustStrip: three-value credibility row.
- SeasonalMenuSection: course cards and pairing callout.
- ChefSection: editorial text/image split.
- PrivateDiningSection: image-led service cards.
- VisitSection: practical information and reservation action.
- Footer: contact and secondary links.

No backend, CMS, authentication, or real booking integration is required for the first build. Reservation buttons can point to an anchor or placeholder URL, but the interaction should look production-ready.

## Content Rules

- Use polished Chinese primary copy with concise English labels where appropriate.
- Do not over-explain the website's features on the page.
- Avoid generic luxury words stacked together. The writing should sound like an actual restaurant, not a perfume ad.
- Use invented but plausible operational details so the site feels real:
  - restaurant name
  - tasting menu format
  - private dining scenarios
  - reservation and visit notes

## Visual And Interaction Requirements

- The homepage must open directly into the restaurant experience, not a marketing intro page.
- The first viewport must clearly signal the restaurant brand and category.
- A hint of the next section should be visible below the hero on normal desktop and mobile viewports.
- Use real or generated bitmap imagery for food, dining room, chef, or service atmosphere. Do not rely on abstract gradients or SVG illustrations for the primary visual impression.
- Cards may be used for menu courses or service items, but page sections should not be nested card stacks.
- Buttons should have stable dimensions and should not reflow awkwardly on mobile.
- Text must not overlap imagery or other sections at desktop or mobile sizes.
- Navigation should collapse cleanly on mobile.

## Data Flow

This is a static front-end site. Content can be represented as local constants or direct markup:

- navigation items
- trust metrics
- menu courses
- pairings
- private dining rooms
- visit details

No external data fetching is required. If external images are used during prototyping, the implementation should still work if an image fails by providing background colors and alt text where relevant.

## Error Handling And Resilience

- Reservation and inquiry actions should be safe placeholders unless a real destination is provided.
- Image sections should retain readable text if images fail or load slowly.
- Mobile navigation should remain accessible with keyboard and pointer input.
- External links should be clearly marked and should not break the single-page navigation.

## Testing And Verification

The finished site should be verified with:

- Static file opens or local dev server loads successfully.
- Desktop viewport visual check around 1280px width.
- Mobile viewport visual check around 390px width.
- No visible text overlap or clipped buttons.
- Hero image, menu cards, private dining, and visit sections render.
- Primary and secondary navigation anchors work.
- Browser console has no critical errors.

## Out Of Scope

- Real booking system integration.
- Payment, deposits, cancellation workflow, or CRM.
- Multi-language site switching.
- Admin CMS.
- Real Michelin logo usage or official Michelin award claims.

## Implementation Baseline

The approved implementation baseline is a static HTML/CSS/JavaScript page. This fits the empty repository, keeps the reference site easy to open locally, and avoids introducing a front-end framework unless a later requirement creates a clear need for one.
