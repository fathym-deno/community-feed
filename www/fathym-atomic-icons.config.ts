import { IconSetConfig, IconSetGenerateConfig } from "@fathym/atomic-icons";

export const curIconSetConfig: IconSetConfig = {
  IconMap: {
    "add": "https://api.iconify.design/material-symbols:add-circle-rounded.svg",
    "subtract":
      "https://api.iconify.design/fluent:subtract-circle-12-filled.svg",
  },
  Optimize: true,
};

export const curIconSetGenerateConfig: IconSetGenerateConfig = {
  Exports: true,
  IconSet: curIconSetConfig,
  SpriteSheet: "./iconset/icons",
};
