import React, {useState, useCallback} from 'react'
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
${tw `w-auto h-auto`}
`

const ImageContainer = styled.div `
${tw `flex bg-gray-300 p-6 justify-center items-center cursor-pointer`}
`

const urls = [
    "https://source.unsplash.com/21LYqbqre8w/400x400/",
    "https://source.unsplash.com/NEab1U1FfKM/400x400",
    "https://source.unsplash.com/8beTH4VkhLI/400x400",
    "https://source.unsplash.com/5A0O12BIsjY/400x400",
    "https://source.unsplash.com/Wpg3Qm0zaGk/400x400",
    "https://source.unsplash.com/cLpdEA23Z44/400x400",
    "https://source.unsplash.com/3sl9_ubYIno/400x400",
    "https://source.unsplash.com/Jg2XRpsON9U/700x300"

]



export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const [initialIndex, setInitialIndex] = useState(-1)
    const closeModal = () => {setShowModal(false)}
    const handleClick = useCallback((i) => {
        setInitialIndex(i)
        setShowModal(true)
    }, [])
    return (
        <>
            {showModal ? <CarouselModal urls={urls} closeModal={closeModal} initialIndex={initialIndex} show={showModal} />: null}
            <Container>
                <Content>
                    {urls.map((url, i) => (<ImageContainer key={i.toString()} onClick={() => {handleClick(i)}}><Image src={url}></Image></ImageContainer>))}
                </Content>      
            </Container>
        </>  
      )
}
