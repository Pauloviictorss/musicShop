import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'musicas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome').notNullable()
      table.string('duracao')
      table.integer('artista_id').unsigned().references('id').inTable('artistas').notNullable()
      table.integer('album_id').unsigned().references('id').inTable('albums').notNullable()
      table.integer('plataforma_id').unsigned().references('id').inTable('plataformas').notNullable()
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
