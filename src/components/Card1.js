import React, { useState } from 'react'
import {
  Box,
  Flex,
  Spacer,
  HStack
} from '@chakra-ui/react';
import Like from './Like'
import Tagg1 from './Tagg1'
import Countdown1 from './Countdown1';
import Rank from './Rank';
import AddCart from './AddCart';
import AddCart1 from './AddCart1';
import BidImg from './BidImg';


const Card1 = () => {
  const [bidAmount, setBidAmount] = useState('260');
  const [currRank, setCurrRank] = useState('#B8/45788');
  const [currName, setCurrName] = useState('Enoch Citizen');
//   const [highBid, setHighBid] = useState('HIGHEST BID')
  const [highPrice, sethighPrice] = useState('300')
  const [addCart, setAddCart] = useState('ADD TO CART')
  const [buyNow, setbuyNow] = useState('BUY NOW')

  
  const [auctionStart, SetAuctionStart] = useState('FLASH DEALS ENDS IN')

  return (
    <>
      <Box 
      maxW='340px' 
      p = '6'
      bg = '#0b2237'
      rounded="lg"
      >
        <Tagg1/>

        <BidImg/>

        <Flex py = '1'>
          <Rank 
            rank = {currRank}
            namep = {currName}
          />
        <Spacer/>
          <Like/>
        </Flex>

        <Countdown1
          amount = {`$${bidAmount}`}
          bidPrice = {`$${highPrice}`}
          auction = {auctionStart}
        />

            <Flex>
                <Box w='50%' mr='2'>
                    <AddCart cartButton = {addCart} />
                </Box>
                <Box w='50%' ml='2'>
                    <AddCart1 cartButton = {buyNow}  />
                </Box>  
            </Flex>
      </Box>
    </>
  )
}

export default Card1