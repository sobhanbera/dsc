import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VscClose } from 'react-icons/vsc'
import { AiOutlineLink } from 'react-icons/ai'

import styles from '../styles/pages/videos/index.module.css'
import { SearchBar, Loading, RedirectButton } from '../components'
import { shortenText } from '../utils'
import { YOUTUBE_CHANNEL_LINK } from '../constants'

// This page will render a list of youtube videos
// It will also render a search bar
// It will also render a list of Videos
// It will also render a list of Tags
// the videos will be filtered by the search bar
// the videos will be filtered by the tag
// the videos data will come from api /api/videos
// the api request is made with axios
const DemoVideoData = {
    title: '',
    index: 0,
    id: '',
    shortUrl: '',
    url: '',
    author: {
        url: '',
        channelID: '',
        name: '',
    },
    thumbnails: [
        {
            url: '',
            width: 336,
            height: 188,
        },
        {
            url: '',
            width: 246,
            height: 138,
        },
        {
            url: '',
            width: 196,
            height: 110,
        },
        {
            url: '',
            width: 168,
            height: 94,
        },
    ],
    bestThumbnail: {
        url: '',
        width: 336,
        height: 188,
    },
    isLive: false,
    duration: '',
    durationSec: 2869,
    isPlayable: true,
}

export default function Videos() {
    const [videos, setVideos] = useState([DemoVideoData]) // the videos list will go here...
    const [searchText, setSearch] = useState('') // the search text
    // if the value of the id of video is null of empty then don't show the video else show the video and play it in
    const [showVideo, setShowVideo] = useState(DemoVideoData) // to show video or not and which video to show

    // fetching the videos list from api and setting the values to show to the end user...
    React.useEffect(() => {
        axios
            .get('/api/videos')
            .then(res => {
                if (res.error) {
                    console.log('error occured')
                } else {
                    // setting the videos to the state
                    setVideos(res.data.data.items)
                }
            })
            .catch(err => {
                console.log('Error in catch: ', err)
            })
    }, [])

    /**
    * helps to launch a interface which will play a certain video based on the input data
    * @param {VideoData} video videos data which is to be opened in the window itself
    **/
    const launchVideo = (video = DemoVideoData) => {
        setShowVideo(video)
    }

    return (
        <div className={styles.videosPage}>
            <h1>Videos</h1>

            <div className={styles.mainVideosContainer}>
                <div className={styles.searchBarContainer}>
                    <SearchBar searchText={searchText} setSearch={setSearch} />
                </div>

                {videos[0].id.length > 0 ? (
                    <div className={styles.videosContainer}>
                        {videos.map((video, _) => {
                            // implementing the search feature
                            if (video.title.toLowerCase().indexOf(searchText.toLowerCase()) <= -1) return null

                            return <VideoCard key={`${video.id}${_}`} video={video} onClick={() => launchVideo(video)} index={_} />
                        })}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>

            <RedirectButton link={YOUTUBE_CHANNEL_LINK} title={"Watch More"} />

            <VideoPlayer video={showVideo} clearVideo={() => setShowVideo(DemoVideoData)} />
        </div>
    )
}

function VideoCard({ video, onClick }) {
    const [description, setDescription] = useState('')
    const title = shortenText(video.title + '', 60)

    useEffect(() => {
        axios
            .get('/api/videodetails', {
                headers: {
                    videoid: video.id,
                },
            })
            .then(res => {
                if (res.data.error) {
                } else {
                    if (res.data.data.videoDescription) setDescription(res.data.data.videoDescription)
                }
            })
            .catch(err => { })
    }, [video.id])

    return (
        <div className={styles.videoCard} onClick={onClick}>
            <div className={styles.imageSection}>
                <img src={video.bestThumbnail.url} alt="video thumbnail" />
            </div>

            <div className={styles.videoDetail}>
                <p>{title}</p>
                {description.length > 1 ? <p>{shortenText(description + '', 150)}</p> : null}
            </div>
        </div>
    )
}

function VideoPlayer({ video, clearVideo }) {
    // console.log(`https://www.youtube.com/embed/${video.id}?autoplay=1&loop=1`)
    console.log(video.title, video.id)

    return (
        <div className={`${styles.videoPlayer} ${video.id.length > 0 ? styles.active : styles.inactive}`}>
            <div className={styles.videoPlayerTop}>
                <a href={video.url} target="_blank"><p><AiOutlineLink />{video.title}</p></a>
                <VscClose onClick={clearVideo} />
            </div>

            <div className={styles.videoPlayerVideoArea} onClick={clearVideo}>
                <iframe
                    // width="712"
                    // height="500"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&loop=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>

            <div className={styles.videoPlayerBottom}></div>
        </div >
    )
}
