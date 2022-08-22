const passwordGenerator = () => {
  const passwordLength = 20;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@£$%^&*?<>'
  let password = ''
  for (let i=0; i<passwordLength; i++) {
    password += chars[Math.floor(Math.random()*chars.length)];
  }
  return password;
} 

module.exports = passwordGenerator;



