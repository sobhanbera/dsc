import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import styles from '../../styles/components/SearchBar/index.module.css'

// this react coponent renders a cool search bar
// it takes search term as a prop with name search and setSearch prop to set the search term
export default function SearchBar({searchText, setSearch, search}) {
    return (
        <div className={styles.searchBarContainer}>
            <input id="search_bar" type="text" dataValue="asdf" placeholder="Search..." autocomplete="off" value={searchText} onChange={e => setSearch(e.target.value)} />
            <label for="search_bar">
                <AiOutlineSearch size={22} />
            </label>
        </div>
    )
}