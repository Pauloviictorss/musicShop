import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Plataforma from './Plataforma'
import Artista from './Artista'

export default class Artistaplataforma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public artistaId: number

  @column()
  public plataformaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Plataforma)
  public plataforma: BelongsTo<typeof Plataforma>

  @belongsTo(() => Artista)
  public artista: BelongsTo<typeof Artista>
}
