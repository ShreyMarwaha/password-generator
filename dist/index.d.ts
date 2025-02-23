import { GeneratePasswordType } from './index.types';
/**
 * @description Password generator
 *
 * @example
 * generatePassword({
 *      length = 16,
 *      quantity = 2,
 *      includeNumbers: true,
 *      includeLowerCaseChars: true,
 *      includeUpperCaseChars: true,
 *      includeSymbols: true,
 *      noSimilarChars: true
 *      noSequentialChars: true,
 *      dontStartWithANumber: true,
 *      dontStartWithASymbol: true,
 *      noDuplicatesChars: true,
 * })
 *
 * @param {Object} passwordConfig - password configuration
 * @param {number} passwordConfig.length - password length
 * @param {number} passwordConfig.quantity - passwords quantity
 * @param {boolean} passwordConfig.includeNumbers - include numbers or not
 * @param {boolean} passwordConfig.dontStartWithANumber - do not start password with number
 * @param {boolean} passwordConfig.dontStartWithASymbol - do not start password with symbol
 * @param {boolean} passwordConfig.includeLowerCaseChars - include lower case chars in passwords
 * @param {boolean} passwordConfig.includeUpperCaseChars - include upper case chars in passwords
 * @param {boolean} passwordConfig.includeSymbols - include symbols in password
 * @param {boolean} passwordConfig.noSimilarChars - include similar chars in password
 * @param {boolean} passwordConfig.noSequentialChars - passwords without sequences
 * @param {boolean} passwordConfig.noDuplicatesChars - passwords without duplicates
 *
 * @returns {string[]} passwords array
 *
 * @author Nikita Babko <niki.babko@gmail.com>
 * @link <https://github.com/nikitababko>
 */
export declare const generatePassword: GeneratePasswordType;
//# sourceMappingURL=index.d.ts.map