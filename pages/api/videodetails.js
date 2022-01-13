import fs from 'fs'
import ytdl from 'ytdl-core'
import ytpl from 'ytpl'

import {SUCCESS, VIDEOS_NOT_FOUND} from '../../constants/codes'

export default async function handler(request, response) {
    await ytdl
        .getBasicInfo(request.headers.videoid)
        .then(async res => {
            response.status(200).json({
                error: false,
                code: SUCCESS,
                data: {
                    videoDescription: res.videoDetails.description,
                },
            })
        })
        .catch(err => {
            response.status(200).json({
                error: true,
                code: VIDEOS_NOT_FOUND,
            })
        })
}
