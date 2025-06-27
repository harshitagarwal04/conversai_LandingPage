interface Window {
  clarity?: {
    (action: string, ...args: any[]): void;
    q?: any[];
  };
  dataLayer?: any[];
}