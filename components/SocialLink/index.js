import React from 'react'
import {AiOutlineLink} from 'react-icons/ai'

import styles from '../../styles/components/SocialLink/index.module.css'
import {isColorBright, shortenText} from '../../utils'
import {SocialPlatformsIconsData} from '../../constants/socials'

export default function SocialLink({data, onEdit, onDelete}) {
    const IconData = SocialPlatformsIconsData.filter(iconData => iconData.tag === data.iconTag)[0]?.Icon

    return (
        <div className={styles.socialLinkCard}>
            <p>{data.tag}</p>
            <div className={styles.socialLinkCardPlatformIcon}>
                <IconData fill={data.color} />
            </div>

            <p>
                <a href={data.link} target="_blank" rel="noreferrer">
                    {shortenText(data?.link + '', 30)}
                </a>
            </p>

            <div
                className={styles.socialLinkEditing}
                style={{
                    backgroundColor: data.color,
                    color: isColorBright(data.color) ? '#000000' : '#FFFFFF',
                }}>
                <button onClick={onEdit}>
                    <AiOutlineLink fill={isColorBright(data.color) ? '#000000' : '#ffffff'} />
                </button>
            </div>
        </div>
    )
}
