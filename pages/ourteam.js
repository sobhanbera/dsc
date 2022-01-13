import React, { useState } from 'react'

import styles from '../styles/pages/Team/index.module.css'
import TeamMembers, { Lead } from '../constants/team'
import { RedirectButton, SearchBar } from '../components'
import { GDSC_GHRCE_OFFICIAL_DSC_PAGE } from '../constants'

export default function OurTeam() {
    const [searchText, setSearch] = useState('') // the search text

    return (
        <div className={styles.teamsPage}>
            <h1>Team Members</h1>

            <div className={styles.mainTeamsContainer}>
                <div className={styles.searchBarContainer}>
                    <SearchBar searchText={searchText} setSearch={setSearch} />
                </div>

                {Lead.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ?
                    <div className={styles.teamsContainer} style={{
                        justifyContent: 'center'
                    }}>
                        <TeamCard memberData={Lead} />
                    </div>
                    : null}

                <div className={styles.teamsContainer}>
                    {TeamMembers.map((teamMember, _) => {
                        // implementing the search feature
                        if (teamMember.name.toLowerCase().indexOf(searchText.toLowerCase()) <= -1) return null

                        return <TeamCard key={`${teamMember.name}${_}`} memberData={teamMember} />
                    })}
                </div>
            </div>

            <RedirectButton link={GDSC_GHRCE_OFFICIAL_DSC_PAGE} title={'See More'} />
        </div>
    )
}

function TeamCard({ memberData }) {
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
                {memberData.twitter.length > 0 ? <button>
                    <a href={memberData.twitter}>Twitter</a>
                </button> : null}
            </div>
        </div>
    )
}
