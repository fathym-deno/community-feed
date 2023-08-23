import { Handlers } from "$fresh/server.ts";
import { BuildFeedCardProps } from "@atomic/design";

export interface BuildFeedCardProps {
  title: string;
  children: string;
  username: string;
  avatar: string;
  timestamp: string;
  repository: string;
  buildNumber: number;
  buildStatus: string;
}

const EXAMPLE_DATA: BuildFeedCardProps[] = [
  {
    title:
      "Finally got the build to pass after fixing that pesky syntax error!",
    children: "Children 1",
    username: "John Doe",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "2 hours ago",
    repository: "fathym-atomic",
    buildNumber: 1,
    buildStatus: "Success",
  },
  {
    title:
      "Deployed the latest version of the app to production and everything is working smoothly!",
    children: "Children 2",
    username: "Jane Smith",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "3 hours ago",
    repository: "fathym-atomic",
    buildNumber: 2,
    buildStatus: "Success",
  },
  // Add more objects here as needed
];

export const handler: Handlers = {
  async GET(_req, ctx) {
    return new Response(JSON.stringify(EXAMPLE_DATA));
  },
};
