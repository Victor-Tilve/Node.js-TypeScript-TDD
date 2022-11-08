export class MissingFormalParameter extends Error {
  constructor (public name: string) {
    super(`Error in the Parameter: ${name}`)
  }
}
