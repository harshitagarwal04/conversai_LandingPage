interface Window {
  clarity?: {
    (action: string, ...args: unknown[]): void;
    q?: Array<[string, ...unknown[]]>;
  };
  dataLayer?: Array<Record<string, unknown>>;
  Cal?: {
    (action: string, config?: Record<string, unknown>): void;
  };
}