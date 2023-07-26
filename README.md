# Fathym Community Feed Project

The Fathym Community Feed is an out of the box solution for creating a community
feed.

- Project - The Project is the top level grouping of communities, users, and
  feed items.
- Communities - A community is a curated collection of information provided to
  the users of that community.
- Users - A User is a member of platform and can access, create, and support
  communities.
- User Types - User types are defined to help control what users are allowed to
  do within a community.
- Feed - The Feed is a display of items in context of the current user and
  community. It shows not only the community feed items, but also the customized
  feed items configured by that user for the project as a whole or within a
  specific communities.

## Getting Started

Getting started is simple, but requires a few prerequisites:

1. Deno installed
2. Docker installed
3. Put a smile on your face

Once everything is installed you can started with a new project by running the
following command to startup the whole default system:

```cli
fathym lcu @fathym-deno/quick-start-community-feed
```

This will start an interactive setup wizard that will help scaffold your
project, configure an initial community, and setup standard aggregators. In
addition, this will configure GitHub actions, cloud infrastructure, and
deployment automation for your project.
