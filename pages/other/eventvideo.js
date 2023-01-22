import {useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import ReactPlayer from 'react-player'

// default link generation will be
// http://dsc-ghrce.vercel.app/other/eventvideo?vid=PG5BHhe0byc&img=https://user-images.githubusercontent.com/50291544/213923070-461b1cf8-c192-465c-b34d-0f12fc72a8dd.png
export default function LandingPage() {
    const router = useRouter()

    // the state to store image and video
    const [imageURL, setImageURL] = useState('https://user-images.githubusercontent.com/50291544/213923070-461b1cf8-c192-465c-b34d-0f12fc72a8dd.png')
    const [videoURL, setVideoURL] = useState('PG5BHhe0byc')

    // the state to store if the video is playing or not
    const [playing, setPlaying] = useState(false)

    // to control the player
    const playerRef = useRef(null)

    useEffect(() => {
        // get the videoID or videoURL from the query params
        // this video is youtube video
        // and also get the imageURL from the query params
        const imgURL = router.query.img
        const vidURL = router.query.vid

        if (imgURL && vidURL) {
            setImageURL(imgURL)
            setVideoURL(vidURL)
        }
    }, [router.query.img, router.query.vid, router])

    return (
        <div
            style={{
                backgroundColor: 'white',
            }}
        >
            <Head>
                <title>Event Video</title>
            </Head>

            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    background: 'white',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 10000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={imageURL}
                    alt={'query param'}
                    width={'90%'}
                    style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        background: 'white',
                    }}
                    onClick={() => {
                        setPlaying(play => !play)
                    }}
                />

                <ReactPlayer
                    ref={playerRef}
                    width="0%"
                    height="0%"
                    url={'https://youtube.com/watch?v=' + videoURL}
                    playing={playing}
                    controls={false}
                    loop={true}
                    playbackRate={1}
                    volume={1}
                    muted={false}
                    //
                />
            </div>
        </div>
    )
}
