import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('content').notNullable()
      table
        .integer('student_id')
        .unsigned()
        .notNullable() // Important : un commentaire doit toujours être lié à un élèv
        .references('id')
        .inTable('students')
        .onDelete('CASCADE')
      table
        .integer('teacher_id')
        .unsigned()
        .nullable() // Important : un commentaire peut ne pas être lié à un enseignant
        .references('id')
        .inTable('teachers')
        .onDelete('SET NULL')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
