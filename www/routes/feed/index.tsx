import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Action, ActionStyleTypes, FeedCard } from "@atomic/design";
import { AddIcon, SubtractIcon } from "$fathym/atomic-icons";
import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as feedSvc } from "../api/feed.ts";
import { FeedCardList, FeedCardListProps } from "@atomic/design";
import { PostWithFeed, PostWithFeedProps } from "@atomic/design";
import { PostForm, PostFormProps } from "@atomic/design";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await feedSvc.GET!(req, ctx);
    const feedData = await resp.json();
    return ctx.render(feedData);
  },
};

export default function Feed(props: PageProps): JSX.Element {
  // deno-lint-ignore no-explicit-any
  const [data, setData] = useState<any[]>([]);

  setData(props.data);

  const actionStyles = {
    actionStyle: ActionStyleTypes.None,
    class: "flex-grow",
  };

  const iconStyles = {
    class: "w-[24px] h-[24px] mx-auto",
  };

  const actions = [
    {
      ...actionStyles,
      href: "#add",
      children: <AddIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#subtract",
      children: <SubtractIcon {...iconStyles} />,
    },
  ];

  const feedCardListProps: FeedCardListProps = {
    cards: data.map((item: any, index: number) => ({
      key: index,
      username: item.username,
      avatar: item.avatar,
      timestamp: item.timestamp,
      actions: actions,
      class: "m-4 md:m-8",
      children: item.content,
    })),
    loadMore: {
      actionStyle: ActionStyleTypes.Solid | ActionStyleTypes.Rounded,
      class: "flex-grow max-w-sm text-center m-4 md:m-8",
      href: "#load-more",
      children: "Load More",
    },
  };

  const postFormProps: PostFormProps = {
    avatar: "path/to/avatar.png",
  };

  const postWithFeedProps: PostWithFeedProps = {
    feedCardListProps: feedCardListProps,
    postFormProps: postFormProps,
  };

  return (
    <div class="max-w-screen-md mx-auto flex">
      <PostWithFeed {...postWithFeedProps} />
    </div>
  );
}