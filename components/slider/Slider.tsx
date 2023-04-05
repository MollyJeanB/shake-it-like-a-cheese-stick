import React from "react"
import styles from "./slider.module.css"

type PropsType = {
	onChange: Function
	speed: number
	isDisabled: boolean
}

export const Slider: React.FC<PropsType> = ({
	onChange,
	speed,
	isDisabled,
}) => {
	const onInputChange = (value: number) => {
		onChange(value)
	}

	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				type="range"
				min="0"
				max="4500"
				id="speed"
				onChange={(event) => onInputChange(parseInt(event.target.value, 10))}
				value={speed}
				disabled={isDisabled}
			/>
			<label className={styles.label}>{"Dance command speed"}</label>
		</div>
	)
}
