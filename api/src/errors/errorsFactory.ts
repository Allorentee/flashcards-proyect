export const createErrorFactory = function (name: string) {
  return class BusinessError extends Error {
    constructor(message: string) {
      // super referencia a la clase Error
      super(message)
      this.name = name
    }
  }
}

export const ConnectionError = createErrorFactory('Connection Error')
export const ValidationError = createErrorFactory('Validation Error')

