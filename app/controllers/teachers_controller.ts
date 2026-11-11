import Teacher from '#models/teacher'
import { teacherValidator } from '#validators/teacher'
import type { HttpContext } from '@adonisjs/core/http'

export default class TeachersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Teacher.query().orderBy('name').orderBy('firstname').orderBy('email')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name, firstname, email } = await request.validateUsing(teacherValidator)

    const teacher = await Teacher.create({ name, firstname, email })

    return response.created(teacher)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const teacher = await Teacher.findOrFail(params.id)
    return response.ok(teacher)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(teacherValidator)

    // Vérification de l'existence de l'enseignant
    const teacher = await Teacher.findOrFail(params.id)

    // Mise à jour des données
    teacher.merge(data)

    // Sauvegarde des modifications
    await teacher.save()

    // Retour de l'enseignant mis à jour
    return response.ok(teacher)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const teacher = await Teacher.findOrFail(params.id)
    await teacher.delete()
    return response.ok(teacher)
  }
}
