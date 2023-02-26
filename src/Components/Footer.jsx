import React from 'react'
import { Flex, Box, Input, Button,Spacer,Text,Show } from '@chakra-ui/react'
const Footer = () => {
  return (
    <>
    
   <Flex>
   
    <Flex   alignItems="center" height="70px" backgroundColor="#545871" margin="auto" width="100%" display="flex" justifyContent="space-between">
     <Flex display="flex" alignItems="center">
    <Box>
       <Text color="white" padding="0px 10px 0px 10px">Get Email Deals & Earn Cashback</Text>
       </Box> 
       <Box>
        <Input placeholder='Enter email address' backgroundColor="white" width="100%"/>
        </Box>
       <Spacer />
       <Box>
       <Button backgroundColor="##f0f1f7" color="black">Sign Up</Button>
   </Box>
  </Flex>
   <Flex marginLeft="30px" color="white"  >
   <Box padding="0px 10px 0px 10px" >
    <h2>Link To This Page & Tell All Your Friends!</h2>
   </Box>
   <Box  paddingRight="20px" >
    Copy Link
   </Box>
   </Flex>
   </Flex>
   {/* </div> */}
   </Flex>
   <Flex marginTop="1px" height="40px" backgroundColor="#545871" color="white" alignItems="center" display="flex" justifyContent="space-around">
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
   <div style={{display:"flex",justifyContent:"space-between",width:'70%',margin:"auto",padding:"60px"}}>
   <img src="https://img.shop.com/Image/images/ir/Shop-ranks-19-in-newsweek-circle.png" alt="" srcset="" />
   <img src="https://img.shop.com/Image/images/ir/DC360_2022_rank_10_top_500_primary_merch_category.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/DC360_2022_rank_55_top_100.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/DC360_2022_rank_80_top_500_and_1000.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/Shop-ranks-13-in-NC-circle.png" alt="" />
   <img src="https://img.shop.com/Image/images/ir/commonwealth_2022_rank_22_top_2000_tw_english.png" alt="" />
   <img src="https://www.bbb.org/local/0503/torch_award/past-torch-award-winners.html" alt="" />
   <img src="https://img.shop.com/Image/resources/images/torch-tafe2018-badge.png" alt="" />
   <img src="https://seal-greensboro.bbb.org/seals/blue-seal-150-110-bbb-4002355.png" alt="" />
   </div>
  
   </>
  )
}

export default Footer

{/* <Container
maxW="full"
bg="#2f3337"
paddingY="25px"
paddingX="80px"
color={"white"}
>
<Flex justifyContent="space-between" alignItems="center">
  <Box>
    <Text fontSize="sm">© Copyright 2022 , Overstock.com®, Inc.</Text>
    <Text fontSize="sm">
      799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446
    </Text>
  </Box>
  <Show above="md">
    <Flex>
      <Text fontSize="sm" paddingX="20px">
        Privacy Policy
      </Text>
      <Text fontSize="sm" paddingX="20px">
        Terms & Conditions
      </Text>
      <Text fontSize="sm" paddingX="20px">
        *Promotion Terms
      </Text>
      <Text fontSize="sm" paddingX="20px">
        Ships to : INDIA
      </Text>
    </Flex>
  </Show>
</Flex>
</Container> */}