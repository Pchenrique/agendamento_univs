'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Schedule extends Model {
  day() {
    return this.hasOne('App/Models/Day');
  }

  laboratory() {
    return this.hasOne('App/Models/Laboratory');
  }
}

module.exports = Schedule;
