import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Playlistmusica from 'App/Models/Playlistmusica'

export default class extends BaseSeeder {
  public async run () {
    await Playlistmusica.createMany([
      {playlistId: 1, musicaId: 1},
    ])
  }
}
