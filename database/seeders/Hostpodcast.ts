import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Hostpodcast from 'App/Models/HostPodcast'

export default class extends BaseSeeder {
  public async run () {
    await Hostpodcast.createMany([
      {podcastId: 1, hostId: 1},
    ])
  }
}
