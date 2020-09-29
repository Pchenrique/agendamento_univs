'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class LaboratorySchema extends Schema {
  up() {
    this.create('laboratories', (table) => {
      table.increments();
      table.string('name', 80).notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('laboratories');
  }
}

module.exports = LaboratorySchema;
