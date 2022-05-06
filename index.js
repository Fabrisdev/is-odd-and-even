/**
 * is-odd-and-even
 * Github: https://github.com/fabrisdev/is-odd-and-even
 */

import isOdd from 'is-odd'
import isEven from 'is-even'

/**
 * @param {number | string} i The number to check if it's odd and even
 * @returns {boolean} True if the number is odd and even, false otherwise
 */
export default function isOddAndEven(i){
    return isOdd(i) && isEven(i)
}