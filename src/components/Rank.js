import React from 'react'
import {
    Box,
    Text,
  } from '@chakra-ui/react';

const Rank = (props) => {
  return (
    <>
        <Box
            mr = '2px'
            width='75%' 
            p = '2'
            >
          <Text 
          fontSize="md"
          color = 'white'
          fontWeight= '500'
          >{props.rank}</Text>
          <Text 
          fontSize="md"
          // color = 'white'
          fontWeight= '500'
          style={{color:'#34699c'}}
          >{props.namep}</Text>
        </Box>
    </>
  )
}

export default Rank