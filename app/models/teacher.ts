import { TeacherSchema } from '#database/schema'
import { belongsTo, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import ClassGroup from './class_group.ts'
import Comment from './comment.ts'
import User from './user.ts'
export default class Teacher extends TeacherSchema {
  @hasMany(() => ClassGroup)
  declare classGroups: HasMany<typeof ClassGroup>
  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
  @hasOne(() => Teacher)
  declare teacher: HasOne<typeof Teacher>
}
