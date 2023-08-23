import { Handlers } from "$fresh/server.ts";
import { BuildFeedCardProps } from "@atomic/design";

const EXAMPLE_DATA: BuildFeedCardProps[] = [
  {
    username: "John Doe",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "2 hours ago",
    userId: "1",
    content: "Finally got the build to pass after fixing that pesky syntax error!",
    repository: "fathym-atomic",
    buildNumber: 1,
    buildStatus: "Success"
  },
  {
    username: "Jane Smith",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "3 hours ago",
    userId: "2",
    content: "Deployed the latest version of the app to production and everything is working smoothly!",
    repository: "fathym-atomic",
    buildNumber: 2,
    buildStatus: "Success"
  },
  {
    username: "Bob Johnson",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "4 hours ago",
    userId: "3",
    content: "The tests are failing again, time to roll up my sleeves and debug!",
    repository: "fathym-atomic",
    buildNumber: 3,
    buildStatus: "Failed"
  },
  {
    username: "Alice Lee",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "5 hours ago",
    userId: "4",
    content: "Just finished refactoring the codebase and it's looking much cleaner now!",
    repository: "fathym-atomic",
    buildNumber: 4,
    buildStatus: "Success"
  },
  {
    username: "Mark Davis",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "6 hours ago",
    userId: "5",
    content: "The build failed again, but this time I know exactly what's causing it!",
    repository: "fathym-atomic",
    buildNumber: 5,
    buildStatus: "Failed"
  },
  {
    username: "Sarah Kim",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "7 hours ago",
    userId: "6",
    content: "Spent the day optimizing the database queries and the app is running much faster now!",
    repository: "fathym-atomic",
    buildNumber: 6,
    buildStatus: "Success"
  },
  {
    username: "Tom Wilson",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "8 hours ago",
    userId: "7",
    content: "The deployment failed due to a network issue, but we're working on fixing it!",
    repository: "fathym-atomic",
    buildNumber: 7,
    buildStatus: "Failed"
  },
  {
    username: "Emily Chen",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "9 hours ago",
    userId: "8",
    content: "The tests are passing again after fixing that edge case that was causing issues!",
    repository: "fathym-atomic",
    buildNumber: 8,
    buildStatus: "Success"
  },
  {
    username: "David Brown",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "10 hours ago",
    userId: "9",
    content: "Just finished implementing that new feature and it's looking great!",
    repository: "fathym-atomic",
    buildNumber: 9,
    buildStatus: "Success"
  },
  {
    username: "Karen Lee",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "11 hours ago",
    userId: "10",
    content: "The build is taking forever, time to optimize the build process!",
    repository: "fathym-atomic",
    buildNumber: 10,
    buildStatus: "Failed"
  },
  {
    username: "Mike Johnson",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "12 hours ago",
    userId: "11",
    content: "The deployment is taking longer than expected, but we're making progress!",
    repository: "fathym-atomic",
    buildNumber: 11,
    buildStatus: "In Progress"
  },
  {
    username: "Linda Davis",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "13 hours ago",
    userId: "12",
    content: "The tests are failing again, but this time it's due to a new bug that we need to fix!",
    repository: "fathym-atomic",
    buildNumber: 12,
    buildStatus: "Failed"
  },
  {
    username: "Chris Kim",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "14 hours ago",
    userId: "13",
    content: "Just finished writing that new script that automates the deployment process!",
    repository: "fathym-atomic",
    buildNumber: 13,
    buildStatus: "Success"
  },
  {
    username: "Jessica Lee",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "15 hours ago",
    userId: "14",
    content: "The build is failing due to a dependency issue, time to update the dependencies!",
    repository: "fathym-atomic",
    buildNumber: 14,
    buildStatus: "Failed"
  },
  {
    username: "Steve Brown",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "16 hours ago",
    userId: "15",
    content: "The deployment is finally complete and everything is working as expected!",
    repository: "fathym-atomic",
    buildNumber: 15,
    buildStatus: "Success"
  },
  {
    username: "Rachel Johnson",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "17 hours ago",
    userId: "16",
    content: "The tests are passing again after fixing that bug that was causing issues!",
    repository: "fathym-atomic",
    buildNumber: 16,
    buildStatus: "Success"
  },
  {
    username: "Tom Lee",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "18 hours ago",
    userId: "17",
    content: "Just finished writing that new feature and it's looking great!",
    repository: "fathym-atomic",
    buildNumber: 17,
    buildStatus: "Success"
  },
  {
    username: "Emily Davis",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "19 hours ago",
    userId: "18",
    content: "The build is taking longer than expected, but we're making progress!",
    repository: "fathym-atomic",
    buildNumber: 18,
    buildStatus: "In Progress"
  },
  {
    username: "David Kim",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
    timestamp: "20 hours ago",
    userId: "19",
    content: "The deployment failed due to a configuration issue, but we're working on fixing it!",
    repository: "fathym-atomic",
    buildNumber: 19,
    buildStatus: "Failed"
  },
  {
    username: "Karen Johnson",
    avatar: "https://i.imgur.com/5JZJZJL.jpg",
    timestamp: "21 hours ago",
    userId: "20",
    content: "The tests are failing again, but this time it's due to a new bug that we need to fix!",
    repository: "fathym-atomic",
    buildNumber: 20,
    buildStatus: "Failed"
  }
];

export const handler: Handlers = {
  async GET(_req, ctx) {
    return new Response(JSON.stringify(EXAMPLE_DATA));
  },
};