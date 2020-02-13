import React from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
  Select,
  Divider,
  Textarea,
  Grid
} from "@chakra-ui/core";

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      backgroundColor="gray.50"
    >
      <Box width="100%">
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
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        p={4}
      >
        <Box maxWidth="30%" mr={8}>
          <Text fontSize="xl" mb={4}>
            Basics
          </Text>
          <Text color="gray.500">
            Having an up-to-date email address attached to your account is a
            great step toward improved account security.
          </Text>
        </Box>
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          width="100%"
        >
          <FormControl width="100%" mb={8}>
            <FormLabel>Email address</FormLabel>
            <Input
              size="md"
              as="input"
              variant="outline"
              isFullWidth
              focusBorderColor="blue.500"
              errorBorderColor="red.500"
            />
            <FormHelperText>Helper message</FormHelperText>
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
          <FormControl
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            mb={8}
          >
            <FormLabel>Password</FormLabel>
            <Button variant="solid">Change your password</Button>
          </FormControl>
          <FormControl mb={8} width="100%">
            <FormLabel>Language</FormLabel>
            <Select variant="outline" size="md" />
          </FormControl>
          <FormControl mb={8} width="100%">
            <FormLabel>Country</FormLabel>
            <FormErrorMessage>Error message</FormErrorMessage>
            <Select variant="outline" size="md" />
          </FormControl>
        </Flex>
      </Flex>
      <Divider borderColor="gray.300" />
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        p={4}
      >
        <Box maxWidth="30%" mr={8}>
          <Text fontSize="xl" mb={4}>
            Profile
          </Text>
          <Text color="gray.500">
            This information will be shown publicly so be careful what
            information you provide
          </Text>
        </Box>
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          width="100%"
        >
          <Flex>
            <FormControl width="100%" mb={8} mr={4}>
              <FormLabel>Fisrt Name</FormLabel>
              <Input
                size="md"
                as="input"
                variant="outline"
                isFullWidth
                focusBorderColor="blue.500"
                errorBorderColor="red.500"
              />
              <FormErrorMessage>Error message</FormErrorMessage>
            </FormControl>
            <FormControl width="100%" mb={8}>
              <FormLabel>Last Name</FormLabel>
              <Input
                size="md"
                as="input"
                variant="outline"
                isFullWidth
                focusBorderColor="blue.500"
                errorBorderColor="red.500"
              />
              <FormErrorMessage>Error message</FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            mb={8}
          >
            <FormLabel>Picture</FormLabel>
            <Button variant="solid">Change your picture</Button>
          </FormControl>
          <FormControl mb={8} width="100%">
            <FormLabel>Username</FormLabel>
            <Input
              size="md"
              as="input"
              variant="outline"
              isFullWidth
              focusBorderColor="blue.500"
              errorBorderColor="red.500"
            />
          </FormControl>
          <FormControl mb={8} width="100%">
            <FormLabel>About you</FormLabel>
            <Textarea focusBorderColor="blue.500" errorBorderColor="red.500" />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
        </Flex>
      </Flex>
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        p={4}
      >
        <Box maxWidth="30%" mr={8}>
          <Text fontSize="xl" mb={4}>
            Billing
          </Text>
          <Text color="gray.500">
            This information will be shown publicly so be careful what
            information you provide
          </Text>
        </Box>
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          width="100%"
        >
          <FormControl width="100%" mb={8} mr={4}>
            <FormLabel>Change Plan</FormLabel>
            <Grid templateColumns="repeat(auto-fit, minmax(100px,1fr))" gap={6}>
              <Box
                borderRadius={4}
                border={`1px solid ${theme.colors.gray[300]}`}
                p={4}
              >
                <Text>BASIC</Text>
                <Text>
                  <span>
                    <b>1 GB</b>
                  </span>{" "}
                  uploads
                </Text>
                <Text>
                  <span>
                    $ <b>5</b>
                  </span>{" "}
                  / month
                </Text>
              </Box>
              <Box
                borderRadius={4}
                border={`1px solid ${theme.colors.gray[300]}`}
                p={4}
              >
                <Text>ESSENTIAL</Text>
                <Text>
                  <span>
                    <b>1 GB</b>
                  </span>{" "}
                  uploads
                </Text>
                <Text>
                  <span>
                    $ <b>5</b>
                  </span>{" "}
                  / month
                </Text>
              </Box>
              <Box
                borderRadius={4}
                border={`1px solid ${theme.colors.gray[300]}`}
                p={4}
              >
                <Text>PRO</Text>
                <Text>
                  <span>
                    <b>1 GB</b>
                  </span>{" "}
                  uploads
                </Text>
                <Text>
                  <span>
                    $ <b>5</b>
                  </span>{" "}
                  / month
                </Text>
              </Box>
            </Grid>
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>

          <FormControl
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            mb={8}
          >
            <FormLabel>Picture</FormLabel>
            <Button variant="solid">Change your picture</Button>
          </FormControl>
          <FormControl mb={8} width="100%">
            <FormLabel>Username</FormLabel>
            <Input
              size="md"
              as="input"
              variant="outline"
              isFullWidth
              focusBorderColor="blue.500"
              errorBorderColor="red.500"
            />
          </FormControl>
          <FormControl mb={8} width="100%">
            <FormLabel>About you</FormLabel>
            <Textarea focusBorderColor="blue.500" errorBorderColor="red.500" />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  </ThemeProvider>
);

export default App;
