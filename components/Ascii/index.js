import {useEffect} from 'react'
import {GOOGLE_COLORS} from '../../constants'

/**
 * this is the color version of the above one
 *
 * this will be used to log and above one will be used there for other purpose..
 *
 * schema:
 * [
 *    [
 *       {
 *          part: the text to log out
 *          color: the color of that text
 *       },
 *       {
 *          part: the text to log out
 *          color: the color of that text
 *       },
 *       ...
 *    ],
 *    ...
 * ]
 */
const ColouredActualASCIIArt = [
    // double colors
    [
        {part: '                                ....', color: GOOGLE_COLORS.RED},
        {part: '                    ..', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                             :=******+:', color: GOOGLE_COLORS.RED},
        {part: '              -======-:', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                         .-+***********=', color: GOOGLE_COLORS.RED},
        {part: '           :============:.', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                      .-+***************=', color: GOOGLE_COLORS.RED},
        {part: '         .================:.', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                   .-+******************+', color: GOOGLE_COLORS.RED},
        {part: '         :===================-.', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                .-+*********************:', color: GOOGLE_COLORS.RED},
        {part: '          ======================-.', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '             .-************************:', color: GOOGLE_COLORS.RED},
        {part: '           .-=======================-.', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '          .=************************+:', color: GOOGLE_COLORS.RED},
        {part: '               .-========================-.', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '        :-=-==+******************=:', color: GOOGLE_COLORS.RED},
        {part: '                     .:========================-:', color: GOOGLE_COLORS.GREEN},
    ],

    // triplets
    [
        {part: '      ----------', color: GOOGLE_COLORS.BLUE},
        {part: '=++***********=:', color: GOOGLE_COLORS.RED},
        {part: '                           .:========================:', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '     ---------------', color: GOOGLE_COLORS.BLUE},
        {part: '+******=:', color: GOOGLE_COLORS.RED},
        {part: '                                  :======================:', color: GOOGLE_COLORS.GREEN},
    ],

    // middle four colored ascii text
    [
        {part: '    .-----------------', color: GOOGLE_COLORS.BLUE},
        {part: '=++:', color: GOOGLE_COLORS.RED},
        {part: '                                       .-===', color: GOOGLE_COLORS.YELLOW},
        {part: '================-', color: GOOGLE_COLORS.GREEN},
    ],

    // again triplets
    [
        {part: '     ---------------------:', color: GOOGLE_COLORS.BLUE},
        {part: '                                     :-=====', color: GOOGLE_COLORS.YELLOW},
        {part: '===============-', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '     :-----------------------:.', color: GOOGLE_COLORS.BLUE},
        {part: '                             .:-=============', color: GOOGLE_COLORS.YELLOW},
        {part: '=========-', color: GOOGLE_COLORS.GREEN},
    ],

    // double colors
    [
        {part: '       :------------------------:.', color: GOOGLE_COLORS.BLUE},
        {part: '                       .:========================-.', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '          :------------------------:.', color: GOOGLE_COLORS.BLUE},
        {part: '                 .-========================-.', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '             :------------------------:', color: GOOGLE_COLORS.BLUE},
        {part: '             :========================-.', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '               .:-----------------------', color: GOOGLE_COLORS.BLUE},
        {part: '           -======================-.', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                   .--------------------:', color: GOOGLE_COLORS.BLUE},
        {part: '         :====================:.', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                      .:-----------------', color: GOOGLE_COLORS.BLUE},
        {part: '         :=================:.', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                         .:-------------', color: GOOGLE_COLORS.BLUE},
        {part: '           -============-:', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                            .:--------:', color: GOOGLE_COLORS.BLUE},
        {part: '             .========-.', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                                .:::.', color: GOOGLE_COLORS.BLUE},
        {part: '                 .::-:.', color: GOOGLE_COLORS.YELLOW},
    ],

    //  GDSC ASCII ART TEXT STARTS FROM HERE...
    [
        {part: '                              ░██████╗░██████╗░', color: GOOGLE_COLORS.RED},
        {part: '░██████╗░█████╗░', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                              ██╔════╝░██╔══██╗', color: GOOGLE_COLORS.RED},
        {part: '██╔════╝██╔══██╗', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                              ██║░░██╗░██║░░██║', color: GOOGLE_COLORS.RED},
        {part: '╚█████╗░██║░░╚═╝', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                              ██║░░╚██╗██║░░██║', color: GOOGLE_COLORS.BLUE},
        {part: '░╚═══██╗██║░░██╗', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                              ╚██████╔╝██████╔╝', color: GOOGLE_COLORS.BLUE},
        {part: '██████╔╝╚█████╔╝', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                              ░╚═════╝░╚═════╝░', color: GOOGLE_COLORS.BLUE},
        {part: '╚═════╝░░╚════╝░', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                         ░██████╗░██╗░░██╗████', color: GOOGLE_COLORS.RED},
        {part: '██╗░░█████╗░███████╗', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                         ██╔════╝░██║░░██║██╔═', color: GOOGLE_COLORS.RED},
        {part: '═██╗██╔══██╗██╔════╝', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                         ██║░░██╗░███████║████', color: GOOGLE_COLORS.RED},
        {part: '██╔╝██║░░╚═╝█████╗░░', color: GOOGLE_COLORS.GREEN},
    ],
    [
        {part: '                         ██║░░╚██╗██╔══██║██╔═', color: GOOGLE_COLORS.BLUE},
        {part: '═██╗██║░░██╗██╔══╝░░', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                         ╚██████╔╝██║░░██║██║░', color: GOOGLE_COLORS.BLUE},
        {part: '░██║╚█████╔╝███████╗', color: GOOGLE_COLORS.YELLOW},
    ],
    [
        {part: '                         ░╚═════╝░╚═╝░░╚═╝╚═╝░', color: GOOGLE_COLORS.BLUE},
        {part: '░╚═╝░╚════╝░╚══════╝', color: GOOGLE_COLORS.YELLOW},
    ],
]

export default function AsciiArt(props) {
    /**
     * this component just console logs a ascii art of the GDSC GHRCE logo
     * the way we are rendering this by using console log's unique way colored text renderer
     */
    useEffect(() => {
        ColouredActualASCIIArt.map(asciiArray => {
            // checking the length of this particular array
            // since console log cannot parse when provided in single string
            if (asciiArray.length === 2) {
                console.log(`%c${asciiArray[0].part}%c${asciiArray[1].part}`, `color: ${asciiArray[0].color}`, `color: ${asciiArray[1].color}`)
            } else if (asciiArray.length === 3) {
                console.log(`%c${asciiArray[0].part}%c${asciiArray[1].part}%c${asciiArray[2].part}`, `color: ${asciiArray[0].color}`, `color: ${asciiArray[1].color}`, `color: ${asciiArray[2].color}`)
            } else if (asciiArray.length === 4) {
                console.log(`%c${asciiArray[0].part}%c${asciiArray[1].part}%c${asciiArray[2].part}%c${asciiArray[3].part}`, `color: ${asciiArray[0].color}`, `color: ${asciiArray[1].color}`, `color: ${asciiArray[2].color}`, `color: ${asciiArray[3].color}`)
            }
        })
    }, [])

    return <div>{props.children}</div>
}
