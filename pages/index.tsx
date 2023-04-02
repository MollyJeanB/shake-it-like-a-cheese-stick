import { useState } from "react"
import styled from "styled-components"
import Head from "next/head"
import { Manrope } from "next/font/google"
import { Button, TextDisplay, Slider } from "@/components"
import { COLORS } from "@/utils/css"

export const Page = styled.div`
	padding: 40px;
	background-color: ${COLORS.DARK_BLUE};
	height: 100vh;
`

export const HeaderWrapper = styled.div`
	padding-bottom: 30px;
`

export const Header = styled.h1`
	text-align: center;
`

export const SubHeader = styled.p`
	text-align: center;
	font-size: 18px;
`

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
				<Page>
					<HeaderWrapper>
						<Header>{`🧀 ${TITLE} 🧀`}</Header>
						<SubHeader>{SUBTITLE}</SubHeader>
					</HeaderWrapper>
					<Button onClick={() => setGameHasStarted(!gameHasStarted)}>
						{gameHasStarted ? "Stop the dance" : "Begin the dance"}
					</Button>
					<TextDisplay isActive={gameHasStarted} speed={speed} />
					<Slider
						onChange={onChangeSpeed}
						speed={speed}
						isDisabled={!gameHasStarted}
					/>
				</Page>
			</main>
		</>
	)
}
