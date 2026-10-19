# Design: Setlist

The site is the stage floor before a show. A Sharpie setlist is gaffer-taped down, real app screenshots are taped beside it like printouts, and marker callouts explain them. Implemented in `assets/css/site.css`, `_layouts/` and `_includes/`; the original mockup is `_mockups/4-setlist.html`.

## Materials
- **Floor:** Marley deck. Light `#C9CDD3`, dark `#0D0E10` as a flat, untextured field (no grain or seam lines). Light or dark follows the system, with the three-way toggle (key `ty-theme`).
- **Gaffer tape:** matte strips (`--tape` `#1E1F23` light, `#2B2D33` dark) with torn ends (clip-path). Used for section headings, the wordmark tag, and to hold prints down.
- **Spike tape:** the only colour. Red `#E5243B`, amber `#F5B826`, green `#26C759`. Amber and green keep their cue meaning (STANDBY, GO); red marks the first step or a warning.
- **Paper:** white prints and setlists with a soft offset shadow, rotated a few degrees. Never cream.

## Type
- **Permanent Marker** for headlines, tape labels, setlist items and callout titles. Never for body copy.
- **Barlow Condensed** (500/600/800) for body, buttons and labels.
- **Inter 800** only for pager numbers and states, matching the app's rule that Inter is the number font.

## Components
- **Tape button:** torn-edge rectangle, uppercase Barlow 800. Primary is green spike tape, secondary is white paper.
- **Taped print:** a screenshot on white with two tape strips at opposite corners.
- **Callout dot:** a numbered spike-tape circle with a 3px ink ring, placed on a screenshot and matched by a numbered list beside it. Dots sit beside the UI they point at, not on top of it.
- **Pager screenshots:** cropped from the Producer's pager preview and masked to the phone shape (`border-radius:15%/7.5%`), with a strip of cue-coloured tape at the bottom.

## Imagery
- Use real screenshots from `Screenshots/<version>/producer-mac` in the app repo, converted to WebP in `assets/img/app/`. Re-crop when a new version ships.
- Anything that isn't a screenshot (the ESP32 drawing, the interactive pager) is labelled as an illustration or a simulation.

## Motion
- A Sharpie strike crossing off a setlist item (`scaleX`, 450ms, ease-out) and the pager frame changing colour. Buttons tilt slightly on hover. Respect `prefers-reduced-motion`.

## Don'ts
- No icon-card grids, gradients, glass, or soft rounded SaaS cards.
- Don't use cue colours as decoration that contradicts their meaning (for example, green on something that isn't GO or a go-ahead action).
