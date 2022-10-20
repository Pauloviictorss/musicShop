import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Plataforma from 'App/Models/Plataforma'

export default class extends BaseSeeder {
  public async run () {
    await Plataforma.createMany([
      {nome: 'Spotify'},
    ])
  }
}
