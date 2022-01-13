import React, {useState, useEffect} from 'react'
import {VscClose} from 'react-icons/vsc'
import {getAuth} from 'firebase/auth'
import {getDatabase, ref, update, set, remove, onValue} from 'firebase/database'

import {SocialPlatformsIconsData} from '../../../constants/socials'
import styles from '../../../styles/pages/Admin/LinkEdit/index.module.css'
import {AdminSocialLinkPreview, SmallLoading, TextInput} from '../../../components'
import {VALID_LINK_REGEX} from '../../../constants'

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
export default function AdminSideEdit() {
    // the list of links - initial value to demo
    const [socialLinks, setSocialLinks] = useState([SocialLinkData])

    // the values of new social card
    const [newLink, setNewLink] = useState('')
    const [newTag, setNewTag] = useState('')
    const [newColor, setNewColor] = useState('#FFFFFF')
    const [newPlatformTag, setNewPlatformTag] = useState('') // the platform tag

    const [updateLinkData, setUpdateLinkData] = useState(SocialLinkData) // the platform tag

    const [error, setError] = useState('') // the error text to show in the UI

    const [loading, setLoading] = useState(false) // loading controller

    const firebaseDatabase = getDatabase()
    const firebaseAuth = getAuth()

    /**
     * only accept the user if he/she is authenticated and has a valid
     * user id from the firebase database...
     */
    useEffect(() => {
        // console.log(firebaseAuth.currentUser)
        if (firebaseAuth.currentUser?.uid.length <= 0) {
            window.open('/')
        }
    }, [])

    /**
     * chech for valid link everytime
     * when the link value is updated in the state
     */
    useEffect(() => {
        if (newLink.length > 0 && !newLink.match(VALID_LINK_REGEX)) {
            setError('Please provide a valid and secure link.')
        } else {
            setError('')
        }
    }, [newLink])

    /**
     * when platform updates also update
     * the color related to that particular platform icon or so..
     */
    useEffect(() => {
        // since it is tag
        const GetIconData = SocialPlatformsIconsData.filter(icon => icon.tag === newPlatformTag)

        if (GetIconData.length > 0)
            // only one icon will have the same tag so updating the color here...
            setNewColor(GetIconData[0].color)
    }, [newPlatformTag])

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

    /**
     * add new link with data as followings:
     * link, timestamp, tag, icon data, who added, color etc.
     */
    const addNewLink = e => {
        e.preventDefault()

        if (!newLink.trim().match(VALID_LINK_REGEX)) {
            alert('Please enter a valid link.')
        } else if (newTag.trim().length < 3) {
            alert('Please enter a tag of minimum length 3.')
        } else if (newColor.trim().length !== 7) {
            alert('Color value is corrupted.')
        } else if (newPlatformTag.trim().length > 0 && newPlatformTag.trim().length < 5) {
            alert('If you are providing icon data then please provide a valid one.')
        } else {
            // we will add the icon
            setLoading(true)

            const timestamp = new Date().getTime()

            set(ref(firebaseDatabase, '/links/' + timestamp), {
                id: timestamp,
                timestamp: timestamp,
                tag: newTag.trim(),
                link: newLink.trim(),
                color: newColor.trim(),
                iconTag: newPlatformTag.trim(),
                addedBy: firebaseAuth.currentUser.uid,
                udpatedAt: '',
                updatedBy: '',
            })
                .then(res => {
                    setNewLink('')
                    setNewTag('')
                    alert('New link added!!')
                })
                .catch(err => {
                    alert("Couldn't add new links currently...")
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    /**
     * function will trigger a edit event on that particular link item
     * @param {string} id the id of the link item
     */
    const editLink = (id = '') => {
        // since there will be only one with the same id
        const getLinkData = socialLinks.filter(link => link.id === id)
        setUpdateLinkData(getLinkData[0])
    }

    /**
     * this function will delete the link item from database
     * @param {LinkData} linkData the id of the link item to delete
     */
    const deleteLink = (linkData = '') => {
        if (window.confirm('Are you sure you want to delete the link from database. This operation is not reversible.')) {
            remove(ref(firebaseDatabase, '/links/' + linkData.timestamp))
                .then(res => {})
                .catch(err => {
                    alert("Couldn't delete the link currently...")
                })
        }
    }

    return (
        <div className={styles.linkEditPage}>
            <h1>Edit Links</h1>

            <div className={styles.linkEditArea}>
                <h1 id="addnewlink">
                    <a href="#addnewlink">Add New Links</a>
                </h1>

                <form onSubmit={addNewLink}>
                    {/* optional icon field */}
                    <label htmlFor="platformtag">
                        <p>Provide any icon (Optional):</p>
                    </label>
                    <select
                        id="platformtag"
                        onChange={e => {
                            setNewPlatformTag(e.target.value)
                        }}
                        value={newPlatformTag}>
                        {/* the none option */}
                        <option value={''}>Select Icon (Optional)</option>

                        {/* list of all options */}
                        {SocialPlatformsIconsData.map(iconData => {
                            return (
                                <option key={iconData.id} value={iconData.tag}>
                                    {iconData.name}
                                </option>
                            )
                        })}
                    </select>

                    <label htmlFor="color">
                        <p>Background color:</p>
                    </label>
                    <TextInput type="color" id="color" value={newColor} placeholder="Choose color" onChange={e => setNewColor(e.target.value)} />

                    {/* tag input field */}
                    <label htmlFor="tag">
                        <p>Enter a unique tag:</p>
                    </label>
                    <TextInput value={newTag} id="tag" onChange={e => setNewTag(e.target.value)} placeholder={'Enter a tag...'} />

                    {/* link input */}
                    <label htmlFor="link">
                        <p>Actual link goes here:</p>
                    </label>
                    <TextInput value={newLink} id="link" onChange={e => setNewLink(e.target.value)} placeholder={'Enter the link...'} />
                    <p className={styles.errorText}>{error}</p>

                    <button onClick={addNewLink}>Add Link</button>

                    {loading ? <SmallLoading /> : null}
                </form>
            </div>

            {socialLinks[0].link.length > 0 ? (
                <div className={styles.linksAreaStarts}>
                    <h1 id="alllinks">
                        <a href="#alllinks">All Links</a>
                    </h1>

                    <div className={styles.linksArea}>
                        {socialLinks[0].link.length > 0
                            ? socialLinks.map(social => {
                                  return <AdminSocialLinkPreview onEdit={() => editLink(social.id)} onDelete={() => deleteLink(social)} data={social} />
                              })
                            : null}
                    </div>
                </div>
            ) : null}

            <UpdateCard linkData={updateLinkData} clearUpdation={() => setUpdateLinkData(SocialLinkData)} />
        </div>
    )
}

function UpdateCard({linkData, clearUpdation}) {
    const [loading, setLoading] = useState(false) // loading controller

    // the values of new social card
    const [newLink, setNewLink] = useState(linkData.link + '')
    const [newTag, setNewTag] = useState(linkData.tag + '')
    const [newColor, setNewColor] = useState(linkData.color + '' || '#FFFFFF')
    const [newPlatformTag, setNewPlatformTag] = useState(linkData.iconTag + '') // the platform tag

    const [error, setError] = useState('') // the error text to show in the UI

    const firebaseDatabase = getDatabase()
    const firebaseAuth = getAuth()

    /**
     * getting and setting the values of each and every
     * state variable from props we are getting
     */
    useEffect(() => {
        setNewLink(linkData.link)
        setNewTag(linkData.tag)
        setNewColor(linkData.color)
        setNewPlatformTag(linkData.iconTag)
    }, [linkData])

    /**
     * same goes here also
     *
     * chech for valid link everytime
     * when the link value is updated in the state
     */
    useEffect(() => {
        if (newLink.length > 0 && !newLink.match(VALID_LINK_REGEX)) {
            setError('Please provide a valid and secure link.')
        } else {
            setError('')
        }
    }, [newLink])

    /**
     * final update link function
     * this function will update the link in the database
     */
    const updateLink = e => {
        e.preventDefault()

        if (!newLink.trim().match(VALID_LINK_REGEX)) {
            alert('Please enter a valid link.')
        } else if (newTag.trim().length < 3) {
            alert('Please enter a tag of minimum length 3.')
        } else if (newColor.trim().length !== 7) {
            alert('Color value is corrupted.')
        } else if (newPlatformTag.trim().length > 0 && newPlatformTag.trim().length < 5) {
            alert('If you are providing icon data then please provide a valid one.')
        } else {
            // we will add the icon
            setLoading(true)

            const timestamp = new Date().getTime()

            update(ref(firebaseDatabase, '/links/' + linkData.timestamp), {
                updatedAt: timestamp,
                updatedBy: firebaseAuth.currentUser.uid,

                tag: newTag.trim(),
                link: newLink.trim(),
                color: newColor.trim(),
                iconTag: newPlatformTag.trim(),
            })
                .then(res => {
                    alert('Link updated successfully!')
                })
                .catch(err => {
                    alert("Couldn't update the link currently...")
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    return (
        <div className={`${styles.updateArea} ${linkData?.link?.length > 0 ? styles.active : styles.inactive}`} onClick={clearUpdation}>
            <div className={styles.updateCard} onClick={e => e.stopPropagation()}>
                <div className={styles.updateHeader} onClick={e => e.stopPropagation()}>
                    <p>Update Link</p>
                    <VscClose onClick={clearUpdation} />
                </div>

                <form onSubmit={updateLink} onClick={e => e.stopPropagation()}>
                    {/* optional icon field */}
                    <label htmlFor="platformtagu" onClick={e => e.stopPropagation()}>
                        <p>Provide any icon (Optional):</p>
                    </label>
                    <select
                        onClick={e => e.stopPropagation()}
                        id="platformtagu"
                        onChange={e => {
                            setNewPlatformTag(e.target.value)
                        }}
                        value={newPlatformTag}>
                        {/* the none option */}
                        <option value={''}>Select Icon (Optional)</option>

                        {/* list of all options */}
                        {SocialPlatformsIconsData.map(iconData => {
                            return (
                                <option key={iconData.id} value={iconData.tag}>
                                    {iconData.name}
                                </option>
                            )
                        })}
                    </select>

                    <label htmlFor="coloru" onClick={e => e.stopPropagation()}>
                        <p>Background color:</p>
                    </label>
                    <TextInput onClick={e => e.stopPropagation()} type="color" id="coloru" value={newColor} placeholder="Choose color" onChange={e => setNewColor(e.target.value)} />

                    {/* tag input field */}
                    <label htmlFor="tagu" onClick={e => e.stopPropagation()}>
                        <p>Enter a unique tag:</p>
                    </label>
                    <TextInput onClick={e => e.stopPropagation()} value={newTag} id="tagu" onChange={e => setNewTag(e.target.value)} placeholder={'Enter a tag...'} />

                    {/* link input */}
                    <label htmlFor="linku" onClick={e => e.stopPropagation()}>
                        <p>Actual link goes here:</p>
                    </label>
                    <TextInput onClick={e => e.stopPropagation()} value={newLink} id="linku" onChange={e => setNewLink(e.target.value)} placeholder={'Enter the link...'} />
                    <p onClick={e => e.stopPropagation()} className={styles.errorText}>
                        {error}
                    </p>

                    <button onClick={e => e.stopPropagation()} onClick={updateLink}>
                        Update Link
                    </button>

                    {loading ? <SmallLoading onClick={e => e.stopPropagation()} /> : null}
                </form>
            </div>
        </div>
    )
}
