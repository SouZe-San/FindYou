import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(_req: Request) {
    const body = await _req.json();

    const modifiedUrl = body.eventUrl.replace(/{\/privacy}/, "");
    const res = await fetch(modifiedUrl, { method: "GET" });

    if (res.status === 404) {
      return new Response(null, { status: 404 });
    }

    const eventArray = await res.json();
    return new Response(JSON.stringify(eventArray));
  },
};
