const mock = {};

mock.mockLogin = {
  email: 'codeworks-test1@email.com',
  password: 'password'
}


mock.loginWithoutPassword = {
  email: 'codeworks-test1@email.com'
}

mock.loginWithoutEmail = {
  password: '123'
}

mock.loginWithWrongPassword = {
  email: 'codeworks-test1@email.com',
  password: 'password123'
}

module.exports = mock;