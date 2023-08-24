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

    return ctx.render(
      // deno-lint-ignore no-explicit-any
      feedData.Items.map((item: Record<string, any>, index: number) => {
        const avatar = item.Contributors
          ? item.Contributors[0].UserImage
          : item.Avatar;

        // deno-lint-ignore no-explicit-any
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
              content: (
                <div dangerouslySetInnerHTML={{ __html: tab.Content }} />
              ),
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
    avatar: "https://github.com/mcgear.png",
  };

  const secondColumnData = [
    {
      Actions: [
        {
          Action: "/dashboard/create-project",
          ActionType: "Link",
          Color: "",
          Icon: "add",
          Text: "Create Project",
        },
      ],
      Description:
        "Build trust with your audience and drive traffic to your site.",
      Image: "https://www.fathym.com/img/questions/dotcomcircle.png",
      Lead: "Strengthen your brand with a custom domain",
      Position: "End",
    },
  ];

  const secondColumnCards = secondColumnData.map((item) => {
    const actions = item.Actions.map((action: any) => {
      return {
        actionStyle: ActionStyleTypes.Solid | ActionStyleTypes.Rounded |
          ActionStyleTypes.Link,
        href: action.Action,
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

  const postWithFeedProps: PostWithFeedProps = {
    feedCardListProps: feedCardListProps,
    postFormProps: postFormProps,
  };

  return (
    <div class="max-w-screen-md mx-auto flex">
      <PostWithFeed {...postWithFeedProps} />
      <div class="ml-4 md:ml-8">
        <FeedCardList cards={secondColumnCards}></FeedCardList>
      </div>
    </div>
  );
}
