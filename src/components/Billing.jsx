/**
 * @jsx jsx
 * */
import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
  theme,
  Icon
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";

const Billing = () => {
  return (
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="flex-start"
      p={4}
    >
      <Box width={500} mr={8}>
        <Text fontSize="xl" mb={4}>
          Billing
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
        <FormControl width="100%" mb={8} mr={4}>
          <Flex justify="space-between" alignContent="center" mb={2}>
            <FormLabel>Change Plan</FormLabel>
            <Button variant="link" variantColor="blue" fontWeight="normal">
              Cancel Subscription
            </Button>
          </Flex>

          <Grid templateColumns="repeat(auto-fit, minmax(100px,1fr))" gap={6}>
            <Box
              borderRadius={8}
              border={`1px solid ${theme.colors.gray[300]}`}
              p={4}
            >
              <Text
                fontSize="sm"
                letterSpacing={1.2}
                fontWeight="semibold"
                color={theme.colors.gray[600]}
                pb={2}
              >
                BASIC
              </Text>
              <Text>
                <span>
                  <b>
                    <span css={{ fontSize: 24 }}>1</span> GB
                  </b>
                </span>{" "}
                <span css={{ fontWeight: 600, color: theme.colors.gray[600] }}>
                  {" "}
                  uploads
                </span>
              </Text>
              <Text fontWeight={600} color={theme.colors.gray[600]}>
                <span>
                  ${" "}
                  <span css={{ fontWeight: 700, color: theme.colors.black }}>
                    5{" "}
                  </span>
                </span>
                / month
              </Text>
            </Box>
            <Box
              borderRadius={8}
              border={`2px solid ${theme.colors.teal[400]}`}
              p={4}
              backgroundColor={theme.colors.teal[50]}
            >
              <Flex justify="space-between">
                <Text
                  fontSize="sm"
                  letterSpacing={1.2}
                  fontWeight="semibold"
                  color={theme.colors.gray[600]}
                  pb={2}
                >
                  ESSENTIAL
                </Text>
                <Icon name="check-circle" size="24px" color="teal.400" />
              </Flex>
              <Text>
                <span>
                  <b>
                    <span css={{ fontSize: 24 }}>5</span> GB
                  </b>
                </span>{" "}
                <span css={{ fontWeight: 600, color: theme.colors.gray[600] }}>
                  {" "}
                  uploads
                </span>
              </Text>
              <Text fontWeight={600} color={theme.colors.gray[600]}>
                <span>
                  ${" "}
                  <span css={{ fontWeight: 700, color: theme.colors.black }}>
                    10{" "}
                  </span>
                </span>
                / month
              </Text>
            </Box>
            <Box
              borderRadius={8}
              border={`1px solid ${theme.colors.gray[300]}`}
              p={4}
            >
              <Text
                fontSize="sm"
                letterSpacing={1.2}
                fontWeight="semibold"
                color={theme.colors.gray[600]}
                pb={2}
              >
                PRO
              </Text>
              <Text>
                <span>
                  <b>
                    <span css={{ fontSize: 24 }}>15</span> GB
                  </b>
                </span>{" "}
                <span css={{ fontWeight: 600, color: theme.colors.gray[600] }}>
                  {" "}
                  uploads
                </span>
              </Text>
              <Text fontWeight={600} color={theme.colors.gray[600]}>
                <span>
                  ${" "}
                  <span css={{ fontWeight: 700, color: theme.colors.black }}>
                    20{" "}
                  </span>
                </span>
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
          width="100%"
        >
          <FormLabel mb={2}>Payment Method</FormLabel>
          <Flex
            justifyContent="space-between"
            width="100%"
            borderRadius={8}
            border={`1px solid ${theme.colors.gray[300]}`}
            p={4}
            alignItems="center"
          >
            <Box>
              <Text fontSize={18} mb={1}>
                Visa ending 5455
              </Text>
              <Text color="gray.500">expireds 1/2019</Text>
            </Box>
            <Button>Update</Button>
          </Flex>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Billing;
