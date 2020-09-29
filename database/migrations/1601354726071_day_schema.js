'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DaySchema extends Schema {
  up() {
    this.create('days', (table) => {
      table.increments();
      table.string('name', 40).notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('days');
  }
}

module.exports = DaySchema;
