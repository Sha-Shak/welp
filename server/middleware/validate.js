// helpers
const lengthFilter = (input, long=25, short=2) => {
  return input.length < long && input.length > short
}

// User
const userName = (first, last) => {
  return lengthFilter(first) && lengthFilter(last);
}

//email
const validEmail = (email) => {
  const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  return valid.test(email) && lengthFilter(email, 40, 5);
}

// password
const validPassword = (password) => {
  // requires at least one of each of lower and uppercase letters, digits and special characters
  const lower = /[a-z]/.test(password) ? 1 : 0;
  const upper = /[A-Z]/.test(password) ? 1 : 0;
  const digit = /\d/.test(password) ? 1 : 0;
  const special = /[~`!#$%\^&*+=\@\-\[\]\\';,/{}|\\":<>\?]/g.test(password) ? 1 : 0;
  const res = lower + upper + digit + special;
  return res >= 4 && lengthFilter(password, 15, 8);
}

const userTest = (first, last, email, password) => {
  const fails = [];
  if (!userName(first, last)) {fails.push( first +' '+ last)};
  if (!validEmail(email)) {fails.push(email)};
  if (!validPassword(password)) {fails.push(password)}
  return fails;
}

// organization
const validOrgName = (orgName) => {
  return lengthFilter(orgName);
}

const validOrgType = (orgType) => {
  return orgType === 'Institution' || orgType === 'Corporation';
}

module.exports = {
  validEmail,
  validPassword,
  userTest
};