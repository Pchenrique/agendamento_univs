'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Laboratory extends Model {
  schedules() {
    return this.hasMany('App/Models/Schedule');
  }
}

module.exports = Laboratory;
