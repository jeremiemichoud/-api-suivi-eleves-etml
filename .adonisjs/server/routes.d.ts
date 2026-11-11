import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'students.index': { paramsTuple?: []; params?: {} }
    'students.store': { paramsTuple?: []; params?: {} }
    'students.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.index': { paramsTuple?: []; params?: {} }
    'teachers.store': { paramsTuple?: []; params?: {} }
    'teachers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.index': { paramsTuple?: []; params?: {} }
    'class_group.store': { paramsTuple?: []; params?: {} }
    'class_group.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'students.index': { paramsTuple?: []; params?: {} }
    'students.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.index': { paramsTuple?: []; params?: {} }
    'teachers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.index': { paramsTuple?: []; params?: {} }
    'class_group.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'students.index': { paramsTuple?: []; params?: {} }
    'students.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.index': { paramsTuple?: []; params?: {} }
    'teachers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.index': { paramsTuple?: []; params?: {} }
    'class_group.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'students.store': { paramsTuple?: []; params?: {} }
    'teachers.store': { paramsTuple?: []; params?: {} }
    'class_group.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'students.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'students.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'students.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'class_group.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}