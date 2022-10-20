import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Podcast from 'App/Models/Podcast'

export default class extends BaseSeeder {
  public async run () {
    await Podcast.createMany([
      {nome: 'Flow Podcast', duracao: '1:42:00', convidado: 'Eslen'},
    ])
  }
}
