import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Host from './Host'
import Plataforma from './Plataforma'

export default class Podcast extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public apresentador: string
  
  @column()
  public hostId: number

  @belongsTo(() => Host)
  public host: BelongsTo<typeof Host>

  @manyToMany(() => Plataforma, {pivotTable: 'plataformapodcasts'})
  public plataformas: ManyToMany<typeof Plataforma>
}
