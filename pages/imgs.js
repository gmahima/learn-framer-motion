import React, {useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {motion} from 'framer-motion'
import CarouselModal from '../components/CarouselModal'
const Container = styled(motion.div)`
${tw `
 bg-gray-100 h-full min-h-screen
 flex flex-col justify-center items-center space-y-2
 p-32
`}
`

const Content = styled(motion.div)`
${tw `
grid grid-cols-4 gap-8 border
`}
`

const Image = styled.img `
${tw ``}
`

const ImageContainer = styled.div `
${tw `flex bg-gray-300 p-6 justify-center items-center cursor-pointer`}
`

const urls = [
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/100x200",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400",
    "https://source.unsplash.com/random/400x400"

]



export default function Home() {
    const [show, setShow] = useState(false)
    const closeModal = () => {setShow(false)}
    const [initialIndex, setInitialIndex] = useState(0)

    return (
        <>
            <CarouselModal urls={urls} closeModal={closeModal} show={show} initialIndex={initialIndex}/>
            <Container>
                <Content>
                    {urls.map((url, i) => (<ImageContainer key={i.toString()} onClick={() => {setShow(true); setInitialIndex(i)}}><Image src={url}></Image></ImageContainer>))}
                </Content>      
            </Container>
        </>  
      )
}
