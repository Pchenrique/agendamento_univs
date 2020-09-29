'use strict';

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('register', 'UserController.store').validator('user/UserStore');

Route.post('auth', 'AuthController.authenticate').validator(
  'authenticate/AuthenticateAuth'
);
