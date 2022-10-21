import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Podcast from './Podcast'

export default class Plataformapodcast extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public plataformaId: number

  @column()
  public podcastId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Podcast)
  public podcast: BelongsTo<typeof Podcast>
}
