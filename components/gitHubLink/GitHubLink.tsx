import React from "react"
import styles from "./gitHubLink.module.css"

type Props = {
	link: string
}

export const GitHubLink: React.FC<Props> = ({ link }) => {
	return (
		<a href={link}>
			<button className={styles.button} role={"link"}>
				{"Built by MJB 🤸🏻‍♀️"}
			</button>
		</a>
	)
}
