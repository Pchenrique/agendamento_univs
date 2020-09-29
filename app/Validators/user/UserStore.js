'use strict';
const Antl = use('Antl');

class userUserStore {
  get rules() {
    return {
      name: 'string|required',
      registration: 'required|string',
      course_id: 'required|number|exists:courses,id',
      password: 'required|confirmed|min:6|max:100',
    };
  }

  get messages() {
    return Antl.list('validation');
  }

  async fails(errorMessages) {
    return this.ctx.response.status(401).send(errorMessages);
  }
}

module.exports = userUserStore;
