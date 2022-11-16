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

  @belongsTo(() => Album)
  public album: BelongsTo<typeof Album>

  @manyToMany(() => Playlist, {pivotTable: 'playlistmusicas'})
  public playlists: ManyToMany<typeof Playlist>
}
