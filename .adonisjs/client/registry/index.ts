/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

export type { Route, Path } from './schema.d.ts'

const placeholder: any = {}

const routes = {
  'students.index': {
    methods: ["GET","HEAD"],
    pattern: '/students',
    tokens: [[0,"students"]],
    types: placeholder as Registry['students.index']['types'],
  },
  'students.store': {
    methods: ["POST"],
    pattern: '/students',
    tokens: [[0,"students"]],
    types: placeholder as Registry['students.store']['types'],
  },
  'students.show': {
    methods: ["GET","HEAD"],
    pattern: '/students/:id',
    tokens: [[0,"students"],[1,"id"]],
    types: placeholder as Registry['students.show']['types'],
  },
  'students.update': {
    methods: ["PUT","PATCH"],
    pattern: '/students/:id',
    tokens: [[0,"students"],[1,"id"]],
    types: placeholder as Registry['students.update']['types'],
  },
  'students.destroy': {
    methods: ["DELETE"],
    pattern: '/students/:id',
    tokens: [[0,"students"],[1,"id"]],
    types: placeholder as Registry['students.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
