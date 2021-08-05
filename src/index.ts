import { registerPlugin } from '@capacitor/core';

import type { WebViewCapacitorPlugin } from './definitions';

const WebViewCapacitor = registerPlugin<WebViewCapacitorPlugin>(
  'WebViewCapacitor',
  {
    web: () => import('./web').then(m => new m.WebViewCapacitorWeb()),
  },
);

export * from './definitions';
export { WebViewCapacitor };
