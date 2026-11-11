/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('test', async () => {
  return 'API is working !'
})

router.resource('students', controllers.Students).apiOnly()
router.resource('teachers', controllers.Teachers).apiOnly()
router.resource('ClassGroup', controllers.ClassGroups).apiOnly()
