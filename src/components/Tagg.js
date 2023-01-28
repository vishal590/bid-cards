import React from 'react'
import {HStack, Tag} from '@chakra-ui/react';

const Tagg = () => {
  return (
    <>
    <HStack 
        mt = '1'
        mb = '4' 
        spacing='47%'
      >
        {['HOT DEAL', 'AUCTION'].map(item => (
          <Tag 
            key = {item}
            borderRadius = 'full'
            border='2px solid orange'
            bg='#141a30'
            color = 'white'
            fontSize='12'
            // minWidth='90px'
          >{item}</Tag>
        ))}
      </HStack>
    </>
  )
}

export default Tagg