import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'artistaplataformas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('artista_id').unsigned().references('id').inTable('artistas')
      table.integer('plataforma_id').unsigned().references('id').inTable('plataformas')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
