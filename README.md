# random-password

## Tutorial to generate random password

Password is the most important things in our lives, but how to generate a random password?
we will use ```JavaScript``` to generate a random password which contains different letters,
numbers and characters.


#To generate a random password. The password (a string) is composed of 4 random lowercase 
#letters (a-z), 1 special character ('-', '_', '.', or '@'), and 4 random numbers (0-9), follow these steps :

We ues ```For loops``` and  ```sort(() => Math.random() function ``` 

```javascript
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

```
### Testing 
- [Result Test](https://jsfiddle.net/qpeczr7v/1/)

### References
- [JavaScript for statement](https://www.w3schools.com/jsref/jsref_for.asp)
