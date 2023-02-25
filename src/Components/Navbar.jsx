import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import  {BiSearch}  from "react-icons/bi";

const Navbar = () => {
  return (
      <Flex padding="0px 20% 20% 20%">
        <Input
          bg="#f9fafb"
          focusBorderColor="black"
          isInvalid 
          errorBorderColor="black"
          placeholder="InstaShop.com"
          size="md"
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
      </Flex>
  );
};

export default Navbar;
