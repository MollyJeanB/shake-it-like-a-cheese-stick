import React, { useState, useEffect } from "react"
import { getDanceDirection } from "@/utils/danceDirections"
import { TextDisplayWrapper, TextDisplayHeader } from "./textDisplay.styles"

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
		<TextDisplayWrapper>
			<TextDisplayHeader>{danceDirection}</TextDisplayHeader>
		</TextDisplayWrapper>
	)
}
