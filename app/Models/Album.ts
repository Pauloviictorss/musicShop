import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Musica from './Musica'
import Albumartista from './Albumartista'

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

  @hasMany(() => Musica)
  public musicas: HasMany<typeof Musica>

  @hasMany(() => Albumartista)
  public albumartistas: HasMany<typeof Albumartista>
}
