'use strict';
const Antl = use('Antl');

class authenticateAuthenticateAuth {
  get rules() {
    return {
      registration: 'string|required',
      password: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }

  async fails(errorMessages) {
    return this.ctx.response.status(401).send(errorMessages);
  }
}

module.exports = authenticateAuthenticateAuth;
