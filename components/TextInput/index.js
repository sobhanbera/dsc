import React from 'react'

import styles from '../../styles/components/SearchBar/index.module.css'

export default function TextInput({searchText, setSearch, placeholder}) {
    return (
        <div className={styles.searchBarContainer}>
            <input id="search_bar" type="text" placeholder={placeholder || 'Search...'} autoComplete="off" value={searchText} onChange={e => setSearch(e.target.value)} />
        </div>
    )
}
