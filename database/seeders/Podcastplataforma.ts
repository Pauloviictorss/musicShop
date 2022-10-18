import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Podcastplataforma from 'App/Models/Podcastplataforma'

export default class extends BaseSeeder {
  public async run () {
    await Podcastplataforma.createMany([
      {podcastId: 1, plataformaId: 1},
    ])
  }
}
