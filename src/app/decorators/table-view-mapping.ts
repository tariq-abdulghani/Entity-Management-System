import 'reflect-metadata';

export const TABLE_VIEW_META_KEY = Symbol('TableViewMapping');
export function TableMapping(specs: { columns: string[] }) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    Reflect.defineMetadata(TABLE_VIEW_META_KEY, specs, constructor.prototype);
    return class extends constructor {};
  };
}
