import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'musicas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 100).notNullable()
      table.string('duracao', 20)
      table.integer('album_id').unsigned().references('id').inTable('albums')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
