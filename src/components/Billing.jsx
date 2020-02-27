/**
 * @jsx jsx
 * */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Text,
  theme
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import * as React from "react";

const PlanBox = ({ name, size, setPlan, plan }) => {
  const selected = plan === name;
  return (
    <Box
      borderRadius={8}
      border={
        selected
          ? `2px solid ${theme.colors.teal[400]}`
          : `2px solid ${theme.colors.gray[300]}`
      }
      p={4}
      css={
        selected
          ? {
              "&:hover": {
                cursor: "pointer"
              },
              transition: "0.3s",
              backgroundColor: theme.colors.teal[50]
            }
          : {
              "&:hover": {
                cursor: "pointer",
                transition: "0.3s",
                backgroundColor: "#e6fffa3d",
                borderColor: theme.colors.teal[400]
              }
            }
      }
      textAlign="left"
      height="100%"
      onClick={() => setPlan(name)}
    >
      <Text
        fontSize="sm"
        letterSpacing={1.2}
        fontWeight="semibold"
        color={theme.colors.gray[600]}
        pb={2}
      >
        {name}
      </Text>
      <Text>
        <span>
          <b>
            <span css={{ fontSize: 24 }}>{size}</span> GB
          </b>
        </span>{" "}
        <span css={{ fontWeight: 600, color: theme.colors.gray[600] }}>
          {" "}
          uploads
        </span>
      </Text>
      <Text fontWeight={600} color={theme.colors.gray[600]}>
        <span>
          $ <span css={{ fontWeight: 700, color: theme.colors.black }}>5 </span>
        </span>
        / month
      </Text>
    </Box>
  );
};

const Billing = ({ values, ...formProps }) => {
  const [plan, setPlan] = React.useState("BASIC");

  return (
    <Grid templateColumns={{ xs: "1fr", md: "1fr 2fr" }} p={4} mt={2}>
      <Box mr={8} mb={4}>
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
        mt={2}
      >
        <FormControl width="100%" mb={8} mr={4}>
          <Flex justify="space-between" alignContent="center" mb={2}>
            <FormLabel>Change Plan</FormLabel>
            <Button variant="link" variantColor="blue" fontWeight="normal">
              Cancel Subscription
            </Button>
          </Flex>

          <Grid templateColumns="repeat(auto-fit, minmax(180px,1fr))" gap={5}>
            <PlanBox
              name={"BASIC"}
              size={"1"}
              setPlan={setPlan}
              plan={plan}
              price="5"
            />
            <PlanBox
              name={"ESSENTIAL"}
              size={"5"}
              setPlan={setPlan}
              plan={plan}
              price="10"
            />
            <PlanBox
              name={"PRO"}
              size={"15"}
              setPlan={setPlan}
              plan={plan}
              price="20"
            />
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
    </Grid>
  );
};

export default Billing;
