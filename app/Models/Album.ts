import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Artista from './Artista'
import Musica from './Musica'

export default class Album extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public lancamento: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Artista, {pivotTable: 'albumartistas'})
  public artistas: ManyToMany<typeof Artista>

  @hasMany(() => Musica)
  public musicas: HasMany<typeof Musica>
}
