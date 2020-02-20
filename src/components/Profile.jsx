import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea
} from "@chakra-ui/core";

const Profile = () => (
  <Flex
    display="flex"
    flexDirection="row"
    alignItems="flex-start"
    justifyContent="flex-start"
    p={4}
  >
    <Box width={500} mr={8}>
      <Text fontSize="xl" mb={4}>
        Profile
      </Text>
      <Text color="gray.500">
        This information will be shown publicly so be careful what information
        you provide
      </Text>
    </Box>
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
      mt={2}
    >
      <Flex width="100%">
        <FormControl width="100%" mb={8} mr={4}>
          <FormLabel>First Name</FormLabel>
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
);

export default Profile;
