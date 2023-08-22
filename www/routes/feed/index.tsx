import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Action, ActionStyleTypes, FeedCard } from "@atomic/design";
import { AddIcon, SubtractIcon } from "$fathym/atomic-icons";
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

  return (
    <div>
      {data.map((item, index) => (
        <FeedCard
          key={index}
          username={item.username}
          avatar={item.avatar}
          timestamp={item.timestamp}
          actions={actions}
          class="m-4 md:m-8"
        >
          {item.content}
        </FeedCard>
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
