import { start, manifest } from '$fresh/';
import { curIconSetGenerateConfig } from './fathym-atomic-icons.config.ts';
import { iconSetPlugin } from '@fathym/atomic-icons';

await start(manifest, {
  plugins: [await iconSetPlugin(curIconSetGenerateConfig)],
});