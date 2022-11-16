import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Playlistmusica extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public playlistId: number

  @column()
  public musicaId: number
}
