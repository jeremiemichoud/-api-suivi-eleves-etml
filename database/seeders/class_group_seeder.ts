import { ClassGroupFactory } from '#database/factories/class_group_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ClassGroupFactory.createMany(20)
  }
}
