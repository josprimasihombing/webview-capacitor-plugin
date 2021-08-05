export interface WebViewCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
