'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class AuthController {
  async authenticate({ request, response, auth }) {
    const { cpf, password } = request.only(['cpf', 'password']);

    try {
      const token = await auth.attempt(cpf, password);

      const user = await User.findByOrFail('cpf', cpf);

      await user.load('course');

      return response.status(200).json({ token, user });
    } catch (err) {
      response.status(401).json([
        {
          message: 'email ou senha incorreto',
          field: '',
          validation: 'login',
        },
      ]);
    }
  }
}

module.exports = AuthController;
