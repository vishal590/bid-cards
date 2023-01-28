import React, { useState } from 'react'
import {
  Box,
  Flex,
  Spacer
} from '@chakra-ui/react';
import Like from './Like'
import Tagg from './Tagg'
import Countdown from './Countdown';
import Rank from './Rank';
import BidB from './BidB';
import BidImg from './BidImg';


const Card = () => {
  const [bidAmount, setBidAmount] = useState('260');
  const [currRank, setCurrRank] = useState('#B8/45788');
  const [currName, setCurrName] = useState('Enoch Citizen');
  const [highBid, setHighBid] = useState('HIGHEST BID')
  const [auctionStart, SetAuctionStart] = useState('AUCTION ENDS IN')

  return (
    <>
      <Box 
      maxW='340px' 
      p = '6'
      bg = '#0b2237'
      rounded="lg"
      >
        <Tagg/>

        <BidImg/>

        <Flex py = '1'>
          <Rank 
            rank = {currRank}
            namep = {currName}
          />
        <Spacer/>
          <Like/>
        </Flex>

        <Countdown 
          amount = {`$${bidAmount}`}
          bidName = {highBid}
          auction = {auctionStart}
        />

        <BidB />
      
      </Box>
    </>
  )
}

export default Card