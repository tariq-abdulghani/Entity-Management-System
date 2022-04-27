import { Type } from '@angular/core';
import { ViewControllerMapper } from './view-controller-mapper';

export function ViewController(specs: {
  relativePath: string;
  formEntity: Type<any>;
}) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    // add sepcs.formEntity to meta data
    ViewControllerMapper.addController(specs.relativePath, constructor);
    return class extends constructor {};
  };
}
