import React, { useState, useEffect } from "react"
import { getDanceDirection } from "@/utils/danceDirections"

type PropsType = {
    isActive: boolean,
}

export const TextDisplay: React.FC<PropsType> = ({ isActive }) => {

    const [danceDirection, setDanceDirection] = useState<string>('')
    useEffect(() => {
    if ( isActive )  {
        setDanceDirection(getDanceDirection())
    const interval = setInterval(() => {
        setDanceDirection(getDanceDirection())
    }, 3000)

    return () => clearInterval(interval)

    } else {
        setDanceDirection('')
    }

}, [ isActive])


    return (
        <h1 >
            { danceDirection  }
        </h1>
    )
}