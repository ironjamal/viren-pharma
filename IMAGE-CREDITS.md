# Image roles, selection notes, and credits

Retrieved/reviewed 2026-10-02. No third-party photo is used in the site. Local vector artwork was chosen because the available photography suggested a specific historical laboratory or an unrelated clinical setting, while the brief describes a fictional company and provides no owned facility photography.

## Candidate comparison: homepage science still-life

| Candidate | Role and fit | Composition, light, and crop | Decision |
| --- | --- | --- | --- |
| [Laboratory glassware on a dark table — Egor Myznik](https://unsplash.com/photos/laboratory-glassware-sits-on-a-dark-illuminated-table-C5pAjKmUSJE) | Good glassware subject; the photographer describes it as a secret chemical lab in Moscow. | Dark horizontal still-life, amber bottle is a strong focal point, broad shadows provide negative space. A tall crop would retain the glass forms, but the image reads as a specific historic location. | Rejected: setting conflicts with the responsible, modern fictional brand direction. |
| [Laboratory glassware and equipment on a counter — Egor Myznik](https://unsplash.com/photos/laboratory-glassware-and-equipment-sit-on-a-counter-QJHS9_k-c1c) | Related glassware subject, from the same described historic Moscow collection. | Wide, low-key arrangement; several competing vessels and reflections reduce the focal hierarchy. A narrow mobile crop would discard much of the arrangement. | Rejected: same historic setting, busier crop, and less useful hierarchy. |
| [Clear glass pitcher on a blue square table — Girl with red hat](https://unsplash.com/photos/clear-glass-pitcher-on-blue-square-table-6SDyqhHb4rg) | A free image tagged as lab equipment; the object could suggest a sample vessel. | Bright vertical composition with the object low in frame and extensive white negative space. The yellow table becomes a dominant accent and the vessel reads more like a household pitcher than pharmaceutical glassware. | Rejected: object and color do not fit the art direction. |

All three candidate pages identify the assets as available under the [Unsplash License](https://unsplash.com/license), which is not CC0. No candidate image was downloaded into the released website.

## Included local artwork

All included illustrations are original SVGs authored for this fictional website concept. They were created locally, have no external image source, and do not depict a real VIREN facility, person, product, or laboratory. SVG keeps the line art resolution-independent; all raster photos were avoided. Product package cards and editorial cover patterns are CSS-built decorative visuals rather than photos.

| Local asset | Role and alt treatment | Intrinsic size | File size |
| --- | --- | ---: | ---: |
| `public/images/hero-glass-vessels.svg` | Homepage LCP visual; informative alt describes the illustrated glass vessels and grid. | 920 × 1120 | 4,585 bytes |
| `public/images/about-vessel.svg` | About/story illustration; informative alt describes the vessels and measured grid. | 940 × 820 | 1,759 bytes |
| `public/images/science-drawing.svg` | Science and development schematic; informative alt describes the measured research paths. | 900 × 680 | 1,488 bytes |
| `public/images/manufacturing-map.svg` | Conceptual six-stage process diagram; alt explicitly says it is not a facility plan. | 1000 × 620 | 2,713 bytes |
| `public/images/quality-grid.svg` | Conceptual quality-system diagram; informative alt identifies connected review points. | 880 × 760 | 1,856 bytes |
| `src/app/icon.svg` | Site icon; decorative brand mark used by browser chrome. | 64 × 64 | 312 bytes |

## Included font

| Local asset | Source and license | File size |
| --- | --- | ---: |
| `public/fonts/InterVariable.woff2` | Inter variable font from the [official Inter repository](https://github.com/rsms/inter), licensed under the SIL Open Font License; the matching license text is included at `public/fonts/OFL.txt`. It is self-hosted through `next/font/local`. | 352,240 bytes |

The homepage illustration uses `fetchPriority="high"` and responsive `sizes`; supporting images include intrinsic width and height (or an explicit aspect ratio) to reserve layout space. No external image, font, or script is requested at runtime. Retrieval dates and exact source links above apply only to reviewed candidates, not shipped files.
