import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
  Grid
} from "@chakra-ui/core";
import React from "react";

const Basics = () => (
  <Grid templateColumns={{ xs: "1fr", md: "1fr 2fr" }} p={4} mt={2}>
    <Box mr={8} mb={4}>
      <Text fontSize="xl" mb={4}>
        Basics
      </Text>
      <Text color="gray.500">
        Having an up-to-date email address attached to your account is a great
        step toward improved account security.
      </Text>
    </Box>
    <Flex flexDirection="column">
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
        <Select variant="outline" size="md" placeholder="Choose..." />
      </FormControl>
      <FormControl mb={8} width="100%">
        <FormLabel>Country</FormLabel>
        <FormErrorMessage>Error message</FormErrorMessage>
        <Select variant="outline" size="md" placeholder="Choose..." />
      </FormControl>
    </Flex>
  </Grid>
);

export default Basics;
