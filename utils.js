import { NotFoundHTMLElement } from "./errors.js";
export function querySelector(selectors, element) {
    const item = (element ?? document).querySelector(selectors);
    if (!item)
        throw new NotFoundHTMLElement(selectors);
    return item;
}