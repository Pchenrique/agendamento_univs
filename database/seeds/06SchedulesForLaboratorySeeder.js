'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Schedule = use('App/Models/Schedule');

class SchedulesForLaboratorySeeder {
  async run() {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 5; j++) {
        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '08:00 - 09:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '09:00 - 10:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '10:00 - 11:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '11:00 - 12:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '12:00 - 13:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '13:00 - 14:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '14:00 - 15:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '15:00 - 16:00',
        });

        await Schedule.create({
          laboratory_id: i,
          day_id: j,
          vacancies: 15,
          ranger_time: '16:00 - 17:00',
        });
      }
    }
  }
}

module.exports = SchedulesForLaboratorySeeder;
