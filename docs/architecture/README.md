# Fathym Community Feed Project Architecture

The Fathym Community Feed is a Deno based project for creating customized feeds
of information for different communities. It includes:

- Aggregators - Feed aggregators, based on user and community preferences, are
  responsible for retrieving information from various sources and converting it
  into feed items.
- Feed State - The feed state is responsible for continuously updating with
  information from Aggregators and handling actions from users. There are many
  hooks available for customizing how the feed state functions.
- Feed UI - The Feed UI is renders the current state of the feed in the context
  of a user within a community. It is a fully functional UI for a feed, with
  many different configurations for some of the baseic settings. The UI
  componenets can also be used individually to create a more custom feed
  experience.

## Aggregators

Each aggregator is an individual deno process, run in a docker container, that
is responsible for retrieving information from its source. There are multiple
aggregator patterns to choose from:

- Polling - A polling aggregator can be configured to poll an API endpoint at a
  given interval and then translate the results into a feed item.
- WebHook - A webhook aggregator is setup with an external system to recieve
  events and translate them into a feed item.
- SignalR (WebSocket) - A signalR aggregator connects to a specific SignalR hub
  and listens for specific messages to translate into feed items.
- Custom - Aggregators leverage a simple API to write information from sources
  into feed items, allowing for custom implementations.

In addition to these low level APIs, a library of aggregators can be found in
the docs. These implement common aggregator patterns like with GitHub, Reddit,
and Linkedin.

## Feed State

## Feed UI
