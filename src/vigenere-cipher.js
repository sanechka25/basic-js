const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipher = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91) {
        cipher.push(String.fromCharCode(((message.charCodeAt(i) + key.charCodeAt(j % key.length)) % 26) + 65));
        j++;
      } else {
        cipher.push(message[i]);
      }
    }
    if (this.direct) {
      return cipher.join('');
    }
    return cipher.reverse().join('');
   }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryption = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91) {
        decryption.push(String.fromCharCode(((message.charCodeAt(i) + 26 - key.charCodeAt(j % key.length)) % 26) + 65));
        j++;
      } else {
        decryption.push(message[i]);
      }
    }
    if (this.direct) {
      return decryption.join('');
    }
    return decryption.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
