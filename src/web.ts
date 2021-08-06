import { WebPlugin } from '@capacitor/core';

import type { WebViewCapacitorPlugin, LoadUrlOptions } from './definitions';

export class WebViewCapacitorWeb extends WebPlugin implements WebViewCapacitorPlugin {
    async echo(options: { value: string }): Promise<{ value: string }> {
      console.log('ECHO', options);
      return options;
    }

    async loadUrl(options: LoadUrlOptions): Promise<{ url: string }> {
      window.location.href = options.url;
      return options;
    }
}
