'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserAdminSeeder {
  async run() {
    await User.create({
      user_type_id: 2,
      name: 'DTI',
      registration: '123123',
      password: '123123',
    });
  }
}

module.exports = UserAdminSeeder;
