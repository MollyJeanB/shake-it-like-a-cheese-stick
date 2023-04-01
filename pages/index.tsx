import { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { Manrope } from 'next/font/google'
import { Button, TextDisplay } from '@/components'
import { COLORS } from '@/utils/css'

export const Page = styled.div`
padding: 60px 40px;
background-color: ${COLORS.DARK_BLUE};
height: 100vh;
`

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  const [ gameHasStarted, setGameHasStarted ] = useState<boolean>(false)
  return (
    <>
      <Head>
        <title>Shake It Like a Cheese Stick</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={manrope.className}>
        <Page>
      <Button onClick={() => setGameHasStarted(!gameHasStarted)}>
        { gameHasStarted ? 'Stop the dance' : 'Begin the dance' }
      </Button>
        <TextDisplay isActive={gameHasStarted} />
        </Page>
      </main>
    </>
  )
}
