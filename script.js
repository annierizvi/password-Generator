// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// if your userpassword character is less then 8 characters -
// disply message password needs to be more than 8 characters

// if user password is greater then 128 characters
// disply message prompt that password will be less

// Do you want specialCharacters yes or no
// if yes generate a random character
// if no generate no random chracters

// Do you want numericCharacters yes or no
// if yes generate a random character
// if no generate no random chracters

// Do you want lowerCasedCharacters yes or no
// if yes generate a random character
// if no generate no random chracters

// Do you want upperCasedCharacters yes or no
// if yes generate a random character
// if no generate no random chracters

// generate Random password with

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt('What should be the length of the password? (8-128 characters)')
  );

  if (isNaN(length) || length < 8 || length > 128) {
    alert('Length should be between 8-128 characters');
    return;
  }

  var hasSpecialCharacters = confirm('Click OK if you want special characters');
  var hasNumericCharacters = confirm('Click OK if you want numeric characters');
  var hasLowerCasedCharacters = confirm(
    'Click OK if you want lowercase characters'
  );
  var hasUpperCasedCharacters = confirm(
    'Click OK if you want uppercase characters'
  );

  if (
    !hasSpecialCharacters &&
    !hasNumericCharacters &&
    !hasLowerCasedCharacters &&
    !hasUpperCasedCharacters
  ) {
    alert('You must select at least one character type');
    return;
  }

  var passwordOptions = {
    length,
    hasSpecialCharacters,
    hasNumericCharacters,
    hasLowerCasedCharacters,
    hasUpperCasedCharacters,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return '';

  var result = [];
  var possibleCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    result.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    result.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    result.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    result.push(getRandom(upperCasedCharacters));
  }

  for (var i = result.length; i < options.length; i++) {
    result.push(getRandom(possibleCharacters));
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
