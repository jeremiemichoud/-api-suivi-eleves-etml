import { StudentSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import ClassGroup from './class_group.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.ts'

export default class Student extends StudentSchema {
  @belongsTo(() => ClassGroup)
  declare classGroup: BelongsTo<typeof ClassGroup>
  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>
}
