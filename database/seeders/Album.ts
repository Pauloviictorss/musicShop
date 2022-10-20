import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Album from 'App/Models/Album'

export default class extends BaseSeeder {
  public async run () {
    await Album.createMany([
      {nome: 'Make it believe', lancamento: new Date(2020, 10, 5)},
    ])
  }
}
