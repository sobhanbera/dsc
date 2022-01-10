import GitHub from './GitHub'
import Discord from './Discord'
import Instagram from './Instagram'
import Linkedin from './Linkedin'
import Twitter from './Twitter'
import Youtube from './Youtube'

const SocialList = [
    {
        id: 'GitHub',
        Svg: GitHub,
        color: '#171515',
        name: 'GitHub',
    },
    {
        id: 'Discord',
        Svg: Discord,
        color: '#738ADB',
        name: 'Discord',
    },
    {
        id: 'Instagram',
        Svg: Instagram,
        color: '#fb3958',
        name: 'Instagram',
    },
    {
        id: 'Linkedin',
        Svg: Linkedin,
        color: '#0A66C2',
        name: 'Linkedin',
    },
    {
        id: 'Twitter',
        Svg: Twitter,
        color: '#1da1f2',
        name: 'Twitter',
    },
    {
        id: 'Youtube',
        Svg: Youtube,
        color: '#c4302b',
        name: 'Youtube',
    },
]
export default SocialList

export {GitHub, Discord, Instagram, Linkedin, Twitter, Youtube}
