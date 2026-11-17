import { ClassGroupSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Teacher from './teacher.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ClassGroup extends ClassGroupSchema {
  @belongsTo(() => Teacher)
  declare teacher: BelongsTo<typeof Teacher>
}
