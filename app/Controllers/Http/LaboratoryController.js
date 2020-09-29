'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Laboratory = use('App/Models/Laboratory');

/**
 * Resourceful controller for interacting with laboratories
 */
class LaboratoryController {
  /**
   * Show a list of all laboratories.
   * GET laboratories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const laboratorios = await Laboratory.all();

    return laboratorios;
  }

  /**
   * Create/save a new laboratory.
   * POST laboratories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single laboratory.
   * GET laboratories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    const laboratory = await Laboratory.findOrFail(params.id);
    await laboratory.load('schedules');

    return response.status(200).json(laboratory);
  }

  /**
   * Update laboratory details.
   * PUT or PATCH laboratories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a laboratory with id.
   * DELETE laboratories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = LaboratoryController;
