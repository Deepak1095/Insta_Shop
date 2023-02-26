import React from "react";
import { Flex, Input, Button,Text,Image, Box } from "@chakra-ui/react";
import  {BiSearch}  from "react-icons/bi";
import logo from "../Project_image/insta_shop.png"
import { Link as LinkRouter } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <div>
      <Flex padding="20px 20px 20px 20px">
        <LinkRouter to="/">
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
        <LinkRouter to="/cart">
        <Button>Cart</Button>
        </LinkRouter>
        
      </Flex>
      <Flex display="flex" justifyContent="center" gap="3">
      <Popover>
  <PopoverTrigger>
    <Button>Men</Button>
  </PopoverTrigger>
  <PopoverContent width="90px">
    <PopoverArrow />
    <PopoverCloseButton />
    <LinkRouter to="/MenShirt"><Button width="90px">Shirts</Button></LinkRouter>
    <LinkRouter to="/MenPants"><Button width="90px">Pants</Button></LinkRouter>
    <LinkRouter to="/MenShirt"><Button width="90px">Shoes</Button></LinkRouter>
  </PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger>
    <Button>Women</Button>
  </PopoverTrigger>
  <PopoverContent width="90px">
    <PopoverArrow />
    <PopoverCloseButton />
    <LinkRouter to="/WomenDress"><Button width="90px">Dress</Button></LinkRouter>
    <LinkRouter to="/WomenShoes"><Button width="90px">Shoes</Button></LinkRouter>
   <Button>Jewelery</Button>
  </PopoverContent>
</Popover>
<Button>Watches</Button>
<LinkRouter to="/jewelery"><Button width="90px">Jewelery</Button></LinkRouter>
<Button>Kitchen</Button>
<Button>Furniture</Button>
      </Flex>
      </div>
  );
};

export default Navbar;
