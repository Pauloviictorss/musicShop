import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Plataformapodcast extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public plataformaId: number

  @column()
  public podcastId: number
}
