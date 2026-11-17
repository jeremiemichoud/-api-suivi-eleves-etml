import { TeacherSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import ClassGroup from './class_group.ts'
export default class Teacher extends TeacherSchema {
  @hasMany(() => ClassGroup)
  declare classGroups: HasMany<typeof ClassGroup>
}
