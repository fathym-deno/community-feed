import { Handlers } from "$fresh/server.ts";
import { BuildFeedCardProps } from "@atomic/design";

// const EXAMPLE_DATA: BuildFeedCardProps[] = [
//   {
//     title:
//       "Finally got the build to pass after fixing that pesky syntax error!",
//     children: "Children 1",
//     username: "John Doe",
//     avatar: "https://github.com/mcgear.png",
//     timestamp: "2 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 1,
//     buildStatus: "Success",
//   },
//   {
//     title:
//       "Deployed the latest version of the app to production and everything is working smoothly!",
//     children: "Children 2",
//     username: "Jane Smith",
//     avatar: "https://i.imgur.com/5JZJZJL.jpg",
//     timestamp: "3 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 2,
//     buildStatus: "Success",
//   },
//   {
//     title: "Build failed due to syntax error",
//     children: "Children 3",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "4 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 3,
//     buildStatus: "Error",
//   },
//   {
//     title: "Fixed syntax error and re-run build",
//     children: "Children 4",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "5 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 4,
//     buildStatus: "Error",
//   },
//   {
//     title: "Fixed another syntax error and re-run build",
//     children: "Children 5",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "6 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 5,
//     buildStatus: "Error",
//   },
//   {
//     title: "Fixed all syntax errors and re-run build",
//     children: "Children 6",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "7 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 6,
//     buildStatus: "Success",
//   },
//   {
//     title: "Deployed the latest version of the app to production",
//     children: "Children 7",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "8 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 7,
//     buildStatus: "Success",
//   },
//   {
//     title: "Introduced a new bug and re-run build",
//     children: "Children 8",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "9 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 8,
//     buildStatus: "Error",
//   },
//   {
//     title: "Fixed the bug and re-run build",
//     children: "Children 9",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "10 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 9,
//     buildStatus: "Success",
//   },
//   {
//     title: "Added a new feature and re-run build",
//     children: "Children 10",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "11 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 10,
//     buildStatus: "Success",
//   },
//   {
//     title: "Refactored the code and re-run build",
//     children: "Children 11",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "12 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 11,
//     buildStatus: "Success",
//   },
//   {
//     title: "Added more unit tests and re-run build",
//     children: "Children 12",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "13 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 12,
//     buildStatus: "Success",
//   },
//   {
//     title: "Optimized performance and re-run build",
//     children: "Children 13",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "14 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 13,
//     buildStatus: "Success",
//   },
//   {
//     title: "Added more documentation and re-run build",
//     children: "Children 14",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "15 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 14,
//     buildStatus: "Success",
//   },
//   {
//     title: "Fixed a critical bug and re-run build",
//     children: "Children 15",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "16 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 15,
//     buildStatus: "Success",
//   },
//   {
//     title: "Added a new feature and re-run build",
//     children: "Children 16",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "17 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 16,
//     buildStatus: "Success",
//   },
//   {
//     title: "Refactored the code and re-run build",
//     children: "Children 17",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "18 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 17,
//     buildStatus: "Success",
//   },
//   {
//     title: "Added more unit tests and re-run build",
//     children: "Children 18",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "19 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 18,
//     buildStatus: "Success",
//   },
//   {
//     title: "Optimized performance and re-run build",
//     children: "Children 19",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "20 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 19,
//     buildStatus: "Success",
//   },
//   {
//     title: "Added more documentation and re-run build",
//     children: "Children 20",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "21 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 20,
//     buildStatus: "Success",
//   },
//   {
//     title: "Fixed a critical bug and re-run build",
//     children: "Children 21",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "22 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 21,
//     buildStatus: "Success",
//   },
//   {
//     title: "Build is green again!",
//     children: "Children 22",
//     username: "John Doe",
//     avatar: "https://i.imgur.com/1zvWYJL.jpg",
//     timestamp: "23 hours ago",
//     repository: "fathym-atomic",
//     buildNumber: 22,
//     buildStatus: "Success",
//   },
// ];

// export const handler: Handlers = {
//   async GET(_req, ctx) {
//     return new Response(JSON.stringify(EXAMPLE_DATA));
//   },
// };

export const handler: Handlers = {
  async GET(req, ctx) {
    const reqUrl = new URL(req.url);

    const page = reqUrl.searchParams.get("page") || 1;
    const pageSize = reqUrl.searchParams.get("pageSize") || 100;
    const types = reqUrl.searchParams.get("types") || [];
    const project = reqUrl.searchParams.get("project") || "";
    const apps = reqUrl.searchParams.get("applications") || "";

    const apiRoot = Deno.env.get("LOWCODEUNIT_API_ROOT")!;
    const apiKeyHeader = Deno.env.get("LOWCODEUNIT_API_KEY_HEADER")!;
    const apiKey = Deno.env.get("LOWCODEUNIT_API_KEY")!;
    const entLookup = Deno.env.get("ENT_LOOKUP")!;

    const url =
      `${apiRoot}/userfeed?page=${page}&pageSize=${pageSize}&types=${types}&project=${project}&applications=${apps}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        [apiKeyHeader]: apiKey,
        "lcu-ent-lookup": entLookup,
        "x-ms-client-principal-id": "michael.gearhardt@fathym.com",
      } as HeadersInit,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch user feed");
    }

    return new Response(JSON.stringify(data));
  },
};
