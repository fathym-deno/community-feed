import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import {
  Action,
  ActionStyleTypes,
  BuildFeedCard,
  BuildFeedCardProps,
  FeedCard,
  FeedCardList,
  FeedCardListProps,
  FeedCardProps,
  PostForm,
  PostFormProps,
  PostWithFeed,
  PostWithFeedProps,
} from "@atomic/design";
import { BuildDetailsIcon, RepositoryIcon } from "$fathym/atomic-icons";
import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as feedSvc } from "../api/feed.ts";
import InteractivePostWithFeed from "../../islands/InteractivePostWithFeed.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await feedSvc.GET!(req, ctx);

    const feedData = await resp.json();

    const actionStyles = {
      actionStyle: ActionStyleTypes.None,
      class: "flex-grow flex",
    };

    const iconStyles = {
      class: "w-[24px] h-[24px] ml-2",
    };

    const actions = [
      {
        ...actionStyles,
        href: "#build",
        children: (
          <>
            <BuildDetailsIcon {...iconStyles} />

            Build Details
          </>
        ),
      },
      {
        ...actionStyles,
        href: "#open",
        children: (
          <>
            <RepositoryIcon {...iconStyles} />

            Open Repository
          </>
        ),
      },
    ];

    return ctx.render(
      // deno-lint-ignore no-explicit-any
      feedData.Items.map((item: Record<string, any>, index: number) => {
        const avatar = item.Contributors
          ? item.Contributors[0].UserImage
          : item.Avatar;

        return {
          title: <span class="font-bold">{item.Title}</span>,
          repository: item.Subtitle,
          actions: actions,
          subtext: item.Subtext,
          avatar: avatar,
          key: index,
          class: "m-4 md:m-8",
        };
      }),
    );
  },
};

export default function Feed(props: PageProps): JSX.Element {
  const [data, setData] = useState<BuildFeedCardProps[]>([]);

  setData(props.data);

  const items = data.map((item: BuildFeedCardProps) => {
    return item;
  });

  const feedCardListProps: FeedCardListProps = {
    cards: (
      <>
        {items.map((item) => <BuildFeedCard {...item} />)}
      </>
    ),
    loadMore: {
      actionStyle: ActionStyleTypes.Solid | ActionStyleTypes.Rounded,
      class: "flex-grow max-w-sm text-center m-4 md:m-8",
      href: "#load-more",
      children: "Load More",
    },
  };

  const postFormProps: PostFormProps = {
    class: "mt-4 md:mt-8",
    avatar: "https://i.imgur.com/1zvWYJL.jpg",
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
