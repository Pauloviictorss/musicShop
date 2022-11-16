import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Podcast from './Podcast'
import Artista from './Artista'

export default class Plataforma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @manyToMany(() => Podcast, {pivotTable: 'plataformapodcasts'})
  public podcasts: ManyToMany<typeof Podcast>

  @manyToMany(() => Artista, {pivotTable: 'artistaplataformas'})
  public artistas: ManyToMany<typeof Artista>
}
