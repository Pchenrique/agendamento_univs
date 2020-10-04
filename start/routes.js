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
  .except(['update', 'store', 'destroy'])
  .middleware(
    new Map([
      [['laboratories.index'], ['auth']],
      [['laboratories.show'], ['auth', 'admin']],
    ])
  );

Route.get('schedules/:id', 'ScheduleController.show').middleware([
  'auth',
  'admin',
]);

Route.post('reservations', 'ReservationController.store')
  .validator('reservation/ReservationStore')
  .middleware(['auth']);

Route.get(
  'reservations/:laboratory_id',
  'ReservationController.show'
).middleware(['auth']);

Route.delete(
  'reservations/:schedule_id',
  'ReservationController.destroy'
).middleware(['auth']);

Route.delete(
  'reservationsAdmin/:schedule_id/:user_id',
  'ReservationController.destroyAdmin'
).middleware(['auth', 'admin']);
