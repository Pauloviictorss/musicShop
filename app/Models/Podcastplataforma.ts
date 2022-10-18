import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Podcastplataforma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public podcastId: number

  @column()
  public plataformaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
