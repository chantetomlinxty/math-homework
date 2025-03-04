const { randomInt } = require('crypto');

function getRandomNodeJSCode() {
  const max = 10;
  const min = 1;
  const codeLength = randomInt(max - min) + min;
  let code = '';
  for (let i = 0; i < codeLength; i++) {
    const char = String.fromCharCode(randomInt(97, 123));
    code += char;
  }
  return code;
}
