import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'playlistmusicas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('playlist_id').unsigned().references('id').inTable('playlists')
      table.integer('musica_id').unsigned().references('id').inTable('musicas')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
