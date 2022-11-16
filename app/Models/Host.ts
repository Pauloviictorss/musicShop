import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Podcast from './Podcast'

export default class Host extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public localizacao: string

  @hasMany(() => Podcast)
  public podcasts: HasMany<typeof Podcast>
}
