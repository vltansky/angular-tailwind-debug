/**
 * This file needs to be a module in order for the typescript
 *  compiler to not complain about the global declaration.
 */
export {};
declare global {
  interface Window {
    [key: string]: any;
  }
}
