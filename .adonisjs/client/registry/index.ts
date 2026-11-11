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
  'teachers.index': {
    methods: ["GET","HEAD"],
    pattern: '/teachers',
    tokens: [[0,"teachers"]],
    types: placeholder as Registry['teachers.index']['types'],
  },
  'teachers.store': {
    methods: ["POST"],
    pattern: '/teachers',
    tokens: [[0,"teachers"]],
    types: placeholder as Registry['teachers.store']['types'],
  },
  'teachers.show': {
    methods: ["GET","HEAD"],
    pattern: '/teachers/:id',
    tokens: [[0,"teachers"],[1,"id"]],
    types: placeholder as Registry['teachers.show']['types'],
  },
  'teachers.update': {
    methods: ["PUT","PATCH"],
    pattern: '/teachers/:id',
    tokens: [[0,"teachers"],[1,"id"]],
    types: placeholder as Registry['teachers.update']['types'],
  },
  'teachers.destroy': {
    methods: ["DELETE"],
    pattern: '/teachers/:id',
    tokens: [[0,"teachers"],[1,"id"]],
    types: placeholder as Registry['teachers.destroy']['types'],
  },
  'class_group.index': {
    methods: ["GET","HEAD"],
    pattern: '/ClassGroup',
    tokens: [[0,"ClassGroup"]],
    types: placeholder as Registry['class_group.index']['types'],
  },
  'class_group.store': {
    methods: ["POST"],
    pattern: '/ClassGroup',
    tokens: [[0,"ClassGroup"]],
    types: placeholder as Registry['class_group.store']['types'],
  },
  'class_group.show': {
    methods: ["GET","HEAD"],
    pattern: '/ClassGroup/:id',
    tokens: [[0,"ClassGroup"],[1,"id"]],
    types: placeholder as Registry['class_group.show']['types'],
  },
  'class_group.update': {
    methods: ["PUT","PATCH"],
    pattern: '/ClassGroup/:id',
    tokens: [[0,"ClassGroup"],[1,"id"]],
    types: placeholder as Registry['class_group.update']['types'],
  },
  'class_group.destroy': {
    methods: ["DELETE"],
    pattern: '/ClassGroup/:id',
    tokens: [[0,"ClassGroup"],[1,"id"]],
    types: placeholder as Registry['class_group.destroy']['types'],
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
