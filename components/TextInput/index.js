import React from 'react'

export default function TextInput(props) {
    const {searchText, setSearch} = props
    return <input id="search_bar" type="text" autoComplete="off" value={searchText} onChange={e => setSearch(e.target.value)} {...props} />
}
