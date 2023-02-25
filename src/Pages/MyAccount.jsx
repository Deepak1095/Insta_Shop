import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { SignUp } from "./account.jsx/SignUp";
import { LoginUser } from "./account.jsx/Login";

const Account = () => {
  return (
    <Box maxW="md" color="#262626" margin="auto" marginY="30px" px="20px">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Sign In</Tab>
          <Tab>Create Account</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <LoginUser />
          </TabPanel>
          <TabPanel p="0">
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Account;
