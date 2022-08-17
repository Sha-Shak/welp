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


mock.newOrganizationAdmin = {
  firstname: 'Test',
  lastname: 'User1',
  email: 'codeworks-test1@email.com',
  password: 'password',
  type: 'Institution',
  orgName: 'Test Org'
}


mock.newUser = {
  firstname: 'Test',
  lastname: 'User2',
  email: 'codeworks-test2@email.com',
  password: 'password123',
}

module.exports = mock;