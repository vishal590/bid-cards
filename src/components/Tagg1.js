import React from 'react'
import {HStack, Tag} from '@chakra-ui/react';

const Tagg1 = () => {
  return (
    <>
    <HStack 
        mt = '1'
        mb = '4' 
        spacing='52%'
      >
        {['HOT DEAL', 'SALE'].map(item => (
          <Tag 
            key = {item}
            borderRadius = 'full'
            border='2px solid #2f457f'
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

export default Tagg1