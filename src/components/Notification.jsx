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
  FormHelperText,
  Checkbox,
  Grid,
  CheckboxGroup
} from "@chakra-ui/core";

const Notification = () => (
  <Grid templateColumns={{ xs: "1fr", md: "1fr 2fr" }} p={4} mt={2}>
    <Box mr={8} mb={4}>
      <Text fontSize="xl" mb={4}>
        Notification
      </Text>
      <Text color="gray.500">
        Get notified of activity going on with your account. Notifications will
        be sent to the email that you have provided.
      </Text>
    </Box>
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      mt={2}
    >
      <Flex width="100%">
        <FormControl width="100%" mb={8} mr={4}>
          <CheckboxGroup
            variantColor="blue"
            defaultValue={["naruto", "kakashi"]}
            size="lg"
          >
            <Checkbox value="naruto" alignItems="baseline" mb={4}>
              <Box ml={3}>
                <Text>Account Activity</Text>
                <FormHelperText mt={1}>
                  Get important notifications about you or activity you've
                  missed
                </FormHelperText>
              </Box>
            </Checkbox>
            <Checkbox value="naruto" alignItems="baseline" mb={4}>
              <Box ml={3}>
                <Text>New For You</Text>
                <FormHelperText mt={1}>
                  A weekly email featuring activity from people you folow
                </FormHelperText>
              </Box>
            </Checkbox>
            <Checkbox value="naruto" alignItems="baseline" mb={4}>
              <Box ml={3}>
                <Text>Meetups Near You</Text>
                <FormHelperText mt={1}>
                  Get an email when a Meetup is posted close to your location
                </FormHelperText>
              </Box>
            </Checkbox>
          </CheckboxGroup>
        </FormControl>
      </Flex>
    </Flex>
  </Grid>
);

export default Notification;
