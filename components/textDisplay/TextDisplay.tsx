import React, { useState, useEffect } from "react"
import { getDanceDirection } from "@/utils/danceDirections"
import styles from "./textDisplay.module.css"

type PropsType = {
	isActive: boolean
	speed: number
}

export const TextDisplay: React.FC<PropsType> = ({ isActive, speed }) => {
	const [danceDirection, setDanceDirection] = useState<string>("")
	const speedValue = 5000 - speed

	useEffect(() => {
		if (isActive) {
			setDanceDirection(getDanceDirection())
		} else {
			setDanceDirection("")
		}
	}, [isActive])

	useEffect(() => {
		if (isActive) {
			const interval = setInterval(() => {
				setDanceDirection(getDanceDirection())
			}, speedValue)
			return () => clearInterval(interval)
		}
	}, [isActive, speedValue])

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.text}>{danceDirection}</h1>
		</div>
	)
}
