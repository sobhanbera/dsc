/**
 * this file contains all the contant variables
 * which will be required througout the website
 */

import { randomElementOfArray } from "../utils"

export const GOOGLE_COLORS = {
    BLUE: '#4285F4',
    RED: '#DB4437',
    YELLOW: '#F4B400',
    GREEN: '#0F9D58',
}
export const RANDOM_GOOGLE_COLOR = randomElementOfArray(Object.values(['red', 'blue', 'green', 'yellow']))

export const LIGHT_GDSC_ICON_SRC = 'https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_KzUurne.png'
export const DARK_GDSC_ICON_SRC = 'https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_light_stacked_sGGf21U.svg'

export const HEADER_HEIGHT = 55
