import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Artistaplataforma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public artistaId: number

  @column()
  public plataformaId: number
}
