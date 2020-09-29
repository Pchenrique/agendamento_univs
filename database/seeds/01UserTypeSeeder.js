'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserType = use('App/Models/UserType');

class UserTypeSeeder {
  async run() {
    await UserType.create({
      description: 'Aluno',
    });
    await UserType.create({
      description: 'Admin',
    });
  }
}

module.exports = UserTypeSeeder;
