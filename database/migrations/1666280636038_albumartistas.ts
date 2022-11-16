import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'albumartistas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('album_id').unsigned().references('id').inTable('albums')
      table.integer('artista_id').unsigned().references('id').inTable('artistas')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
