'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Schedule extends Model {
  laboratory() {
    return this.belongsTo('App/Models/Laboratory');
  }
}

module.exports = Schedule;
