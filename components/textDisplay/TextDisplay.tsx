import React, { useState, useEffect } from "react"

type PropsType = {
    isActive: boolean,
}

export const getRandomWordFromArray = (wordArray: string[]): string => wordArray[Math.floor(Math.random() * wordArray.length)]


export const getDanceDirection = (): string => {
    const actions = [
        'Shake it',
        'Pop it',
        'Wiggle',
        'Twist it',
        'Bop it',
        'Drop it',
        'Pat it',
        'Jump',
        'Bend',
        'Snap',
        'Shimmy',
        'Stomp',
        'Shake',
        'Flick it',
        'Step',
        'Saunter',
        'Strut',
        'Retreat',
        'Wave',
        'Tiptoe',
        'Glide',
        'Hop',
        'Dip',
        'Flop',
        'Shrug it',
    ]

    const nouns = [
        'a cheese stick',
        'an octopus',
        'a cute little mouse',
        'a fidget spinner',
        'a pool noodle',
        'a wolf',
        'an eel',
        'a sea cucumber',
        'a roomba',
        'a jar of jam',
        '200 pythons',
        'all my secrets',
        'pickles!',
        'a soggy mop',
        '100 years of solitude',
        'beep beep boop boop',
        'a shy robot',
        'several thousand angry bees',
        'Steve Buscemi',
        'your middle school crush',
        'a sea star',
        'a leaky bucket',
        '600 mimes',
        'Meryl Streep',
        'Mister Rogers',
        'a flock of geese',
        'a swan',
        'a hocky puck',
        'a very impressive resume',
        'a jar of soup',
        'a soothing fish tank',
        'a frustrating game',
        'a Kardashian',
    ]

    const standAloneActions = [
        'Jump!',
        'Ski!',
        'Stumble!',
        'Tiptoe.',
        'Moonwalk.',
        'Explode!',
        'Bow down!',
        'Levitate!',
        'Kick it.',
        'Yodel',
        'Take a nap',
        'Stop, drop, and roll',
        'Repent!',
        'Play dead.',
        'Play tennis!',
        'Play chess!',
    ]

    const comboAction = `${getRandomWordFromArray(actions)} like ${getRandomWordFromArray(nouns)}`
    const standAloneAction = getRandomWordFromArray(standAloneActions)

    return getRandomWordFromArray([ comboAction, standAloneAction ])


}

export const TextDisplay: React.FC<PropsType> = ({ isActive }) => {

    const [danceDirection, setDanceDirection] = useState<string>('Waiting to shake it')
    useEffect(() => {
    if ( isActive )  {
        setDanceDirection('...')
    const interval = setInterval(() => {
        setDanceDirection(getDanceDirection())
    }, 3000)

    return () => clearInterval(interval)
    }

}, [ isActive])


    return (
        <h1 >
            { danceDirection  }
        </h1>
    )
}