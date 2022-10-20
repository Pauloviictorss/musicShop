import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Playlist from 'App/Models/Playlist'

export default class extends BaseSeeder {
  public async run () {
    await Playlist.createMany([
      {nome: 'Rich, young and class', user: 'Pauloviictorss'},
    ])
  }
}
