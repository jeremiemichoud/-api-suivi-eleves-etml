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
}
