export interface WebViewCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  loadUrl(options: LoadUrlOptions): Promise<{ url: string }>;
}

export interface LoadUrlOptions {
  url: string,
}
