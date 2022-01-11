import {MONTHS_LIST} from '../constants'

/**
 * get a random element from any type of aray
 * @param {Array} array any type of array
 * @returns a random element from that array
 */
export function randomElementOfArray(array = []) {
    return array[Math.floor(Math.random() * array.length)]
}

/**
 * get a limited characters string instead of showing a large text show a smaller part of it
 * @param {string} string any string which need to be shorten or is very long
 * @param {numbe} limit number of characters
 * @returns a shorten string so that it does not overflow the UI
 */
export function shortenText(string = '', limit = 30) {
    return string.length > limit ? string.substring(0, limit) + '...' : string.substring(0, limit)
}

/**
 * get a formatted date with date string
 * @param {string} date any date format
 * @returns a well formatted date in string format
 */
export function getFormattedDate(date = new Date().toString()) {
    const time = new Date(date)
    return `${MONTHS_LIST[time.getMonth()]} ${time.getDate()}`
}
