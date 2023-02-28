'use strict';

/*
  To generate a random password. The password (a string) is composed of 4 random lowercase 
  letters (a-z), 1 special character ('-', '_', '.', or '@'), and 4 random numbers (0-9).
*/

const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
const specialCharacter = ['-', '_', '.', '@'];
const randomNumbers = [...new Array(10).keys()];
let password = '';
alphabet.sort(() => Math.random() - 0.5);

for (let i = 0; i < 4; i++) {
    password += alphabet[i]; 
}

specialCharacter.sort(() => Math.random() - 0.5);

for (let i = 0; i < 1; i++) {
    password += specialCharacter[i] ;
}

randomNumbers.sort(() => Math.random() - 0.5);

for (let i = 0; i < 4; i++) {
    password += randomNumbers[i];
}

console.log(password);
console.log();
