# catalog — MapLibre prototype

This revision replaces Leaflet entirely with MapLibre GL JS.

## Map stack

- MapLibre GL JS (vector/WebGL renderer)
- OpenFreeMap vector tiles/style
- No API key
- PMS 309-inspired monochrome restyling at runtime
- Boulder-centered default view
- POI/transit clutter hidden for a simpler line-map feeling

## Existing prototype features

- approximate/fuzzed cat-sighting locations
- optional browser geolocation
- name, color/markings, personality, notes, photo
- localStorage persistence
- "I saw this cat too" confirmations
- centered `(^. .^)⟆` placeholder
- responsive layout

## Important limitation

Sightings are still local to each visitor's browser. A shared public version would
need a backend/database.

## GitHub Pages

Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the root of the
`catalog` repository. GitHub Pages can serve the files directly.
