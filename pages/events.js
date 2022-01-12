import React, {useState} from 'react'
import Image from 'next/image'
import htmlParser from 'html-react-parser'
import {VscClose} from 'react-icons/vsc'

import styles from '../styles/pages/Events/index.module.css'
import EventsList from '../constants/events'
import {RedirectButton, SearchBar} from '../components'
import {GDSC_GHRCE_OFFICIAL_DSC_PAGE} from '../constants'
import {shortenText} from '../utils'

export default function Events() {
    const [searchText, setSearch] = useState('') // the search text
    // toggle which event detail to show - and for initial render it is set to first event
    const [showEvent, setShowEvent] = useState(EventsList[0]) // to show event or not and which event to show
    const [showEventBool, setShowEventBool] = useState() // to show event or not and which event to show

    return (
        <div className={styles.eventsPage}>
            <h1>Events</h1>

            <div className={styles.mainEventsContainer}>
                <div className={styles.searchBarContainer}>
                    <SearchBar searchText={searchText} setSearch={setSearch} />
                </div>

                <div className={styles.eventsContainer}>
                    {EventsList.map((event, _) => {
                        // implementing the search feature
                        if (event.name.toLowerCase().indexOf(searchText.toLowerCase()) <= -1 && event.tagsText.toLowerCase().indexOf(searchText.toLowerCase()) <= -1) return null

                        return (
                            <EventCard
                                key={`${event.id}${_}`}
                                eventData={event}
                                setSearch={setSearch}
                                onClick={() => {
                                    setShowEvent(event)
                                    setShowEventBool(true)
                                }}
                            />
                        )
                    })}
                </div>
            </div>

            <RedirectButton link={GDSC_GHRCE_OFFICIAL_DSC_PAGE} title={'See More'} />

            {/* setting id = 0 for not showing */}
            <EventDetails eventData={showEvent} clearEvent={() => setShowEventBool(false)} visible={showEventBool} />
        </div>
    )
}

function EventCard({eventData, onClick, setSearch}) {
    const localTagging = (e, tag) => {
        e.stopPropagation()
        setSearch(tag)
    }

    return (
        <div className={styles.eventsCard} onClick={onClick}>
            <div className={styles.artwork}>
                <img src={eventData.artwork} width={250} height={250} />
            </div>

            <div className={styles.eventDetails}>
                <p>{eventData.time}</p>
                <p>
                    <a href={eventData.url} target="_blank" rel="noreferrer">
                        {eventData.name}
                    </a>
                </p>
                {/* short description of may be 200 characters */}
                <p>{shortenText(eventData.shortDescription, 100)}</p>

                <div className={styles.tags}>
                    {eventData.tags.map(tag => {
                        return (
                            <span key={tag} onClick={e => localTagging(e, tag)}>
                                {tag}
                            </span>
                        )
                    })}
                </div>
                <p>
                    <a href={eventData.url} target="_blank" rel="noreferrer">
                        Go To Event Page
                    </a>
                </p>
            </div>
        </div>
    )
}

function EventDetails({eventData, clearEvent, visible}) {
    return (
        <div className={`${styles.eventDescription} ${visible ? styles.active : styles.inactive}`} onClick={clearEvent}>
            <div className={styles.eventDescriptionCard} onClick={e => e.stopPropagation()}>
                <div className={styles.eventDescriptionHeader}>
                    <p>{eventData?.name}</p>
                    <VscClose onClick={clearEvent} />
                </div>

                <div className={styles.eventDescriptionContent}>{htmlParser(String(eventData?.description), {})}</div>
            </div>
        </div>
    )
}
