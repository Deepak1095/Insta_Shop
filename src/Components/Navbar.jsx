import React from "react";
import { Flex, Input, Button,Text,Image, Box } from "@chakra-ui/react";
import  {BiSearch}  from "react-icons/bi";

import logo from "../Project_image/insta_shop.png"
import { Link as LinkRouter } from "react-router-dom";
const Navbar = () => {

  return (
      <Flex padding="20px 20px 20px 20px">
        <LinkRouter to="/home">
        <Box display="flex" alignItems="center" paddingRight="20px">
        <Image src={logo} width="60px" height="40px" alt="" ></Image>
        <Text>InstaShop</Text>
        </Box>
        </LinkRouter>
        <Input
          bg="#f9fafb"
          focusBorderColor="black"
          isInvalid 
          errorBorderColor="black"
          placeholder="InstaShop.com"
          // width="100%"
          borderRadius="15px 0px 0px 15px"
        />
        <Button
          color="white"
          bg="black"
          size="md"
          borderRadius="0px 15px 15px 0px"
          paddingX="10px"
          _hover="none"
          _active="none"
        >
          <BiSearch fontSize="28px" />
        </Button>
        <LinkRouter to="/account">
        <Button>Account</Button>
        </LinkRouter>
       
        <Button>Cart</Button>
      </Flex>
  );
};

export default Navbar;
