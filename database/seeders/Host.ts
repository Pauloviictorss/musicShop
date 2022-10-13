import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Host from 'App/Models/Host'

export default class extends BaseSeeder {
  public async run () {
    await Host.createMany([
      {nome: 'Flow', localizacao: 'SP'},
    ])
  }
}
