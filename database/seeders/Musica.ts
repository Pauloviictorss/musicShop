import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Musica from 'App/Models/Musica'

export default class extends BaseSeeder {
  public async run () {
    await Musica.createMany([
      {nome: 'Make believe', duracao: '4min'},
    ])
  }
}
