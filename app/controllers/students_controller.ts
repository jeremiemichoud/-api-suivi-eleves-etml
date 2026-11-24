import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import { studentValidator, getStudentsQueryValidator } from '#validators/student'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({ response, request }: HttpContext) {
    // Récupère les paramètres de pagination de la requête
    const {
      page = 1,
      limit = 10,
      sort = 'name',
      order = 'asc',
      classGroupId, // ID de la classe pour filtrer les étudiants
      search,
    } = await request.validateUsing(getStudentsQueryValidator)
    // Récupère tous les étudiants avec leurs classes et commentaires
    // Les étudiants sont triés par nom et prénom, puis paginés
    // A noter que await n'est pas présent
    const query = Student.query().preload('classGroup').preload('comments')
    if (classGroupId) {
      query.where('class_group_id', classGroupId) // Filtre les étudiants par ID de classe
    }
    // Recherche sur le nom et le prénom des étudiants
    if (search) {
      query.where((subQuery) => {
        subQuery.whereILike('name', `%${search}%`).orWhereILike('firstname', `%${search}%`)
      })
    }
    // Tri des étudiants par le champ spécifié (sort) et l'ordre (asc ou desc)
    query.orderBy(sort, order)
    // A noter que le await est nécessaire pour exécuter la requête
    // et volontairement omis précédemment pour éviter l'exécution prématurée
    const students = await query.paginate(page, limit) // Pagination des résultats
    // affiche correctement le chemin (/students),
    students.baseUrl('/students')
    // conserve les paramètres (recherche, tri, etc.).
    students.queryString({ page, limit, sort, order, classGroupId, search })
    // On utilise `response.ok` pour retourner un code HTTP 200 avec les données des élèves
    return response.ok(students)
  }
  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name, firstname, classGroupId } = await request.validateUsing(studentValidator)

    const student = await Student.create({ name, firstname, classGroupId })

    return response.created(student)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const student = await Student.query().preload('classGroup').where('id', params.id).firstOrFail()
    return response.ok(student)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const { name, firstname } = await request.validateUsing(studentValidator)

    const data = request.only([name, firstname])
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
