import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Plataformapodcast from './Plataformapodcast'
import Artistaplataforma from './Artistaplataforma'

export default class Plataforma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Plataformapodcast)
  public plataformapodcasts: HasMany<typeof Plataformapodcast>

  @hasMany(() => Artistaplataforma)
  public artistaplataformas: HasMany<typeof Artistaplataforma>
}
