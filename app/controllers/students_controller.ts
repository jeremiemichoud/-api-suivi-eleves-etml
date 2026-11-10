import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Student.query().orderBy('name').orderBy('firstname')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const student = request.only(['name', 'firstname'])
    return Student.create(student)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Student.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const data = request.only(['name', 'firstname'])
    // Vérification de l'existence de l'élève
    const student = await Student.findOrFail(params.id)
    // Mise à jour des données de l'élève
    student.merge(data)
    // Sauvegarde des modifications
    await student.save()
    // Retour le json de l'élève mis à jour
    return student
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    return student.delete()
  }
}
