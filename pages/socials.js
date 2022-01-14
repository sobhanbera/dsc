import React, {useEffect, useState} from 'react'
import {getDatabase, ref, onValue} from 'firebase/database'
import Head from 'next/head'

import {SmallLoading, SocialLink} from '../components'
import styles from '../styles/pages/Socials/index.module.css'

/**
 * a test data just to render the list
 *
 * every property of this object should be empty or unwanted exception will occur
 */
const SocialLinkData = {
    id: '',
    link: '',
    iconTag: '',
    tag: '',
    color: '',
    addedBy: '',
    email: '',
    timestamp: '',
}
export default function Socials() {
    // the list of links - initial value to demo
    const [socialLinks, setSocialLinks] = useState([SocialLinkData])

    const firebaseDatabase = getDatabase()

    /**
     * get the list of icons from firebase database
     * and set it to the state
     * then it will render them alll
     *
     * this method is important
     */
    useEffect(() => {
        // reading the data
        const linksList = ref(firebaseDatabase, '/links')
        onValue(linksList, snapshot => {
            const data = snapshot.val()

            if (data) {
                // structuring the data
                const values = Object.values(data)

                setSocialLinks(values)
            }
        })

        // setSocialLinks()
    }, [])

    return (
        <div className={styles.socialsPage}>
            <Head>
                <title>DSC GHRCE | Social Pages</title>
                <meta name="description" content="We are available in wide range of social media platform. Many of them are listed here. Communicate with us!" />
                <meta name="keywords" content="socials, dsc socials, ghrce socials, dsc-ghrce socials, dsc-ghrce, dsc, ghrce, social media links, linktree" />
            </Head>

            <h1>Our Other Pages</h1>

            <div className={styles.linksAreaStarts}>
                {socialLinks[0].link.length > 0 ? (
                    <div className={styles.linksArea}>
                        {socialLinks[0].link.length > 0
                            ? socialLinks.map(social => {
                                  return <SocialLink key={social.id} onEdit={() => editLink(social.id)} onDelete={() => deleteLink(social)} data={social} />
                              })
                            : null}
                    </div>
                ) : (
                    <SmallLoading />
                )}
            </div>
        </div>
    )
}
