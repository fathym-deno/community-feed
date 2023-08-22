import { Handlers } from "$fresh/server.ts";

// deno-lint-ignore no-explicit-any
const EXAMPLE_DATA: any[] = [
  {
    username: "John Doe",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "2 hours ago",
    userId: "1",
    content:
      "Finally got the build to pass after fixing that pesky syntax error!",
  },
  {
    username: "Jane Smith",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "3 hours ago",
    userId: "2",
    content:
      "Deployed the latest version of the app to production and everything is working smoothly!",
  },
  {
    username: "Bob Johnson",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "4 hours ago",
    userId: "3",
    content:
      "The tests are failing again, time to roll up my sleeves and debug!",
  },
  {
    username: "Alice Lee",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "5 hours ago",
    userId: "4",
    content:
      "Just finished refactoring the codebase and it's looking much cleaner now!",
  },
  {
    username: "Mark Davis",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "6 hours ago",
    userId: "5",
    content:
      "The build failed again, but this time I know exactly what's causing it!",
  },
  {
    username: "Sarah Kim",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "7 hours ago",
    userId: "6",
    content:
      "Spent the day optimizing the database queries and the app is running much faster now!",
  },
  {
    username: "Tom Wilson",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "8 hours ago",
    userId: "7",
    content:
      "The deployment failed due to a network issue, but we're working on fixing it!",
  },
  {
    username: "Emily Chen",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "9 hours ago",
    userId: "8",
    content:
      "The tests are passing again after fixing that edge case that was causing issues!",
  },
  {
    username: "David Brown",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "10 hours ago",
    userId: "9",
    content:
      "Just finished implementing that new feature and it's looking great!",
  },
  {
    username: "Karen Lee",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "11 hours ago",
    userId: "10",
    content: "The build is taking forever, time to optimize the build process!",
  },
  {
    username: "Mike Johnson",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "12 hours ago",
    userId: "11",
    content:
      "The deployment is taking longer than expected, but we're making progress!",
  },
  {
    username: "Linda Davis",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "13 hours ago",
    userId: "12",
    content:
      "The tests are failing again, but this time it's due to a new bug that we need to fix!",
  },
  {
    username: "Chris Kim",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "14 hours ago",
    userId: "13",
    content:
      "Just finished writing that new script that automates the deployment process!",
  },
  {
    username: "Jessica Lee",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "15 hours ago",
    userId: "14",
    content:
      "The build is failing due to a dependency issue, time to update the dependencies!",
  },
  {
    username: "Steve Brown",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "16 hours ago",
    userId: "15",
    content:
      "The deployment is finally complete and everything is working as expected!",
  },
  {
    username: "Rachel Johnson",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "17 hours ago",
    userId: "16",
    content:
      "The tests are passing again after fixing that bug that was causing issues!",
  },
  {
    username: "Tom Lee",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "18 hours ago",
    userId: "17",
    content: "Just finished writing that new feature and it's looking great!",
  },
  {
    username: "Emily Davis",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "19 hours ago",
    userId: "18",
    content:
      "The build is taking longer than expected, but we're making progress!",
  },
  {
    username: "David Kim",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "20 hours ago",
    userId: "19",
    content:
      "The deployment failed due to a configuration issue, but we're working on fixing it!",
  },
  {
    username: "Karen Johnson",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "21 hours ago",
    userId: "20",
    content:
      "The tests are failing again, but this time it's due to a new bug that we need to fix!",
  },
];

export const handler: Handlers = {
  async GET(_req, ctx) {
    return new Response(JSON.stringify(EXAMPLE_DATA));
  },
};
