'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ReservationSchema extends Schema {
  up() {
    this.create('reservations', (table) => {
      table.increments();
      table.boolean('reservation').defaultTo(true);
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .index('user_id');
      table
        .integer('schedule_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schedules')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .index('schedule_id');
      table.timestamps();
    });
  }

  down() {
    this.drop('reservations');
  }
}

module.exports = ReservationSchema;
