/**
 * this file contains all the contant variables
 * which will be required througout the website
 */

import {randomElementOfArray} from '../utils'

export const GOOGLE_COLORS = {
    BLUE: '#4285F4',
    RED: '#DB4437',
    YELLOW: '#F4B400',
    GREEN: '#0F9D58',
}
export const RANDOM_GOOGLE_COLOR = randomElementOfArray(Object.values(['red', 'blue', 'green', 'yellow']))

export const CONTACT_AREA_LINK = 'mailto:sobhanbera258@gmail.com'
export const CONTACT_AREA_NAME = 'Khushboo Agnihotri'
export const CONTACT_AREA_POSTITION = 'Lead - GDSC GHRCE'
export const CONTACT_AREA_PROVIDED = 'Email'

export const MEDIUM_BLOG_API_LINK = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dsc-ghrce'

export const HEADER_HEIGHT = 55

export const MONTHS_LIST = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
