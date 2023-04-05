import { useState } from "react"
import Head from "next/head"
import { Manrope } from "next/font/google"
import { Button, TextDisplay, Slider, Header } from "@/components"

const manrope = Manrope({ subsets: ["latin"] })

export default function Home() {
	const [gameHasStarted, setGameHasStarted] = useState<boolean>(false)
	const [speed, setSpeed] = useState<number>(2250)

	const onChangeSpeed = (value: number) => {
		setSpeed(value)
	}

	const TITLE: string = "Shake It Like a Cheese Stick"
	const SUBTITLE: string = "An interpretive dance facilitation tool"

	return (
		<>
			<Head>
				<title>{TITLE}</title>
				<meta name="description" content={SUBTITLE} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={manrope.className}>
				<Header title={`🧀 ${TITLE} 🧀`} subTitle={SUBTITLE} />
				<Button onClick={() => setGameHasStarted(!gameHasStarted)}>
					{gameHasStarted ? "Stop the dance" : "Begin the dance"}
				</Button>
				<TextDisplay isActive={gameHasStarted} speed={speed} />
				<Slider
					onChange={onChangeSpeed}
					speed={speed}
					isDisabled={!gameHasStarted}
				/>
			</main>
		</>
	)
}
