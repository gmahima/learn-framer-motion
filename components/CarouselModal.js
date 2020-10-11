import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {motion} from 'framer-motion'
import {Close} from '@styled-icons/evaicons-solid'
import {ArrowRightS, ArrowLeftS} from '@styled-icons/remix-line'
import React, {useState} from 'react'
const ModalContainer = styled.div `
${tw `
z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 fixed flex justify-center items-center
`}
`
const ContentWrapper = styled.div `
${tw `w-full h-full p-12 flex flex-col justify-between`}
`
const Header = styled.div `
${tw `flex h-12 w-full items-center justify-end`}
`

const MainContent= styled.div `
${tw `
grid grid-cols-5
`}
`
const ImageContainer = styled.div `
${tw `
flex items-center justify-center col-start-2 col-end-5 bg-black
`}
`
const NavArrowDiv = styled.div `
${tw `
flex items-center justify-center
`}
`

const Footer = styled.div `
${tw `flex h-12 w-full items-center justify-end`}
`
const CarouselModal = ({urls, closeModal, initialIndex}) => {
    console.log(initialIndex)
    const [index, setIndex] = useState(initialIndex)

    const showPrev = () => {
        if(index>0) {
            setIndex(index-1)
        }
    }
    const showNext = () => {
        if(index<urls.length-1) {
            setIndex(index+1)
        }
    }

    return (
        <ModalContainer>
            <ContentWrapper>
                <Header>
                     <Close css={tw ` cursor-pointer w-8 h-8 text-gray-100`} onClick={closeModal} /> 
                </Header>
                <MainContent>
                    <NavArrowDiv>
                        <ArrowLeftS css={tw `text-gray-400 w-32 cursor-pointer`} onClick={() => {showPrev()}}></ArrowLeftS>
                    </NavArrowDiv>
                    <ImageContainer>
                        {console.log(index)}
                        <img src={urls[index]} />
                    </ImageContainer>
                    <NavArrowDiv>
                        <ArrowRightS css={tw `text-gray-400 w-32 cursor-pointer`} onClick={() => {showNext()}}></ArrowRightS>
                    </NavArrowDiv>
                </MainContent>
                <Footer></Footer>
            </ContentWrapper>
        </ModalContainer>
    )
    
}


export default CarouselModal