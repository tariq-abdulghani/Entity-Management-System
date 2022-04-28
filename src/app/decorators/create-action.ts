export function CreateAction(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  Reflect.defineMetadata('CreateAction', propertyKey, target);
}

export function Fetch(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  Reflect.defineMetadata('Fetch', propertyKey, target);
}

export function EditAction(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  Reflect.defineMetadata('EditAction', propertyKey, target);
}

export function DeleteAction(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  Reflect.defineMetadata('DeleteAction', propertyKey, target);
}

export function PostViewInit(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  Reflect.defineMetadata('PostViewInit', propertyKey, target);
}

export function PreViewDestroy(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  Reflect.defineMetadata('PreViewDestroy', propertyKey, target);
}

export function PageChange(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  Reflect.defineMetadata('PageChange', propertyKey, target);
}
