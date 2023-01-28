import React from 'react'
import {
    Button
  } from '@chakra-ui/react';

const AddCart = (props) => {
  return (
    <>
        <Button 
            bg='transparent'
            color='white'
            variant='sharp'
            size='lg'   
            width='100%'
            style={{borderRadius:'0', border:'2px solid white'}}
            py = '1'
            mt = '2'
        >{props.cartButton}</Button>
    </>
  )
}

export default AddCart