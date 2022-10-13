import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Podcast from 'App/Models/Podcast'

export default class extends BaseSeeder {
  public async run () {
    await Podcast.createMany([
      {nome: 'Flow Podcast', hostId: 1, plataformaId: 1},
    ])
  }
}
