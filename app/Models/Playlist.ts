import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Musica from './Musica'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public user: string

  @manyToMany(() => Musica, {pivotTable: 'playlistmusicas'})
  public musicas: ManyToMany<typeof Musica>
}
