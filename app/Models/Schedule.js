'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Schedule extends Model {
  laboratory() {
    return this.belongsTo('App/Models/Laboratory');
  }

  day() {
    return this.belongsTo('App/Models/Day');
  }

  users() {
    return this.belongsToMany('App/Models/User')
      .withTimestamps()
      .pivotTable('reservations')
      .withPivot(['reservation']);
  }
}

module.exports = Schedule;
