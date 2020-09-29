'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Laboratory = use('App/Models/Laboratory');

class LaboratorySeeder {
  async run() {
    await Laboratory.create({
      name: 'Laboratório de informática 1',
    });

    await Laboratory.create({
      name: 'Laboratório de informática 2',
    });

    await Laboratory.create({
      name: 'Laboratório de informática 3',
    });
  }
}

module.exports = LaboratorySeeder;
