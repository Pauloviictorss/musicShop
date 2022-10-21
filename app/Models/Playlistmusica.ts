import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Musica from './Musica'
import Playlist from './Playlist'

export default class Playlistmusica extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public playlistId: number

  @column()
  public musicaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Musica)
  public musica: BelongsTo<typeof Musica>

  @belongsTo(() => Playlist)
  public playlist: BelongsTo<typeof Playlist>
}
