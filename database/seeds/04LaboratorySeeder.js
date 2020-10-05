'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Laboratory = use('App/Models/Laboratory');

class LaboratorySeeder {
  async run() {
    await Laboratory.create({
      name: 'Laboratório de Informática 1',
    });

    await Laboratory.create({
      name: 'Laboratório de Iformática 2',
    });

    await Laboratory.create({
      name: 'Laboratório de Informática 3',
    });
  }
}

module.exports = LaboratorySeeder;
