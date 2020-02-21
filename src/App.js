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
      width="100%"
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
        <Flex justifyContent="flex-end" width="100%">
          <Box width={{ xs: "100%", md: 380 }}>
            <Grid templateColumns={{ xs: "1fr", md: "1fr 1fr" }} m={4} gap={4}>
              <Button variantColor="blue" variant="outline" width={"100%"}>
                Cancel
              </Button>
              <Button variantColor="blue" width={"100%"}>
                Save Settings
              </Button>
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </ThemeProvider>
);

export default App;
