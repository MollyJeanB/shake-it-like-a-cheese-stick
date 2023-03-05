import React, { useState, useEffect } from "react"

type PropsType = {
    isActive: boolean,
}

export const getRandomWordFromArray = (wordArray: string[]): string => wordArray[Math.floor(Math.random() * wordArray.length)]


export const getDanceDirection = (): string => {
    const actions = [
        'Shake it',
        'Pop it',
        'Wiggle it',
        'Twist it',
        'Bop it',
        'Drop it'
    ]

    const nouns = [
        'cheese stick',
        'octopus',
        'cute little mouse',
        'fidget spinner',
        'pool noodle',
        'wolf',
        'eel',
        'sea cucumber'
    ]

    const standAloneActions = [
        'Jump!',
        'Ski!',
        'Stumble!',
        'Tiptoe.',
        'Moonwalk.',
        'Explode!'
    ]

    const comboAction = `${getRandomWordFromArray(actions)} like a ${getRandomWordFromArray(nouns)}`
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