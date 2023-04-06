import React from "react"
import styles from "./slider.module.css"

type PropsType = {
	onChange: Function
	speed: number
}

export const Slider: React.FC<PropsType> = ({ onChange, speed }) => {
	const onInputChange = (value: number) => {
		onChange(value)
	}

	return (
		<div className={styles.wrapper}>
			<input
				name={"speed"}
				id={"speed"}
				className={styles.input}
				type="range"
				min="0"
				max="4500"
				onChange={(event) => onInputChange(parseInt(event.target.value, 10))}
				value={speed}
			/>
			<label htmlFor={"speed"} className={styles.label}>
				{"Dance command speed"}
			</label>
		</div>
	)
}
