export const createErrorFactory = function (name: string, code: string, status: number) {
  return class BusinessError extends Error {
    code: string = ''
    status: number = 500
    constructor(public message: string) {
      // super referencia a la clase Error
      super(message)
      this.name = name // Aquí se corregirá
      this.code = code // Aquí se corregirá
      this.status = status // Aquí se corregirá
    }
  }
}

export class BusinessError extends Error {
  constructor(
    public message: string,
    public code: number,
    public status: string,
    public name: string
  ) {
    // super referencia a la clase Error
    super(message)
    this.name = name // Aquí se corregirá
    this.code = code // Aquí se corregirá
    this.status = status // Aquí se corregirá
  }
}

export const ConnectionError = createErrorFactory('Connection Error', 'CONNEXION_ERROR', 500)
export const ValidationError = createErrorFactory('Validation Error', 'VALIDATION_ERROR', 400)

