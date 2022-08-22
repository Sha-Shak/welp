export function generateRandomPassword() {
  var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@&%$()0123456789";
  var pwdLen = 10;
  var randPassword = Array(pwdLen).fill(pwdChars).map((x) => { return x[Math.floor(Math.random() * x.length)] }).join('');
  return randPassword;
}