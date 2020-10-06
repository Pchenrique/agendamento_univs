'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserType = use('App/Models/UserType');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
  async store({ request, response }) {
    const data = request.only([
      'name',
      'cpf',
      'phone',
      'password',
      'course_id',
    ]);

    const userType = await UserType.findByOrFail('description', 'Aluno');

    const user = await User.create({ user_type_id: userType.id, ...data });

    await user.load('course');

    return response.status(201).json(user);
  }
}

module.exports = UserController;
