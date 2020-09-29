'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Course = use('App/Models/Course');

class CourseSeeder {
  async run() {
    await Course.create({
      name: 'Administração',
    });
    await Course.create({
      name: 'Análise e desenvolvimento de sistemas',
    });
    await Course.create({
      name: 'Ciências contábeis',
    });
    await Course.create({
      name: 'Direito',
    });
    await Course.create({
      name: 'Educação física',
    });
    await Course.create({
      name: 'Enfermagem',
    });
    await Course.create({
      name: 'Fisioterapia',
    });
    await Course.create({
      name: 'Medicina veterinária',
    });
    await Course.create({
      name: 'Psicologia',
    });
    await Course.create({
      name: 'Serviço social',
    });
  }
}

module.exports = CourseSeeder;
