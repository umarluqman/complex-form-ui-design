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
  Textarea,
  Grid
} from "@chakra-ui/core";

const Profile = () => (
  <Grid templateColumns={{ xs: "1fr", md: "1fr 2fr" }} p={4} mt={2}>
    <Box mr={8} mb={4}>
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
      mt={2}
    >
      <Grid
        templateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={4}
        mb={8}
        width="100%"
      >
        <FormControl>
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
        <FormControl>
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
      </Grid>
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
  </Grid>
);

export default Profile;
