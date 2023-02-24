import React from 'react'
import { Flex, Box, Input, Button,Spacer } from '@chakra-ui/react'
const Footer = () => {
  return (
    <>
    
   <Flex gap={3}>
    <div style={{display:"flex",flexDirection:"row",backgroundColor:"#545871",color:"white"}}>
     <div style={{display:"flex"}}>
    <Box>
   <h2>Get Email Deals & Earn Cashback</h2> 
   </Box>
   <Box>
   <Input placeholder='Enter email address' backgroundColor="white"/>
  </Box>
   <Spacer />
   <Box>
   <Button backgroundColor="##f0f1f7" color="black">Sign Up</Button>
   </Box>
  </div>
   <div style={{display:"flex"}}>
   <Box>
    <h2>Link To This Page & Tell All Your Friends!</h2>
   </Box>
   <Box>
    Copy Link
   </Box>
   </div>
   </div>
   </Flex>
   <Flex>
   <Box>About us</Box>
   <Box>Mobile App</Box>
   <Box>Help</Box>
   <Box>Accessibility Statement</Box>
   <Box>Contact us</Box>
   <Box>Partner With Us</Box>
   <Box>Services</Box>
   <Box>Country/Region</Box>
   <Box>Connect</Box>
   <Box>Own Your Own SHOP Site</Box>
   <Box>About us</Box>
   </Flex>
   <p> 1997-2023 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.</p>
   <p>only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases.</p>
   <p>
    <a href='#' style={{textDecoration:"underline"}}>Privacy Policy |  </a> 
    <a href='#' style={{textDecoration:"underline"}}>  Terms of Use  |  </a> 
    <a href='#' style={{textDecoration:"underline"}}>Advertising Disclosure  |  </a> 
   <a href='#' style={{textDecoration:"underline"}}> Return Policy |  </a> 
    <a href='#' style={{textDecoration:"underline"}}>Shipping Information  |  </a> 
    <a href='#' style={{textDecoration:"underline"}}>Do Not Sell My Infromation</a> 
   </p>
   <div style={{disple:"flex",}}>
   <img src="https://img.shop.com/Image/images/ir/Shop-ranks-19-in-newsweek-circle.png" alt="" srcset="" />
   <img src="https://img.shop.com/Image/images/ir/DC360_2022_rank_10_top_500_primary_merch_category.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/DC360_2022_rank_55_top_100.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/DC360_2022_rank_80_top_500_and_1000.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/Shop-ranks-13-in-NC-circle.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/commonwealth_2022_rank_22_top_2000_tw_english.png" alt="" />
   <img src="https://www.bbb.org/local/0503/torch_award/past-torch-award-winners.html" alt="" />
   <img src="https://seal-greensboro.bbb.org/seals/blue-seal-150-110-bbb-4002355.png" alt="" />
   </div>
   <img src="https://seal.digicert.com/seals/cascade/?tag=mcRGO2B9&referer=www.shop.com&format=png&lang=en&seal_number=3&seal_size=m&an=min" alt="" />
   </>
  )
}

export default Footer