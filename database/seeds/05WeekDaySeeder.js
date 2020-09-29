'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Day = use('App/Models/Day');

class WeekDaySeeder {
  async run() {
    await Day.create({
      name: 'Segunda-feira',
    });

    await Day.create({
      name: 'Terça-feira',
    });

    await Day.create({
      name: 'Quarta-feira',
    });

    await Day.create({
      name: 'Quinta-feira',
    });

    await Day.create({
      name: 'Sexta-feira',
    });

    await Day.create({
      name: 'Sábado',
    });
  }
}

module.exports = WeekDaySeeder;
