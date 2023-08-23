import { Handlers } from "$fresh/server.ts";
import { BuildFeedCardProps } from "@atomic/design";

const EXAMPLE_DATA: BuildFeedCardProps[] = [
  // Existing data...
];

export const handler: Handlers = {
  async GET(req, ctx) {
    const page = req.url.searchParams.get("page");
    const pageSize = req.url.searchParams.get("pageSize");
    const types = req.url.searchParams.get("types");
    const project = req.url.searchParams.get("project");
    const apps = req.url.searchParams.get("applications");

    const apiRoot = Deno.env.get("API_ROOT");
    const functionsKey = Deno.env.get("FUNCTIONS_KEY");

    const url = `${apiRoot}/api/lowcodeunit/userfeed?page=${page}&pageSize=${pageSize}&types=${types}&project=${project}&applications=${apps}`;

    const response = await fetch(url, {
      headers: {
        "x-functions-key": functionsKey,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user feed");
    }

    const data = await response.json();

    return new Response(JSON.stringify(data));
  },
};