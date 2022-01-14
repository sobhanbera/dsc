import React from 'react'
import {AiOutlineLink} from 'react-icons/ai'

import styles from '../../styles/components/SocialLink/index.module.css'
import {isColorBright, shortenText} from '../../utils'
import {SocialPlatformsIconsData} from '../../constants/socials'

export default function SocialLink({data, onEdit, onDelete}) {
    const IconData = SocialPlatformsIconsData.filter(iconData => iconData.tag === data.iconTag)
    const hasIcon = IconData.length > 0
    const Icon = IconData[0]?.Icon

    return (
        <div className={styles.socialLinkCard}>
            <p>{data.tag}</p>
            <div className={styles.socialLinkCardPlatformIcon}>
                <div className={styles.socialLinkCardPlatformIcon}>{hasIcon ? <Icon fill={data.color} /> : <div className={styles.socialLinkCardPlatformIconExtra}></div>}</div>
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
                <a href={data.link} target="_blank" rel="noreferrer">
                    <button onClick={onEdit}>
                        <AiOutlineLink fill={isColorBright(data.color) ? '#000000' : '#ffffff'} />
                    </button>
                </a>
            </div>
        </div>
    )
}
