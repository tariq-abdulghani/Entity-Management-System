import { Type } from '@angular/core';

export class ViewControllerMapper {
  private static viewControllers = new Map<string, Type<any>>();

  public static addController(relativePath: string, value: Type<any>): void {
    ViewControllerMapper.viewControllers.set(relativePath, value);
  }

  public static getController(relativePath: string) {
    return ViewControllerMapper.viewControllers.get(relativePath);
  }
}
