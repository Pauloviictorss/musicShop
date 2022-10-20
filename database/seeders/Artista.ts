import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Artista from 'App/Models/Artista'

export default class extends BaseSeeder {
  public async run () {
    await Artista.createMany([
      {nome: 'Believe', dataNascimento: new Date(2020, 10, 5)},
    ])
  }
}
