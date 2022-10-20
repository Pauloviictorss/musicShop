import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'musicas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.date('nome').notNullable()
      table.date('duracao')
      table.integer('album_id').unsigned().references('id').inTable('albums')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
