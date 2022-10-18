import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Artistaplataforma from 'App/Models/Artistaplataforma'

export default class extends BaseSeeder {
  public async run () {
    await Artistaplataforma.createMany([
      {artistaId: 1, plataformaId: 1},
    ])
  }
}
