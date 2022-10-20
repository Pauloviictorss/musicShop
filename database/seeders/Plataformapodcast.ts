import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Plataformapodcast from 'App/Models/Plataformapodcast'

export default class extends BaseSeeder {
  public async run () {
    await Plataformapodcast.createMany([
      {plataformaId: 1, podcastId: 1},
    ])
  }
}
