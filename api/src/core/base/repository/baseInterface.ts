export interface BaseRepositoryInterface<T> {
  getAll: () => Promise<T[]>
  getOne: (id: string) => Promise<T>
  create: (deck: Partial<T>) => Promise<T>
  update: (id: string, deck: Partial<T>) => Promise<T>
  destroy: (id: string) => void
}

