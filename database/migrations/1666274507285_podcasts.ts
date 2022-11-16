import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'podcasts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 100).notNullable()
      table.string('apresentador', 50).notNullable()
      table.integer('host_id').unsigned().references('id').inTable('hosts')
      table.integer('plataforma_id').unsigned().references('id').inTable('plataformas')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
