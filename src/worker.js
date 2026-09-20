/**
 * event-overview — Cloudflare Worker (static assets + version endpoint)
 *
 * Serves the hero/overview page for the AI-Driven Event Management System
 * concept from ./public. The only logic here is a tiny /__version route so
 * the page itself can display which build is live — see public/index.html.
 */

// Bump this by hand on every release that's worth calling out. It's the
// human-readable half of the version story; env.VERSION (Cloudflare's
// version_metadata binding) supplies the automatic half — an id that's
// always accurate but not meant to be memorized. See CHANGELOG.md.
const APP_VERSION = "0.1.0";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/__version") {
      return new Response(
        JSON.stringify({
          service: "event-overview",
          version: APP_VERSION,
          deploymentId: env.VERSION?.id || null,
          deploymentTag: env.VERSION?.tag || null,
        }),
        { headers: { "content-type": "application/json" } }
      );
    }

    return env.ASSETS.fetch(request);
  },
};
