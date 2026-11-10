import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Student.query().orderBy('name').orderBy('firstname')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const student = request.only(['name', 'firstname'])
    return response.created(student)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    return response.ok(student)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.only(['name', 'firstname'])
    // Vérification de l'existence de l'élève
    const student = await Student.findOrFail(params.id)
    // Mise à jour des données de l'élève
    student.merge(data)
    // Sauvegarde des modifications
    await student.save()
    // Retour le json de l'élève mis à jour
    return response.ok(student)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    await student.delete()
    return response.ok(student)
  }
}
