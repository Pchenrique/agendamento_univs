/* eslint-disable camelcase */
'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Schedule = use('App/Models/Schedule');

class ReservationController {
  async store({ request, response, auth }) {
    const { schedule_id } = request.only('schedule_id');

    const schedule = await Schedule.findOrFail(schedule_id);

    if (schedule.vacancies > 0) {
      const user = auth.user;

      await user.schedules().attach(schedule_id);
      await user.load('schedules');

      schedule.vacancies = schedule.vacancies - 1;

      await schedule.save();

      return response.status(201).json(user);
    }

    response.status(401).json([
      {
        message: 'Esse horário não tem mais vagas.',
      },
    ]);
  }

  async show({ params, auth, response }) {
    const user_id = auth.user.id;

    const schedules = await Schedule.query()
      .where('laboratory_id', '=', params.laboratory_id)
      .with('users', (builder) => {
        builder.where('user_id', user_id);
      })
      .orderBy('id', 'asc')
      .fetch();

    return response.status(200).json(schedules);
  }

  async destroy({ params, auth, response }) {
    const schedule = await Schedule.findOrFail(params.schedule_id);
    const user_id = auth.user.id;

    await schedule.load('users', (row) => {
      row.where('user_id', user_id);
    });

    const schedules_user = schedule.getRelated('users');

    if (schedules_user.rows.length === 1) {
      await schedule.users().detach(user_id);

      schedule.vacancies = schedule.vacancies + 1;

      await schedule.save();

      return response.status(200).json({
        message: 'Horário excluido com sucesso.',
      });
    }

    return response.status(401).json({
      message: 'Não foi possivel excluir o horário ou não existe.',
    });
  }

  async destroyAdmin({ params, request, response }) {
    const schedule = await Schedule.findOrFail(params.schedule_id);
    const user_id = params.user_id;

    await schedule.load('users', (row) => {
      row.where('user_id', user_id);
    });

    const schedules_user = schedule.getRelated('users');

    if (schedules_user.rows.length === 1) {
      await schedule.users().detach(user_id);

      schedule.vacancies = schedule.vacancies + 1;

      await schedule.save();

      return response.status(200).json({
        message: 'Horário excluido com sucesso.',
      });
    }

    return response.status(401).json({
      message: 'Não foi possivel excluir o horário ou não existe.',
    });
  }
}

module.exports = ReservationController;
