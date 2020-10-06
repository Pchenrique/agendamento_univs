'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ScheduleSchema extends Schema {
  up() {
    this.create('schedules', (table) => {
      table.increments();

      table
        .integer('day_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('days')
        .onUpdate('CASCADE');

      table
        .integer('laboratory_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('laboratories')
        .onUpdate('CASCADE');

      table.string('ranger_time', 30).notNullable();
      table.integer('vacancies').notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('schedules');
  }
}

module.exports = ScheduleSchema;
