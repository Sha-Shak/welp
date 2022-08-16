const mock = {};

mock.mockLogin = {
  email: 'codeworks-test1@email.com',
  password: 'password'
}


mock.invalidLogin1 = {
  email: 'codeworks-test1@email.com'
}

mock.invalidLogin2 = {
  password: '123'
}

mock.invalidLogin3 = {
  email: 'codeworks-test1@email.com',
  password: 'password123'
}

module.exports = mock;