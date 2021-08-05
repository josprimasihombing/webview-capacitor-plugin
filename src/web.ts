import { WebPlugin } from '@capacitor/core';

import type { WebViewCapacitorPlugin } from './definitions';

export class WebViewCapacitorWeb
  extends WebPlugin
  implements WebViewCapacitorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
