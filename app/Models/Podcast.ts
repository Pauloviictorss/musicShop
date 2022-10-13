import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Podcast extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public hostId: number
  
  @column()
  public plataformaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}