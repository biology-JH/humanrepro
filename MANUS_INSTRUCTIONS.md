# Human Reproduction Revision Studio — Reconstruction Blueprint

## Scope and source material

This project is an interactive Cambridge IGCSE Biology revision website for syllabus section **16.4 Sexual reproduction in humans**. The source material supplied during the project included the PowerPoint `16.4Sexualreproductioninhumans.pptx`, the revision workbook `16.4HumanReproductionRevisionWorkbook.docx`, the study guide `IGCSE-Biology-Revision-Guide-16.4Sexual-Reproduction-in-Humans.docx`, and the cellular mechanisms guide `Human-Reproduction-Cellular-Mechanisms-and-Development.docx`.

The website must reuse the supplied scientific diagrams and cellular imagery rather than generic stock artwork. The current public assets retain the extracted PowerPoint, workbook, study-guide and cellular-guide visuals, including male/female reproductive-system diagrams, sperm and egg diagrams, embryo stages, fetal-support structures, placental exchange diagrams, tissue images and the cellular hero image.

## Chronological user requirements and revisions

1. Build an interactive website from the supplied PowerPoint for Core 1–8 and Supplement/Extended 9–10. Include learning objectives framed as **What / Why / How**, a starter at the beginning, questions after learning sessions, student-oriented language, and a plenary at the end.
2. Cover the required syllabus content: male reproductive anatomy and functions; female reproductive anatomy and functions; fertilisation as fusion of nuclei; sperm adaptations; egg adaptations; gamete comparison; zygote-to-embryo development and implantation; fetal-support structures; placental/umbilical exchange; and transfer of pathogens and toxins.
3. Replace an initially generic/unsuitable header and visual treatment with original supplied pictures from the PowerPoint and attached worksheets. Use a light editorial page around a large full-width medical/cellular cover image.
4. Add clickable diagrams, reveal cards, matching/ordering-style interactions where appropriate, automatic marking, immediate feedback, progress tracking, workbook-derived questions and a confidence check.
5. Add a few auto-marked questions to each substantive session. Answer choices must shuffle on page load while the correct answer remains identified in data attributes. Correct choices add progress and show positive feedback; incorrect choices show retry feedback without falsely completing the check.
6. Remove the two unwanted Objectives questions: the question about the lens that connects a structure to its problem, and the question asking which syllabus point comes first. Keep the What / Why / How objectives and the syllabus map.
7. Restore the original header-first layout after a chronology refactor accidentally removed it. The cover must appear before the Starter section, with the title and explanatory copy over the supplied cellular hero image.
8. Move the **More than labels / Core 1–2 notes** section earlier, before the interactive anatomy section. Remove its repeated later-topic exchange and fetal-support blocks so Core 7–8 and Supplement 9–10 are taught in their own later sections rather than being duplicated in the notes section.
9. Keep the main teaching flow chronological: Starter → Objectives → Core 1–2 notes → interactive anatomy → Core 3–6 gametes/fertilisation → Core 7–8 development/fetal support → Supplement 9–10 exchange/risk → Workbook → Plenary.
10. Increase readability repeatedly at the user’s request. General lesson content must not fall below 18px; questions and answer controls are approximately 22–24px. The comparison table and definitions table use 22px text, and major explanatory anchors use approximately 24–30px text.
11. Place the magnifying-glass icon at the end of the complete “Know the lens you are using.” phrase. Keep that phrase in one row on desktop and scale it down responsively on narrow screens so it remains inside the layout.
12. Keep “More than labels.” on one line on desktop, with a mobile-safe wrap fallback. Keep “Built for the same moment.” on one row above its fertilisation explanation, with a mobile-safe wrap fallback.
13. Enlarge the `23 + 23 → 46` fusion graphic, the sperm-versus-egg comparison table headers and rows, and the `Term / Exam-ready definition` table.
14. Enlarge the Core 7–8 chronology anchor: “Zygote → embryo → implantation: the order matters. Then four support systems keep the fetus alive.” Enlarge the Supplement explanation: “Placental exchange: useful molecules cross between maternal and fetal blood. Some pathogens and toxins can cross too.” Enlarge the Core 3–6 fertilisation explanation and the workbook instruction: “These questions are adapted directly from the attached revision workbook. Answer, submit, improve.”
15. Reduce the hero title and the objectives phrase/icon slightly when necessary so they stay inside the deck on desktop and mobile. Keep the cover readable with a dark contrast band behind its caption.
16. Avoid distorted-looking `f` and `j` glyphs in explanatory text. The final typography pass uses a clean DM Sans sans-serif rendering for major explanatory sentences, disables ligature effects for those passages, and avoids relying on decorative italic display glyphs for body-copy readability.

## Current page architecture

- `index.html`: semantic single-page lesson markup with a fixed chapter header, full-width hero cover, ordered lesson sections, syllabus map, diagrams, tables, question cards, workbook questions, plenary and confidence slider.
- `src/main.js`: progress state, automatic marking, retry feedback, answer shuffling, clickable diagram reveals, tabbed male/female diagrams, fetal-support tabs, timeline interactions, smooth scrolling and reveal animations.
- `src/styles.css`: editorial light/dark chapter system, responsive layout, oversized typography, cover treatment, animation/reveal states, readable assessment controls, table scaling and mobile fallbacks.
- `public/assets/`: all current visual assets used by the page, including the original extracted study visuals.
- `public/manus-routes.json`: route declaration for the single-page root route.
- `app.config.ts`: project logo metadata configuration.
- `package.json` and `package-lock.json`: Vite build configuration and pinned dependency metadata.
- `TODO.md`: implementation acceptance checklist.

## Visual language

The visual direction is a premium editorial medical-study studio: warm paper/light backgrounds, ink navy, coral, yellow and lilac chapter accents, full-width cellular imagery, oversized type, thin rules, compact chapter stamps, mono-style metadata, serif/sans display contrast, high-resolution diagrams, hover/reveal states and subtle scroll-in motion. The interface should feel like a beautifully designed revision workbook rather than a generic dashboard.

Use large clear images, generous whitespace, strong contrast and student-oriented microcopy. Keep scientific labels precise. Use explicit source captions such as “Study guide visual” or “PowerPoint visual” where supplied-source imagery is shown.

## Educational and interaction rules

- Present the syllabus map in numerical order 01–10.
- Core 1–2: identify and state functions for testes, scrotum, sperm ducts, prostate gland, urethra, penis, ovaries, oviducts, uterus, cervix and vagina.
- Core 3–6: define fertilisation; explain flagellum, mitochondria and acrosome enzymes; explain egg energy stores and the jelly-coat change; compare size, structure, motility and numbers.
- Core 7–8: show the sequence fertilisation → zygote → mitotic divisions → embryo → implantation; identify and explain placenta, umbilical cord, amniotic sac and amniotic fluid.
- Supplement 9–10: explain dissolved nutrient/gas/waste exchange without direct maternal/fetal blood mixing; warn that pathogens and toxins can cross and affect the fetus.
- Every substantive lesson section should offer at least two checks, except where the user explicitly requested removal of a particular question set. The current Objectives section intentionally has no removed Session 02 retrieval questions, while the earlier Core 1–2 notes, anatomy, gamete, development, exchange, workbook and plenary sections retain their intended checks.
- Never mark an incorrect answer as complete. Keep answer feedback visible and retryable.

## Important limitation

This file documents the project-specific user requirements, design decisions and implementation behavior. It intentionally does not reproduce private platform/system prompts or hidden internal instructions.
