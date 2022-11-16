import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Albumartista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public albumId: number

  @column()
  public artistaId: number
}
