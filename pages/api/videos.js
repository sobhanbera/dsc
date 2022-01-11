import fs from 'fs'
import ytdl from 'ytdl-core'
import ytpl from 'ytpl'

import {SUCCESS, VIDEOS_NOT_FOUND} from '../../constants/codes'

export default function handler(request, response) {
    ytpl('https://www.youtube.com/channel/UCzhxiXjcnIgMX3ALSOsQBmw', {
        pages: 100,
        limit: 1000,
    })
        .then(async res => {
            response.status(200).json({
                error: false,
                code: SUCCESS,
                data: res,
            })
        })
        .catch(err => {
            response.status(200).json({
                error: true,
                code: VIDEOS_NOT_FOUND,
            })
        })
}
