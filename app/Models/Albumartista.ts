import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Artista from './Artista'
import Album from './Album'

export default class Albumartista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public albumId: number

  @column()
  public artistaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Artista)
  public artista: BelongsTo<typeof Artista>

  @belongsTo(() => Album)
  public album: BelongsTo<typeof Album>
}
