import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Host from './Host'
import Plataformapodcast from './Plataformapodcast'

export default class Podcast extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public apresentador: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Host)
  public host: BelongsTo<typeof Host>

  @hasMany(() => Plataformapodcast)
  public plataformapodcasts: HasMany<typeof Plataformapodcast>
}
