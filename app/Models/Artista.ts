import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Artistaplataforma from './Artistaplataforma'
import Albumartista from './Albumartista'

export default class Artista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public dataNascimento: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Artistaplataforma)
  public artistaplataformas: HasMany<typeof Artistaplataforma>

  @hasMany(() => Albumartista)
  public albumartistas: HasMany<typeof Albumartista>
}
