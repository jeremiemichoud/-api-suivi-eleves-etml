import { ClassGroupSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Teacher from './teacher.ts'
import type { BelongsTo, Has, HasMany } from '@adonisjs/lucid/types/relations'
import Student from './student.ts'

export default class ClassGroup extends ClassGroupSchema {
  @belongsTo(() => Teacher)
  declare teacher: BelongsTo<typeof Teacher>

  @hasMany(() => Student)
  declare student: HasMany<typeof Student>
}
