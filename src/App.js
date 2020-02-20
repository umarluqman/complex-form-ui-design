import {
  Box,
  Button,
  CSSReset,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
  theme,
  ThemeProvider
} from "@chakra-ui/core";
import React, { Profiler } from "react";
import Basics from "./components/Basics";
import Profile from "./components/Profile";
import Billing from "./components/Billing";
import Notification from "./components/Notification";

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      backgroundColor="gray.50"
      pb={80}
    >
      <Box maxWidth={1000}>
        <Box>
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            mb={8}
            mt={8}
            ml={4}
          >
            <Text fontSize="2xl">Account Setting</Text>
          </Flex>
          <Divider borderColor="gray.300" />
        </Box>

        <Basics />
        <Divider borderColor="gray.300" width="100%" />
        <Profile />
        <Divider borderColor="gray.300" width="100%" />
        <Billing />
        <Divider borderColor="gray.300" width="100%" />
        <Notification />
        <Divider borderColor="gray.300" width="100%" />
        <Flex justify="flex-end">
          <Box my={4}>
            <Button variantColor="blue" variant="outline" mr={4} px={8}>
              Cancel
            </Button>
            <Button variantColor="blue" px={8}>
              Save Settings
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </ThemeProvider>
);

export default App;
