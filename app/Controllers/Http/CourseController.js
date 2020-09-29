'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Course = use('App/Models/Course');

class CourseController {
  async index() {
    const courses = await Course.all();

    return courses;
  }
}

module.exports = CourseController;
