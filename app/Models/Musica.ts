import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Album from './Album'
import Playlistmusica from './Playlistmusica'

export default class Musica extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public duracao: string

  @column()
  public albumId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Album)
  public album: BelongsTo<typeof Album>

  @hasMany(() => Playlistmusica)
  public playlistmusicas: HasMany<typeof Playlistmusica>
}
