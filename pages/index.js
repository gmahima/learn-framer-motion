import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'
import {motion} from 'framer-motion'
const Container = styled(motion.div)`
${tw `
 bg-gray-100 min-h-screen
 flex flex-col items-center justify-center
 p-12
`}
`
const Sample = styled(motion.div)`
${tw `
 bg-gray-400 w-32 h-32
 p-12
 text-gray-800
 rounded
 text-sm
`}
`

export default function Home() {
  return (
    <Container>
      <Sample animate={{ x: 100 }}>
        hey
      </Sample>
    </Container>
  )
}
