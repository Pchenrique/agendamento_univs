'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserType = use('App/Models/UserType');

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ response, auth }, next) {
    const user = auth.user;
    const userType = await UserType.findOrFail(user.user_type_id);

    if (userType.description !== 'Admin') {
      return response.status(401).json([
        {
          message: 'Not authorized',
          cause: 'without permission',
        },
      ]);
    }
    await next();
  }
}

module.exports = Admin;
