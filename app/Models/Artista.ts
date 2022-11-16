import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Plataforma from './Plataforma'
import Album from './Album'

export default class Artista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public dataNascimento: Date

  @manyToMany(() => Plataforma, {pivotTable: 'artistaplataformas'})
  public plataformas: ManyToMany<typeof Plataforma>

  @manyToMany(() => Album, {pivotTable: 'albumartistas'})
  public albums: ManyToMany<typeof Album>
}
