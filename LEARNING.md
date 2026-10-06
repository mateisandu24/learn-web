# Learning log

## Profile
- Background: C, C++ (OOP, DSA), Java (classes, models, services, TCP), Python (genetic algorithms), terminal and git basics.
- Knows HTML structure (head, body, header, footer).
- Hands-on: types as much code as possible. Looks up docs when stuck.
- Mentor rules: do not write code. Comment on mistakes and improvements. Point to official docs.

## Project
Habit tracker, built with the target stack in order:
1. Plain HTML/CSS/JS (foundations: DOM, events, storage)
2. React with Vite (components, state, props)
3. TypeScript strict (types, no `any`)
4. Next.js App Router (routing, server/client components)
5. Tailwind, then Zod, Vitest, Playwright, NextAuth, passkeys, Stripe, Turnstile, security headers, then backend (Prisma, PostgreSQL, Supabase, webhooks)

## Where we are
- `habit-tracker/index.html` is valid: doctype, html, head (meta + title), body (h1).
- Next step: DOM check in dev tools (Elements tab), then add a text box and an "Add" button in HTML.

## Concepts I've learned
- Doctype: first line, tells the browser to use modern rendering (no quirks mode).
- `head` vs `body`: head holds page info (title, meta), body holds what's displayed.
- `meta charset`: declares UTF-8 so special characters display correctly.
- `h1`: a real heading (document structure), not just big text.
- Browser repairs broken HTML silently, so the page can look fine while the file is wrong.

## Shaky / revisit
- Dev tools Elements tab check: not confirmed yet. Ask the user to show the top-level tree.

## Ideas for later
- Snake game or evolution simulator as a side project once the habit tracker is done.
- Use a genetic algorithm to tune habit reminder timing (ties to Python background).

## Glossary
- **DOM**: the page's live tree of elements in the browser. JavaScript reads and changes it.
- **Event**: something that happens on the page (click, key press, submit). Code can listen for it.
