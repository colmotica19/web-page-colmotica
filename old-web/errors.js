export class NotFoundHTMLElement extends Error {
  constructor(selector) {
    super(`El elemento con el selector '${selector}' no fue encontrado`)
  }
}