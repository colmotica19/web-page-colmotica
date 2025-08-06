import { NotFoundHTMLElement } from "./errors";

export function querySelector<T extends Element>(selectors: string, element?: Element): T {
  const item = (element ?? document).querySelector<T>(selectors);
  if(!item) throw new NotFoundHTMLElement(selectors)
  return item
}