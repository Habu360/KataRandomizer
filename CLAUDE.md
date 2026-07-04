# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A small React + TypeScript app that randomly selects a karate kata and an accompanying action (bunkai, renzoku, kumite, etc.) for a style chosen by the user. Pure client-side, no backend — built mainly as a React/TypeScript learning project.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server (prints a `localhost` URL)
- `npm run build` — type-check (`tsc`) then build with Vite
- `npm run lint` — ESLint over `.ts`/`.tsx` with `--max-warnings 0`
- `npm run preview` — preview the production build locally
- `npm run deploy` — build and publish `dist/` to GitHub Pages via `gh-pages` (site is served from `/KataRandomizer/`, configured in `vite.config.ts`)

There is no test suite/runner configured in this repo.

## Architecture

Everything client-side, driven by one static data file: `src/assets/karatedata.json`, which has five top-level arrays: `Styles`, `Katas` (each tagged with a `styleid` and optional `category` of `"long"`/`"short"`), `Actions`, `KobudoActions`, and `Quotes`. There is no API layer — components import this JSON directly and filter it in place.

All state lives in `App.tsx`, which owns the selected style/category/kata/action and passes data down as props; there is no context or external state library. Style names are matched by hardcoded strings (`"Isshinryu"`, `"Tokushinryu"`, `"Ryukonkai"`, `"Dojo"`, `"Other"`) in `getRandomDataForStyle`, each mapped to a numeric `styleid` and to either `Actions` (empty-hand styles) or `KobudoActions` (weapon styles). When adding a new style, this string-matching block is the place to extend, and the string must match the `name` field for that style's entry in `karatedata.json`.

`ListGroup.tsx` hardcodes which list indices behave which way: indices `0` and `3` (Isshinryu, Dojo) are directly selectable; indices `1` and `2` (Tokushinryu, Ryukonkai — the weapon/kobudo styles) instead render "long/short/all" category buttons rather than being directly clickable. This index-based behavior is tied to the fixed order of `Styles` in `karatedata.json`, not to any property on the style itself.

The "randomize" flow (`displayData` in `App.tsx`) fakes async work: it shows `SpinnerComponent` (which also renders a random quote) for a fixed 1500ms via `setTimeout`, then computes and reveals the actual result — there's no real async operation underneath.

Localization uses `i18next`/`react-i18next`. Translation strings are defined inline as JS objects in `src/i18n.ts` (currently `en`, `da`, `de`, `es`) rather than external locale files; language is auto-set from `navigator.language` in a `useEffect` in both `App.tsx` and several components. New UI strings need a key added to every language block in `src/i18n.ts`.

`CollapseButton.tsx` and `TestButton.tsx` are leftover scratch/demo components not imported anywhere in the app — don't treat them as live code paths.
