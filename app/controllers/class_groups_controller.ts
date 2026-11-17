import ClassGroup from '#models/class_group'
import { ClassGroupValidator } from '#validators/class_group'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClassGroupsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await ClassGroup.query().preload('teacher').orderBy('name')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name, teacherId } = await request.validateUsing(ClassGroupValidator)

    const classGroup = await ClassGroup.create({ name, teacherId })

    return response.created(classGroup)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const classGroup = await ClassGroup.query()
      .preload('teacher')
      .where('id', params.id)
      .firstOrFail()
    return response.ok(classGroup)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(ClassGroupValidator)

    // Vérification de l'existence de l'élève
    const classGroup = await ClassGroup.findOrFail(params.id)
    // Mise à jour des données de l'élève
    classGroup.merge(data)
    // Sauvegarde des modifications
    await classGroup.save()
    // Retour le json de l'élève mis à jour
    return response.ok(classGroup)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const classGroup = await ClassGroup.findOrFail(params.id)
    await classGroup.delete()
    return response.ok(classGroup)
  }
}
