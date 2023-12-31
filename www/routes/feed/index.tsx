import { JSX } from "preact";
import { useState } from "preact/hooks";
import {
  ActionStyleTypes,
  BuildFeedCard,
  BuildFeedCardProps,
  FeedCard,
  FeedCardList,
  FeedCardListProps,
  PostFormProps,
  PostWithFeed,
  PostWithFeedProps,
  Tab,
  Tabs,
} from "@atomic/design";
import { Icon } from "$fathym/atomic-icons";
import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as feedSvc } from "../api/feed.ts";

const actionStyles = {
  actionStyle: ActionStyleTypes.None,
  class: "flex-grow flex",
};

const iconStyles = {
  class: "w-[24px] h-[24px] mr-2",
};

function loadFeedItems(feedData: any[]): BuildFeedCardProps[] {
  return feedData.map((item: any, index: number) => {
    const avatar = item.Contributors
      ? item.Contributors[0].UserImage
      : item.Avatar;

    const actions = item.Actions.map((action: any) => {
      if (action.Action.startsWith("./")) {
        action.Action = action.Action.replace("./", "/");
      }

      const href = action.Action.startsWith("/")
        ? `https://www.fathym.com${action.Action}`
        : action.Action;

      return {
        ...actionStyles,
        href,
        target: "_blank",
        children: (
          <>
            <Icon
              {...iconStyles}
              icon={action.Icon}
              src="./iconset/icons"
            />

            {action.Text}
          </>
        ),
      };
    });

    const tabs = item.Tabs
      ? item.Tabs.map((tab: any) => {
        return {
          label: tab.Title,
          content: <div dangerouslySetInnerHTML={{ __html: tab.Content }} />,
        } as Tab;
      })
      : undefined;

    return {
      title: <span class="font-bold">{item.Title}</span>,
      repository: item.Subtitle,
      subtext: item.Subtext,
      actions: actions,
      avatar: avatar,
      buildStatus: item.Status?.Message,
      timestamp: item.Timestamp,
      key: index,
      class: "m-4 md:m-8",
      children: tabs && <Tabs tabs={tabs} />,
    };
  });
}

function loadAdvertisements(feedData: any[]): JSX.Element[] {
  return feedData.map((item: any) => {
    const actions = item.Actions.map((action: any) => {
      return {
        actionStyle: ActionStyleTypes.Solid | ActionStyleTypes.Rounded |
          ActionStyleTypes.Link,
        href: action.Action,
        class: "flex",
        children: (
          <>
            <Icon {...iconStyles} icon={action.Icon} src="./iconset/icons" />
            {action.Text}
          </>
        ),
      };
    });

    return (
      <FeedCard
        title={item.Description}
        subtitle={item.Lead}
        avatar={item.Image}
        actions={actions}
      />
    );
  });
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await feedSvc.GET!(req, ctx);
    const feedData = await resp.json();

    return ctx.render({
      items: loadFeedItems(feedData.Items),
      advertisements: loadAdvertisements(feedData.Advertisements),
    });
  },
};

export default function Feed(props: PageProps): JSX.Element {
  const [data, setData] = useState<
    { items: BuildFeedCardProps[]; advertisements: BuildFeedCardProps[] }
  >({ items: [], advertisements: [] });

  setData(props.data);

  const items = data.items.map((item: BuildFeedCardProps) => {
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
    class: "m-4 md:m-8",
    avatar: "https://github.com/mcgear.png",
  };

  const postWithFeedProps: PostWithFeedProps = {
    feedCardListProps: feedCardListProps,
    postFormProps: postFormProps,
  };

  return (
    <div class="mx-auto flex justify-center align-middle">
      <PostWithFeed {...postWithFeedProps} class="max-w-screen-md" />
      <FeedCardList
        cards={data.advertisements}
        class="m-4 md:m-8 w-[350px]"
      />
    </div>
  );
}
