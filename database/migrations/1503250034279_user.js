'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();

      table
        .integer('user_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user_types')
        .onUpdate('CASCADE');

      table
        .integer('course_id')
        .unsigned()
        .references('id')
        .inTable('courses')
        .onUpdate('CASCADE');

      table.string('name', 80).notNullable();
      table.string('cpf', 20).notNullable().unique();
      table.string('phone', 14).notNullable();
      table.string('password', 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
