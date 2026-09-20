# event-overview

The hero / overview page for the **AI-Driven Event Management System** concept — the
pitch, the "how it works" explanation, an inline scripted walkthrough of one scenario,
and a link out to the real conversational prototype (`event-agent` / `event-agent-ui`).

**Status:** R&D concept evaluation, not a production system. Not affiliated with,
endorsed by, or produced in association with TED Conferences LLC or the TEDx program.

This is a static page with no build step — `public/index.html` is the whole thing.

## Team taxonomy

The six agents on this page follow TED's own Organizer Guide (Curation, Production,
Event Operations, Fundraising & Budget, Communications & Marketing), with one addition:
**HR & Volunteers** isn't a standalone category in TED's guide, but recruiting,
screening and day-of volunteer coordination proved substantial enough — drawn from
direct experience running TEDx Torino — to warrant its own agent rather than folding
into Operations.

## Local development

```bash
wrangler dev
```

## Deploy

```bash
wrangler deploy
```

Cloudflare Workers Builds is connected to this repo's `master` branch — pushing to
GitHub deploys automatically; `wrangler deploy` is only needed for local testing.

## Related

- `event-agent` — the BYOK chat API behind the live prototype linked from this page.
- `event-agent-ui` — the chat frontend for that prototype.
