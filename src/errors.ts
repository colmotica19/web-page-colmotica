export class NotFoundHTMLElement extends Error {
  constructor(selector: string) {
    super(`El elemento con el selector '${selector}' no fue encontrado`)
  }
}