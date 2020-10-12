import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {motion} from 'framer-motion'
import {Close} from '@styled-icons/evaicons-solid'
import {ArrowRightS, ArrowLeftS} from '@styled-icons/remix-line'
import React, {useState} from 'react'
import "styled-components/macro";

const variant = props => {
    if(props.disabled) {
        return tw `text-gray-800 cursor-default`
    }
}

const ModalContainer = styled.div `
${tw `
z-50 top-0 left-0 w-full h-full bg-black bg-opacity-90 fixed flex justify-center items-center
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
flex items-center justify-center text-gray-400
`}
svg {
    ${tw `w-32 cursor-pointer`}
    ${variant}
}

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
                    <NavArrowDiv disabled={index<1}>
                        <ArrowLeftS css={tw ``} onClick={() => {showPrev()}}></ArrowLeftS>
                    </NavArrowDiv>
                    <ImageContainer>
                        {console.log(index)}
                        <img src={urls[index]} />
                    </ImageContainer>
                    <NavArrowDiv disabled={index>= urls.length - 1}>
                        <ArrowRightS css={tw ``} onClick={() => {showNext()}}></ArrowRightS>
                    </NavArrowDiv>
                </MainContent>
                <Footer></Footer>
            </ContentWrapper>
        </ModalContainer>
    )
    
}


export default CarouselModal


// import * as React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "@popmotion/popcorn";
// import { images } from "./image-data";

// const variants = {
//   enter: (direction: number) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1
//   },
//   exit: (direction: number) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   }
// };

// export const Example = () => {
//   const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
//   const imageIndex = wrap(0, images.length, page);

//   const paginate = (newDirection: number) => {
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <>
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           key={page}
//           src={images[imageIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 200 },
//             opacity: { duration: 0.2 }
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         />
//       </AnimatePresence>
//       <div className="next" onClick={() => paginate(1)}>
//         {"‣"}
//       </div>
//       <div className="prev" onClick={() => paginate(-1)}>
//         {"‣"}
//       </div>
//     </>
//   );
// };

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
//   return Math.abs(offset) * velocity;
// };
