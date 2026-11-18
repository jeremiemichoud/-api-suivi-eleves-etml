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

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')
    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
  })
  .prefix('/api/v1')

router.get('test', async () => {
  return 'API is working !'
})

router
  .group(() => {
    router.resource('students', controllers.Students).apiOnly()
    router.resource('teachers', controllers.Teachers).apiOnly()
    router.resource('ClassGroup', controllers.ClassGroups).apiOnly()
    router.resource('students.comments', controllers.Comments).apiOnly()
  })
  .use(middleware.auth())
