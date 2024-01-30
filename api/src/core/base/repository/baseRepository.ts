import { Model } from 'sequelize'

import { BaseRepositoryInterface } from './baseInterface.js'
export class BaseRepository<T extends Model> implements BaseRepositoryInterface<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private model: any
  constructor(model: typeof Model) {
    this.model = model
  }

  getAll = async (): Promise<T[]> => {
    const items = await this.model.findAll()
    return items
  }

  getOne = async (id: string): Promise<T> => {
    const items = await this.model.findByPk(id)
    return items
  }

  create = async (deck: Partial<T>) => {
    const item = await this.model.create(deck)
    return item
  }

  update = async (id: string, itemUpdated: Partial<T>) => {
    const itemToUpdate = await this.model.findOne({ where: { id: id } })
    itemToUpdate.set(itemUpdated)
    await itemToUpdate.save()
    return itemToUpdate
  }

  destroy = async (id: string) => {
    await this.model.destroy({ where: { id } })
  }
}

