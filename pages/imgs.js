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

`}
`

const Image = styled.img `
${tw ``}
`

const ImageContainer = styled.div `
${tw `flex items-center justify-center bg-white w-full h-full p-8 cursor-pointer`}
`
const Gallery = styled.div `
${tw `bg-gray-200 grid grid-cols-4 gap-2 p-12 h-80 overflow-y-auto overscroll-none`}
`

const urls = [
    "https://source.unsplash.com/J7gpdvyyuEA/400x400/",
    "https://source.unsplash.com/NEab1U1FfKM/400x400",
    "https://source.unsplash.com/8beTH4VkhLI/400x400",
    "https://source.unsplash.com/5A0O12BIsjY/400x400",
    "https://source.unsplash.com/Wpg3Qm0zaGk/400x400",
    "https://source.unsplash.com/cLpdEA23Z44/400x400",
    "https://source.unsplash.com/3sl9_ubYIno/700x700",
    "https://source.unsplash.com/Jg2XRpsON9U/400x300",
    "https://source.unsplash.com/oBX-b6ltYts/400x400",
    "https://source.unsplash.com/OPOg0fz5uIs/400x400",

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
                    <Gallery>
                        {urls.map((url, i) => (<ImageContainer key={i.toString()} onClick={() => {handleClick(i)}}><Image src={url}></Image></ImageContainer>))}
                    </Gallery>
                </Content>      
            </Container>
        </>  
      )
}
