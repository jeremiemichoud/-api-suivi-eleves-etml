import ClassGroup from '#models/class_group'
import { ClassGroupValidator } from '#validators/class_group'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClassGroupsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await ClassGroup.query().orderBy('name')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name } = await request.validateUsing(ClassGroupValidator)

    const classGroup = ClassGroup.create({ name })

    return response.created(classGroup)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const classGroup = await ClassGroup.findOrFail(params.id)
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
