import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Album from './Album'
import Playlist from './Playlist'

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

  @manyToMany(() => Playlist, {pivotTable: 'playlistmusicas'})
  public playlists: ManyToMany<typeof Playlist>
}
