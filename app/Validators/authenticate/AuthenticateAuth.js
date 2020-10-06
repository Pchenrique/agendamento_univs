'use strict';
const Antl = use('Antl');

class authenticateAuthenticateAuth {
  get rules() {
    return {
      cpf: 'string|required|min:14|max:14',
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
