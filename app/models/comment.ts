import { CommentSchema } from '#database/schema'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Student from './student.ts'
import { belongsTo } from '@adonisjs/lucid/orm'
import Teacher from './teacher.ts'

export default class Comment extends CommentSchema {
  // Relation : 1 commentaire → 1 élève
  @belongsTo(() => Student)
  declare student: BelongsTo<typeof Student>
  // Relation : 1 commentaire → 1 enseignant
  @belongsTo(() => Teacher)
  declare teacher: BelongsTo<typeof Teacher>
}
