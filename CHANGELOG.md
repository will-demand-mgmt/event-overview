# Changelog

All notable changes to `event-overview` are logged here. Versions are bumped by hand
in `src/worker.js` (`APP_VERSION`); the page cross-checks that against Cloudflare's own
automatic deployment id at `/__version`.

## 0.1.0 — 2026-09-18

- Initial publish, migrated from a Claude artifact into its own repo/deployment.
- Team taxonomy reworked to six agents grounded in TED's official Organizer Guide
  (Curation, Production, Operations, Fundraising & Budget, Communications & Marketing),
  plus HR & Volunteers kept as a deliberate addition from direct TEDx Torino experience.
- Diagram and scripted walkthrough updated to match (was five agents, "Sponsorship").
- New "Try it live" section linking to the deployed `event-agent-ui` prototype, with a
  real excerpt from an actual exchange with it.
- Version display added (this file + the `/__version` endpoint + a footer badge).
