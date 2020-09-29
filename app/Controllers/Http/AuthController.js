'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class AuthController {
  async authenticate({ request, response, auth }) {
    const { registration, password } = request.only([
      'registration',
      'password',
    ]);

    try {
      const token = await auth.attempt(registration, password);

      const user = await User.findByOrFail('registration', registration);

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
