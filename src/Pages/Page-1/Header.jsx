import {
  Stack,
  Flex,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import image from "../../assets/header.jpg";

export default function Header() {
  return (
    <Flex
      w={"full"}
      h={"70vh"}
      backgroundImage={`url(${image})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <HStack
        w={"full"}
        gap={100}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"rgb(134, 252, 0)"}
            fontWeight={700}
            fontFamily={'cursive'}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            About The Mission
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "2xl" })}
          >
            The Waste to Wealth Mission, led by the Office of the Principal
            Scientific Advisor to the Government of India, is dedicated to
            enhancing India's waste management infrastructure. Its primary
            objective is to identify and validate innovative technology
            solutions and models with the ultimate goal of transforming India
            into a zero landfill and zero waste nation.
          </Text>
        </Stack>
        <Stack>
        <iframe width="500" height="280" src="https://www.youtube.com/embed/-dFtR0sGqmM" title="Prime Minister Modi discusses Waste to Wealth at launch event of Swachh Bharat Mission- Urban 2.0" allowfullscreen></iframe>
        </Stack>
      </HStack>
    </Flex>
  );
}
