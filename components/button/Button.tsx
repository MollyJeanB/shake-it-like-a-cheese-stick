import React, { ReactNode } from "react"
import styles from "./button.module.css"

type PropsType = {
	children: ReactNode | string
	onClick: Function
}

export const Button: React.FC<PropsType> = ({ children, onClick }) => {
	return (
		<button className={styles.button} onClick={() => onClick()}>
			{children}
		</button>
	)
}
