import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from '../styles/pages/Blogs/index.module.css'
import { Loading, RedirectButton, SearchBar } from '../components'
import { MEDIUM_BLOG_API_LINK, MEDIUM_PAGE } from '../constants'
import { getFormattedDate, shortenText } from '../utils'

const DemoBlog = {
    title: '',
    pubDate: '',
    link: '',
    guid: '',
    author: '',
    thumbnail: '',
    description: '',
    content: '',
    enclosure: {},
    categories: [''],
}
export default function Blogs() {
    const [blogs, setBlogs] = useState([DemoBlog])
    const [searchText, setSearch] = useState('')

    useEffect(() => {
        axios
            .get(MEDIUM_BLOG_API_LINK)
            .then(res => {
                if (res.data.status == 'ok') {
                    setBlogs(res.data.items)
                }
            })
            .catch(err => { })
    })

    const redirectTo = (website = '') => {
        window.open(website, '_blank')
    }

    return (
        <div className={styles.blogsPage}>
            <h1>Blogs</h1>

            <div className={styles.mainBlogsContainer}>
                <div className={styles.searchBarContainer}>
                    <SearchBar searchText={searchText} setSearch={setSearch} />
                </div>

                {blogs[0].title.length > 0 ? (
                    <div className={styles.blogsContainer}>
                        {blogs.map((blog, _) => {
                            // implementing the search feature
                            if (blog.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || blog.author.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                                return <BlogCard key={`${_}`} blog={blog} setSearchText={setSearch} onClick={() => redirectTo(blog.link)} index={_} />
                            }
                            return null
                        })}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>

            <RedirectButton link={MEDIUM_PAGE} title={"Read More..."} />
        </div>
    )
}

function BlogCard({ blog, onClick, setSearchText }) {
    const formattedUploadTime = getFormattedDate(blog.pubDate)

    return (
        <div className={styles.blogCard} onClick={onClick}>
            <div className={styles.imageSection}>
                <img src={blog.thumbnail} alt="blog thumbnail" />
            </div>

            <div className={styles.blogDetail}>
                <p>Published By: {blog.author}</p>
                <p>{formattedUploadTime}</p>

                <p>{blog.title}</p>
                <p>
                    <a href={blog.link} target="_blank" rel="noreferrer">Read The Blog...</a>
                </p>

                <div className={styles.categoriesList}>
                    {blog.categories.map(category => {
                        return (
                            <div onClick={() => setSearchText(category)} className={styles.blogCategory} key={category}>
                                {category}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
