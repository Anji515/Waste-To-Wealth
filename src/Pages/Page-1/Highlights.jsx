import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRecycle } from "react-icons/fa";

import {
  FcBriefcase,
  FcCollaboration,
  FcDataBackup,
  FcManager,
  FcMindMap,
  FcServices,
} from "react-icons/fc";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;"
      w={"100%"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor={'pointer'}
      transition={'transform 0.5s'}
      _hover={{ width:'110%'}}
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Highlights() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Highlights Of Initiatives
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Under Waste To Wealth Mission
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={8} justify="center">
          <Card
            heading={"800 +"}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={"technologies evaluated"}
          />
          <Card
            heading={"8"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={"technologies demonstrated on ground"}
          />
          <Card
            heading={"2"}
            icon={<Icon as={FaRecycle} w={10} h={10} />}
            description={"open dumpsites converted into waste processing sites"}
          />
          <Card
            heading={"3000 + Tones"}
            icon={<Icon as={FaRecycle} w={10} h={10} />}
            description={"of waste removed from two open drains"}
          />
          <Card
            heading={"150 +"}
            icon={<Icon as={FcServices} w={10} h={10} />}
            description={"technologies displayed on portal"}
          />
          <Card
            heading={"64 +"}
            icon={<Icon as={FcDataBackup} w={10} h={10} />}
            description={"policies & guidelines on portal"}
          />
          <Card
            heading={"3.1 lakh +"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={"citizens sensitized in waste management"}
          />
          <Card
            heading={"450 SSF"}
            icon={<Icon as={FcMindMap} w={10} h={10} />}
            description={"fellows engaged across the country"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
