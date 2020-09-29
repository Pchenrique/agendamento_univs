'use strict';

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('register', 'UserController.store').validator('user/UserStore');

Route.post('auth', 'AuthController.authenticate').validator(
  'authenticate/AuthenticateAuth'
);

Route.get('courses', 'CourseController.index');

Route.resource('laboratories', 'LaboratoryController')
  .apiOnly()
  .validator(
    new Map([
      // [['revenueCategory.store'], ['revenueCategory/RevenueCategoryStore']],
      // [['revenueCategory.update'], ['revenueCategory/RevenueCategoryUpdate']],
    ])
  )
  .middleware(
    new Map([
      [['laboratories.index'], ['auth']],
      [['revenueCategory.show'], ['auth']],
      // [['revenueCategory.store'], ['auth', 'admin']],
      // [['revenueCategory.update'], ['auth', 'admin']],
      // [['revenueCategory.destroy'], ['auth', 'admin']],
    ])
  );
