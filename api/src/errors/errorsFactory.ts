export class BusinessError extends Error {
  constructor(
    message: string = '',
    public code: string,
    public status: number,
    public name: string
  ) {
    // super referencia a la clase Error
    super(message)
    this.name = name
    this.code = code
    this.status = status
  }
}

export const createErrorFactory = function (name: string, code: string, status: number) {
  return new BusinessError('', code, status, name)
}

export const ConnectionError = createErrorFactory('Connection Error', 'CONNEXION_ERROR', 500)
export const ValidationFilesError = createErrorFactory('Validation Error', 'VALIDATION_ERROR', 400)

