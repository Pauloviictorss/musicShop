import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Albumartista from 'App/Models/Albumartista'

export default class extends BaseSeeder {
  public async run () {
    await Albumartista.createMany([
      {albumId: 1, artistaId: 1},
    ])
  }
}
