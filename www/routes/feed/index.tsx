import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Action, ActionStyleTypes, FeedCard } from "@atomic/design";
import { DiscussionIcon, LikedIcon, QuipIcon, VoteIcon } from "$fathym/atomic-icons";
import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as feedSvc } from "../api/feed.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await feedSvc.GET!(req, ctx);
    const feedData = await resp.json();
    return ctx.render(feedData);
  },
};

export default function Feed(props: PageProps): JSX.Element {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

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
      href: "#quip",
      children: <QuipIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#vote",
      children: <VoteIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#discuss",
      children: <DiscussionIcon {...iconStyles} />,
    },
    {
      ...actionStyles,
      href: "#like",
      children: <LikedIcon {...iconStyles} />,
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <FeedCard
          key={index}
          title={item.title}
          content={item.content}
          actions={actions}
        />
      ))}
      <Action
        actionStyle={ActionStyleTypes.None}
        class="flex-grow"
        href="#load-more"
      >
        Load More
      </Action>
    </div>
  );
}
