import React, {useState} from 'react'
import Head from 'next/head'

import styles from '../styles/pages/Team/index.module.css'
import {WebsiteContributors} from '../constants/team'
import {RedirectButton, SearchBar} from '../components'
import {GDSC_GHRCE_OFFICIAL_DSC_PAGE} from '../constants'

export default function OurTeam() {
    const [searchText, setSearch] = useState('') // the search text

    return (
        <div className={styles.teamsPage}>
            <Head>
                <title>DSC GHRCE | Contribution To Website</title>
                <meta name="description" content="Whoever works on this website." />
                <meta name="keywords" content="contributors of gdsc official website, dsc team, ghrce team, dsc-ghrce team, dsc-ghrce, dsc, ghrce, members, community members" />
            </Head>

            <h1>Website Contributors</h1>

            <div className={styles.mainTeamsContainer}>
                <div className={styles.searchBarContainer}>
                    <SearchBar searchText={searchText} setSearch={setSearch} />
                </div>

                <div className={styles.teamsContainer}>
                    {WebsiteContributors.map((teamMember, _) => {
                        // implementing the search feature
                        if (teamMember.name.toLowerCase().indexOf(searchText.toLowerCase()) <= -1) return null

                        return <ContributorCard key={`${teamMember.name}${_}`} memberData={teamMember} />
                    })}
                </div>
            </div>

            <RedirectButton link={GDSC_GHRCE_OFFICIAL_DSC_PAGE} title={'See More'} />
        </div>
    )
}

function ContributorCard({memberData}) {
    return (
        <div className={styles.memberCard}>
            <div className={styles.profileImage}>
                <img src={memberData.image} width={170} height={170} />
            </div>

            <div className={styles.memberDetails}>
                <p>{memberData.name}</p>
                <p>{memberData.role}</p>
            </div>

            <div className={styles.linkButtons}>
                <button>
                    <a href={memberData.profile}>View Profile</a>
                </button>
                {memberData.twitter.length > 0 ? (
                    <button>
                        <a href={memberData.twitter}>Twitter</a>
                    </button>
                ) : null}
            </div>
            <div className={styles.linkButtons}>
                <button>
                    <a href={memberData.github}>GitHub</a>
                </button>
            </div>
        </div>
    )
}
