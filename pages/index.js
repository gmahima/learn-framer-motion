import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'
import {motion} from 'framer-motion'
const Container = styled(motion.div)`
${tw `
 bg-gray-100 h-full min-h-screen
 flex flex-col justify-center items-center space-y-2
 p-12
`}
`
const Content = styled(motion.div)`
${tw `
grid grid-cols-4 gap-2 border
`}
`
const Sample = styled(motion.div)`
${tw `
 bg-gray-400 
 text-gray-800
 rounded
 text-sm
 h-32 w-32
 flex items-center justify-center
 text-center
`}
`
const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}
export default function Home() {
  return (
    <Container>

        <Sample animate={{ x: 100 }}>
          x:100
        </Sample>
        <Sample
        drag="x"
        dragConstraints={{left: '100', right: '100'}}
        
        >
          drag x till 100
        </Sample>
        <Sample
        initial="hidden"
        animate="visible"
        variants={variants}
        >
         opacity with variants
        </Sample>

      
    </Container>
  )
}
