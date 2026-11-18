import { TeacherSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import ClassGroup from './class_group.ts'
import Comment from './comment.ts'
export default class Teacher extends TeacherSchema {
  @hasMany(() => ClassGroup)
  declare classGroups: HasMany<typeof ClassGroup>
  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>
}
