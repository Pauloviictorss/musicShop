import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Artista from 'App/Models/Artista'

export default class extends BaseSeeder {
  public async run () {
    await Artista.createMany([
      {nome: 'Paulo', albumId: 1, dataNascimento: new Date(2000, 10, 12)},
    ])
  }
}
