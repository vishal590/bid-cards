import React,{useState} from 'react'
import {
    Box,
    Flex,
    Text,
    Spacer,
    Badge
  } from '@chakra-ui/react';
import Timer from './Timer'

const Countdown1 = (props) => {
    const [discount, setdiscount] = useState('30')
  return (
    <>
    <Flex py = '1'>
        <Box
            mr = '3px'
            width='45%' 
            p = '2'
            style={{borderColor: '#182549', borderWidth: '1.7px', position:'relative'}}
            bg = '#0e1f35'
            >
            <Badge 
                ml='1' 
                bg='#00b307' 
                borderRadius ='full'
                px = '2'
                variant='solid'
                style={{position:'absolute', top:'-8px', left:'28px'}}
            >
                {`${discount}% OFF`}
            </Badge>
          <Text 
          fontSize="sm"
          color='#db561e'
          fontWeight= '500'
          style={{textDecoration:'line-through'}}
          >{props.bidPrice}</Text>
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

export default Countdown1