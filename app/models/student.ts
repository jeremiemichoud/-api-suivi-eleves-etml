import { StudentSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import ClassGroup from './class_group.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Student extends StudentSchema {
  @belongsTo(() => ClassGroup)
  declare classGroup: BelongsTo<typeof ClassGroup>
}
