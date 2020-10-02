'use strict';
const Antl = use('Antl');

class reservationReservationStore {
  get rules() {
    return {
      schedule_id: 'required|number|exists:schedules,id',
    };
  }

  get messages() {
    return Antl.list('validation');
  }

  async fails(errorMessages) {
    return this.ctx.response.status(401).send(errorMessages);
  }
}

module.exports = reservationReservationStore;
