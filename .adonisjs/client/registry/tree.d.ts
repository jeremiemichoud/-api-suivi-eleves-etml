/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  students: {
    index: typeof routes['students.index']
    store: typeof routes['students.store']
    show: typeof routes['students.show']
    update: typeof routes['students.update']
    destroy: typeof routes['students.destroy']
  }
  teachers: {
    index: typeof routes['teachers.index']
    store: typeof routes['teachers.store']
    show: typeof routes['teachers.show']
    update: typeof routes['teachers.update']
    destroy: typeof routes['teachers.destroy']
  }
  classGroup: {
    index: typeof routes['class_group.index']
    store: typeof routes['class_group.store']
    show: typeof routes['class_group.show']
    update: typeof routes['class_group.update']
    destroy: typeof routes['class_group.destroy']
  }
}
