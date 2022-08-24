const randomGenerator = (flag, length=20) => {
  const chars = (flag === 'pw') ? 
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@£$%^&*?<>' :
    'abcdefghijklmnopqrstuvwxyz'
  let res = ''
  for (let i=0; i<length; i++) {
    res += chars[Math.floor(Math.random()*chars.length)];
  }
  return res;
} 

module.exports = randomGenerator;



