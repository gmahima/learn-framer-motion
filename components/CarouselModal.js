import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {motion} from 'framer-motion'
import {Close} from '@styled-icons/evaicons-solid'
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
grid grid-cols-5 bg-red-400
`}
`
const ImageContainer = styled.div `
${tw `
flex items-center justify-center col-start-2 col-end-5 bg-pink-200 
`}
`

const Footer = styled.div `
${tw `flex h-12 w-full items-center justify-end`}
`
const CarouselModal = ({urls, show, closeModal, initialIndex}) => {
    if(!show) {
        return (<></>)
    }
    return (
        <ModalContainer>
            <ContentWrapper>
                <Header>
                     <Close css={tw ` cursor-pointer w-8 h-8 text-gray-100`} onClick={closeModal}/> 
                </Header>
                <MainContent>
                    <ImageContainer>
                        <img src={urls[0]} />
                    </ImageContainer>
                </MainContent>
                <Footer></Footer>
                {/* <div css={tw `bg-red-300`}>asdf</div> */}
            </ContentWrapper>
        </ModalContainer>
    )
    
}


export default CarouselModal