import { IconSetConfig, IconSetGenerateConfig } from "@fathym/atomic-icons";

export const curIconSetConfig: IconSetConfig = {
  IconMap: {
    "add": "https://api.iconify.design/material-symbols:add-circle.svg",
    "build-details":
      "https://api.iconify.design/material-symbols:build-outline.svg",
    "code": "https://api.iconify.design/mdi:source-repository.svg",
    "plumbing": "https://api.iconify.design/material-symbols:build-outline.svg",
    "repository": "https://api.iconify.design/mdi:source-repository.svg",
  },
  Optimize: true,
};

export const curIconSetGenerateConfig: IconSetGenerateConfig = {
  Exports: true,
  IconSet: curIconSetConfig,
  SpriteSheet: "./iconset/icons",
};
