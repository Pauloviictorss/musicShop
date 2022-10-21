import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Podcast from 'App/Models/Podcast'

export default class extends BaseSeeder {
  public async run () {
    await Podcast.createMany([
      {nome: 'PodPah', apresentador: 'Igão e Mítico'},
    ])
  }
}
