import React from 'react'
import {
    Box,
    Flex,
    Text,
    Spacer
  } from '@chakra-ui/react';
import Timer from './Timer'

const Countdown = (props) => {
  return (
    <>
    <Flex py = '1'>
        <Box
            mr = '3px'
            width='45%' 
            p = '2'
            style={{borderColor: '#182549', borderWidth: '1.7px'}}
            bg = '#0e1f35'
            >
          <Text 
          fontSize="sm"
          color = '#00b003'
          fontWeight= '500'
          style={{fontSize:'0.8rem'}}
          >{props.bidName}</Text>
          <Text 
          fontSize="md"
          color = 'white'
          fontWeight= '600'
          >{props.amount}</Text>
        </Box>
        <Spacer/>
        <Box
            ml = '3px' 
            p = '2'
            style={{borderColor: '#232931', borderWidth: '2.5px'}}
            bg = '#0e1f35'
            width='55%'
            >
            <Text 
            color = '#6c91b5'
            fontWeight= '500'
            style={{fontSize:'0.8rem'}}
            >{props.auction}</Text>
            {/* <Text 
            fontSize="md"
            color = 'white'
            fontWeight= '600'
            >$260</Text> */}
            <Timer/>
        </Box>
    </Flex>
    </>
  )
}

export default Countdown