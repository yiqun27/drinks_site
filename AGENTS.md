# AGENTS.md

## Project purpose

Build **霧嶼 Mist Isle**, a refined Taiwanese tea atelier website. The site introduces original tea drinks, explains their flavor and craft, and presents concept locations. Keep the experience editorial, calm, image-led, and usable on phones as well as desktops.

## Project structure

```text
/
├── index.html              # Page sections, semantic content, and SVG map
├── AGENTS.md               # These project and contribution rules
├── README.md               # Project overview and publishing notes
└── assets/
    ├── style.css           # All presentation and responsive rules
    └── script.js           # Drink catalogue and carousel behavior
```

Keep the project dependency-free and deployable as a static site (including GitHub Pages). Do not add a build step or framework unless the owner asks for one.

## Visual and writing direction

- Use a warm paper background (`#FCFAF2`), ink (`#0B1013`), tea red (`#AB3B3A`), and muted gold (`#DAC9A6`). Drink illustrations may use their own restrained accent colors.
- Use generous whitespace, strong editorial typography, fine rules, and quiet motion. There is no sidebar; navigation should remain compact.
- Write in Traditional Chinese with a composed, sensory tone. Describe tea origin, handcraft, texture, and evolving aroma. Avoid discount language, exaggerated health claims, and unsupported factual claims.
- The brand, menu, and locations are a student concept. Keep concept store information clearly labeled as illustrative; do not imply that a real branch, address, phone number, or service exists.
- Prefer CSS-drawn drink illustrations and inline SVG for this static demo. Do not add remote image, font, or icon dependencies. Any future real image belongs in `assets/images/`, named after the drink in lowercase kebab-case.

## Page and interaction rules

- Keep the page in this order: hero, six-item drink collection, craft story, concept locations, footer.
- The hero should introduce the brand and provide a clear link to the collection. Section links use smooth scrolling; retain native scrolling and keyboard navigation as accessible fallbacks.
- Show exactly six drinks per collection page. Previous/next controls navigate among the three catalogue pages, update the page indicator, and disable at the ends. Keep the collection usable without JavaScript by leaving clear page context in the HTML.
- Drink cards must show a name and short tasting note. Hover and keyboard focus may reveal the full drink illustration and extra detail, but must not be required to read essential information.
- Keep visible focus indicators, semantic headings, descriptive button labels, and sufficient text contrast. Respect `prefers-reduced-motion`.
- The location map is a schematic illustration, not a navigation map. Its labels and nearby copy must make its concept status clear.

## Content and file conventions

- The drink catalogue is the `drinks` array in `assets/script.js`. Each entry has a stable kebab-case `id`, a Traditional Chinese `name`, `category`, `description`, `origin`, `notes`, `color`, and `accent`.
- Add drinks to the appropriate six-item page in the array. Preserve the three-page grouping unless the owner asks to change it. Keep each page at six entries and ensure every `id` is unique.
- Add or change the page's semantic section structure in `index.html`; put all styles in `assets/style.css` and behavior in `assets/script.js`. Do not put inline CSS or JavaScript in the HTML.
- Use lowercase kebab-case for new file names. Store local image assets in `assets/images/` and use relative paths so GitHub Pages works from a project subpath.
- Use inline SVG for small decorative graphics and provide accessible text for meaningful graphics. Avoid icon packages in this framework-free site.

## How to make changes

1. Read this file and inspect the existing page before editing.
2. Make the smallest change that satisfies the request and preserve the section order and visual system.
3. Check responsive behavior, keyboard operation, reduced-motion behavior, and browser-console errors for interaction changes.
4. For drink catalogue changes, verify each page still contains six entries and all ids are unique.
5. Keep the site self-contained and test it through a local static server before considering it complete.
