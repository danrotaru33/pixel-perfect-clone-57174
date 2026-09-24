# SENCON Website Reconstruction

## Goal
Rebuild the public SENCON website as closely as possible, matching its content, layout, typography, color treatment, imagery, spacing, and responsive behavior.

## Pages
- **Home** — split black/image opening section, service expertise gallery, company introduction, process sections, and contact call-to-action.
- **About us** — light introductory area, company story, large energy imagery, and closing statement.
- **Services** — dark introduction, expandable service list, supporting project image, and contact call-to-action.
- **Contact us** — location and opening hours, contact form, office imagery, and matching page structure.

## Shared experience
- Recreate the thin SENCON wordmark and desktop navigation, plus a compact mobile menu.
- Preserve the reference site’s black, white, and soft-gray visual system with rounded pill actions.
- Match page transitions, image cropping, accordion interactions, scrolling sections, and responsive layouts.
- Use locally stored copies of the reference site’s public visual assets so the rebuild does not depend on hotlinked images.
- Add route-specific page titles and social metadata.

## Technical details
- Build with the existing TanStack Start and Tailwind setup.
- Add reusable site header, footer/call-to-action, image sections, and accordion components.
- Implement separate routes for `/`, `/about`, `/services`, and `/contact-us`.
- Keep the contact form as a polished client-side form matching the original; no message-delivery service will be added unless requested.
- Verify desktop and mobile layouts against screenshots of the reference site and resolve any build or runtime issues.
