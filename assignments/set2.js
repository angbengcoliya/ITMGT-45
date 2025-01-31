/**
 * Set 2
 *
 * This assignment will develop your proficiency with JS's control flows.
 */

/**
 * Shift letter
 *
 * Shift a letter right by the given number.
 * Wrap the letter around if it reaches the end of the alphabet.
 *
 * @param {string} letter A single uppercase English letter, or a space
 * @param {Number} shift The number by which to shift the letter
 * @returns {string} The letter, shifted appropriately, if a letter, otherwise a space.
 */
function shiftLetter(letter, shift) {
    if (letter === ' ') return ' ';
    const base = 'A'.charCodeAt(0);
    return String.fromCharCode(((letter.charCodeAt(0) - base + shift) % 26) + base);
}

/**
 * Caesar cipher
 *
 * Apply a shift number to a string of uppercase English letters and spaces.
 *
 * @param {string} message A string of uppercase English letters and/or spaces
 * @param {Number} shift The number by which to shift the letters
 * @returns {string} The message, shifted appropriately.
 */
function caesarCipher(message, shift) {
    return message.split('').map(char => shiftLetter(char, shift)).join('');
}

/**
 * Shift by letter
 *
 * Shift a letter to the right using the number equivalent of another letter.
 *
 * @param {string} letter A single uppercase English letter, or a space
 * @param {string} letterShift A single uppercase English letter
 * @returns {string} The letter, shifted appropriately
 */
function shiftByLetter(letter, letterShift) {
    if (letter === ' ') return ' ';
    const shift = letterShift.charCodeAt(0) - 'A'.charCodeAt(0);
    return shiftLetter(letter, shift);
}

/**
 * Vigenere cipher
 *
 * Encrypt a message using a keyphrase instead of a static number.
 *
 * @param {string} message A string of uppercase English letters and/or spaces
 * @param {string} key A string of uppercase English letters, no spaces
 * @returns {string} The message, shifted appropriately
 */
function vigenereCipher(message, key) {
    let keyIndex = 0;
    return message.split('').map(char => {
        if (char === ' ') return ' ';
        let shiftedChar = shiftByLetter(char, key[keyIndex % key.length]);
        keyIndex++;
        return shiftedChar;
    }).join('');
}

/**
 * Scytale cipher
 *
 * Encrypts a message by simulating a scytale cipher.
 *
 * @param {string} message A string of uppercase English letters and underscores.
 * @param {number} shift A positive integer that does not exceed the length of the message
 */
function scytaleCipher(message, shift) {
    while (message.length % shift !== 0) {
        message += '_';
    }
    let columns = message.length / shift;
    let result = '';
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < shift; j++) {
            result += message[i + j * columns];
        }
    }
    return result;
}

/**
 * Scytale decipher
 *
 * Decrypts a message that was originally encrypted with the `scytaleCipher` function above.
 *
 * @param {string} message A string of uppercase English letters and underscores.
 * @param {Number} shift A positive integer that does not exceed the length of the message
 */
function scytaleDecipher(message, shift) {
    let columns = message.length / shift;
    let result = new Array(message.length);
    let index = 0;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < shift; j++) {
            result[i + j * columns] = message[index++];
        }
    }
    return result.join('');
}