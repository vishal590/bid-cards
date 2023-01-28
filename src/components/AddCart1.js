import React from 'react'
import {
    Button
  } from '@chakra-ui/react';

const AddCart1 = (props) => {
  return (
    <>
        <Button 
            bg='#007df8'
            color='white'
            variant='sharp'
            size='lg'   
            width='100%'
            style={{borderRadius:'0', border:'2px'}}
            py = '1'
            mt = '2'
        >{props.cartButton}</Button>
    </>
  )
}

export default AddCart1