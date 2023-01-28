import React from 'react'
import {
    Box,
    Image,
} from '@chakra-ui/react';
import Boy from '../img/boy.png'

const BidImg = () => {
  return (
    <>
        <Box 
        maxW = '300px' 
        bg = 'white'
        rounded = 'md'
        >
        <Image
          src = {Boy}
          alt = 'boy'
          objectFit = 'cover'
          mx = 'auto'
          rounded = 'md'
         />
      </Box>
    </>
  )
}

export default BidImg