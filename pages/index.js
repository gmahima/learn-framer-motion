import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'
import {motion} from 'framer-motion'
const Container = styled(motion.div)`
${tw `
 bg-gray-100 min-h-screen
 flex flex-col items-center
 p-12
`}
`
const Sample = styled(motion.div)`
${tw `
 bg-gray-400 w-56 h-56
 text-center 
 p-12
`}
`

export default function Home() {
  return (
    <Container>
      <Sample animate={{ scale: 0.5 }}>
        hey
      </Sample>
    </Container>
  )
}
